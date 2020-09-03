import React, { Component } from 'react';
import player from '../img/player.svg';
import play from '../img/play.svg';
import pause from '../img/stop.svg';

class Cd extends Component {
  constructor(){
    super();
    this.state = {
      playState: play,
      playTickRotate: -25,
      audio: new Audio(),
    }
  }

  componentWillReceiveProps(newProps){
    this.setState({
      audio: new Audio(newProps.songData.songAudio)
    });
  }

  clickPlayBtn = () => {
    if(this.state.playState === play){
      this.setState({
        playState: pause,
        playTickRotate: 20,
      },function(){
        this.state.audio.play();
      });
      
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

    let songImg = {
      height: "361.5px",
      width: '361.5px',
      backgroundImage: `url(${this.props.songData.songPicture})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',

      boxSizing: 'border-box',
      border: '2px solid #000000',
      borderRadius: '100%',      
      marginLeft: '14%',
      opacity: '0.7',
    };

    return (
      <div>
        <div style={albumSet}>
          <div style={songImg}></div>
          <div style={circleOnTheDisk}></div>
          <div style={playerStyle}>
            <img src={player} className="w-100" />
          </div>
          <div style={playStyle} onClick={this.clickPlayBtn}>
            <img src={this.state.playState} style={playIcon}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Cd;