import React, { Component } from 'react';
import AlbumCover from './AlbumCover';
import AlbumOrder from './AlbumOrder';
import AlbumPanel from './AlbumPanel';

class Album extends Component {
  render() {
    const albumCoverWidth = '85%';
    const albumOrderWidth = '15%';
    const albumCoverHeight = '40vh';
    const albumPosition = {
      // paddingTop: `calc( (100vh - ${albumCoverWidth}) / 2 )`,
      paddingTop: 'calc( 50vh - 250px )',
    }

    const albumStyle = {
      width: '70vw',
      height: '70vw',
      maxWidth: '500px',
      maxHeight: '500px',
      margin: '0 auto',
      padding: '25px',
      backgroundColor: '#FFFFFF',
      textAlign: 'left',
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
            <AlbumCover />
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