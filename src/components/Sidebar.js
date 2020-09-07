import React, { Component } from 'react';
import songListData from '../data/musicData.js';

class Sidebar extends Component {
  constructor(){
    super();
    this.state = {
      songListIndex: 0,
      songIndex: 0,
      songPic: songListData[0].songDetail[0].songPicture,
      listType: true,
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
    this.props.changeSong(this.state.songListIndex,selectedIndex);
  }

  clickListIcon = () => {
    this.setState({
      listType: !this.state.listType,
    })
    console.log("ee");
    this.props.changeListType();
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

    let sideBarType = this.state.listType ? "sideBar beforRotate":"sideBar rotated";

    return (
      <div className={sideBarType}>
        <div className="singerBlock">
          <span className="sonBlockTitle">播放列表</span>
          <ul>
            {songlists}
          </ul>
        </div>
        <div className="songBlock">
          <div className="songListBlock">
            <span className="sonBlockTitle">歌曲</span>
            <span className="list-block"　onClick={this.clickListIcon}>
              List
              <div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
              </div>
            </span>
            <hr/>
            <ul>
              {songs}
            </ul>
          </div>
          <div className="songPicSideBar"　style={songImg}>
            {/* <img src={sidebar_pic_3} width="100%"/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;