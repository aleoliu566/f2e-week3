import React, { Component } from 'react';
import songListData from '../data/musicData.js';

class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      songListIndex: 0,
      songIndex: 0,
      songPic: songListData[0].songDetail[0].songPicture
    }
  }
  selectSongList = (selectedIndex) => {
    this.setState({
      songListIndex: selectedIndex,
      songIndex: 0,
      songPic: songListData[selectedIndex].songDetail[0].songPicture,
    });
  }

  selectSong = (selectedIndex) => {
    this.setState({
      songIndex: selectedIndex,
      songPic: songListData[this.state.songListIndex].songDetail[selectedIndex].songPicture,
    });
    this.props.changeSong();
  }

  render() {
    let songlists = songListData.map((list,idx) => 
      <li onClick={() => this.selectSongList(idx)} 
          key={idx} className={(idx===this.state.songListIndex ? 'selectedList pointer' : 'pointer')}>
            {list.songListName}
      </li>
    );

    let songs = songListData[this.state.songListIndex]['songDetail'].map((list, idx) => 
      <li onClick={() => this.selectSong(idx)}
          key={idx} className={(idx===this.state.songIndex ? 'selectedList pointer' : 'pointer')}>
        {list.songName}
      </li>
    );

    let songImg = {
      width: "100%",
      height: "200px",
      backgroundImage: `url(${this.state.songPic})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    };

    return (
      <div>
        <div className="singerBlock">
          {/* <input></input> */}
          播放列表
          <hr/>
          <ul>
            {songlists}
          </ul>
        </div>
        <div className="songBlock">
          <span>歌曲</span>
          <hr/>
          <ul>
            {songs}
          </ul>
          <div className="songPicSideBar"　style={songImg}>
            {/* <img src={sidebar_pic_3} width="100%"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;