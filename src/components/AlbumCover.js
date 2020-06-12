import React, { Component } from 'react';
import jay from '../img/jay.jpg';
import player from '../img/player.svg';
import play from '../img/play.svg';

class Cd extends Component {
  render() {
    const albumSet = {
      position: 'relative',
    }
    const albumPic = {
      boxSizing: 'border-box',
      border: '2px solid #000000',
      borderRadius: '100%',
      width: '86%',
      marginLeft: '14%'
    }
    const circleDiameter = 70;
    const circleOnTheDisk={
      width: `${circleDiameter}px`,
      height: `${circleDiameter}px`,
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      right:'43%',
      top:'50%',
      marginRight: `${-circleDiameter/2}px`,
      marginTop: `${-circleDiameter/2}px`,
      borderRadius: '100%',
      border: '2px solid #000000',
      boxSizing: 'border-box'
    }
    const playerStyle = {
      position: 'absolute',
      right: 'calc( 43% -  38px)',
      bottom: '-98px',
      display: 'inline-block',
      width: '200px',
      transform: 'rotate(-25deg)',
      transformOrigin: '80% 80%',

    }
    const playerIcon = {
      width: '100%'
    }

    const playStyle = {
      position: 'absolute',
      right: 'calc( 43% - 15px)',
      bottom:'-60px',
      marginRight: `0`,
      display: 'inline',
      width: '30px',
    }
    const playIcon = {
      width: '100%'
    }
    return (
      <div>
        <div style={albumSet}>
          <img src={jay} style={albumPic}/>
          <div style={circleOnTheDisk}></div>
          <div style={playerStyle}>
            <img src={player} style={playerIcon}/>
          </div>
          <div style={playStyle}>
            <img src={play} style={playIcon}/>
          </div>

        </div>

      </div>
    );
  }
}

export default Cd;