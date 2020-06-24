import React, { Component } from 'react';
import jay from '../img/jay.jpg';
import player from '../img/player.svg';
import play from '../img/play.svg';
import pause from '../img/stop.svg';

class Cd extends Component {
  constructor(){
    super();
    this.state = {
      playState: play,
      playTickRotate: -25,
      audio: new Audio("https://firebasestorage.googleapis.com/v0/b/mp3player-4dc8c.appspot.com/o/Catch_Up.mp3?alt=media&token=822d8b1a-5870-45a0-8845-18bf7b65f04a"),
    }
  }

  clickPlayBtn = () => {
    if(this.state.playState == play){
      this.setState({
        playState: pause,
        playTickRotate: 20,
      });
      this.state.audio.play();      
    } else {
      this.setState({
        playState: play,
        playTickRotate: -25,
      });
      this.state.audio.pause();
    }
  }

  render() {

    const albumSet = {
      position: 'relative',
    }
    const albumPic = {
      boxSizing: 'border-box',
      border: '2px solid #000000',
      borderRadius: '100%',
      width: '86%',
      marginLeft: '14%',
      opacity: '0.7',
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
      transform: `rotate(${this.state.playTickRotate}deg)`,
      transformOrigin: '80% 80%',

    }
    const playerIcon = {
      width: '100%'
    }

    const playStyle = {
      position: 'absolute',
      right: 'calc( 43% - 30px)',
      bottom:'-66px',
      marginRight: `0`,
      display: 'inline',
      width: '60px',
      height: '60px',
      borderRadius: '100%',
      cursor: 'pointer',
    }

    const playIcon = {
      width: '50%',
      marginTop: '13px',
      marginLeft: '25%',
    }
    return (
      <div>
        <div style={albumSet}>
          <img src={jay} style={albumPic}/>
          <div style={circleOnTheDisk}></div>
          <div style={playerStyle}>
            <img src={player} style={playerIcon}/>
          </div>
          <div style={playStyle} onClick={this.clickPlayBtn}>
            <img src={this.state.playState} style={playIcon}/>
          </div>
          {/* <audio controls="controls">
            <source src="https://firebasestorage.googleapis.com/v0/b/mp3player-4dc8c.appspot.com/o/The_Anunnaki_Return.mp3?alt=media&token=375c5c05-7f1c-41cf-9759-c0c59e8bd914" />
          </audio> */}
        </div>
      </div>
    );
  }
}

export default Cd;