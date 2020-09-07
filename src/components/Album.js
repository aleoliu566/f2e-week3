import React, { Component } from 'react';
import AlbumCover from './AlbumCover';
import AlbumOrder from './AlbumOrder';
import AlbumPanel from './AlbumPanel';
import songListData from '../data/musicData.js';

class Album extends Component {
  constructor(){
    super();
    this.state = {
      songData: songListData[0].songDetail[0]
    }
  }

  changeSong = (songlistIdx , songIdx) => {
    console.log("[Album Test]", songlistIdx, songIdx);
    this.setState({
      songData: songListData[songlistIdx].songDetail[songIdx]
    });
  }

  render() {
    const albumCoverWidth = '85%';
    const albumOrderWidth = '15%';
    const albumCoverHeight = '40vh';
    const albumPosition = {
      paddingTop: 'calc( 50vh - 300px )',
    }

    const albumStyle = {
      width: '70vw',
      height: '70vw',
      maxWidth: '600px',
      maxHeight: '600px',
      margin: '0 auto',
      padding: '25px',
      backgroundColor: '#FFFFFF',
      textAlign: 'left',
      boxSizing: 'border-box',
      border: '3px solid black'
    }

    const albumCover = {
      display: 'inline-block',
      width: albumCoverWidth,
      height: albumCoverHeight,
    };

    const albumOrderPosition = {
      position: 'relative',
      display: 'inline-block',
      verticalAlign: 'top',
      width: albumOrderWidth,
      height: albumCoverHeight,
    };
    
    return (
      <div style={albumPosition}>
        <div style={albumStyle}>
          <div style={albumCover}>
            <AlbumCover songData={this.state.songData}/>
          </div>
          <div style={albumOrderPosition}>
            <AlbumOrder />
          </div>
          <div>
            <AlbumPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default Album;