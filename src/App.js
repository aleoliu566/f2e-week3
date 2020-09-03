import React from 'react';
import './App.css';
import Album from './components/Album';
import Sidebar from './components/Sidebar';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.album = React.createRef();
  }

  changeSong = (songlistIdx, songIdx) =>{
    this.album.current.changeSong(songlistIdx , songIdx);
  };

  render(){
    const app={
      backgroundColor: "#FF8C6E",
      height: '100vh',
      textAlign: 'center',
    }
    return(
      <div style={app}>
        <div className="sideBar">
          <Sidebar changeSong = {this.changeSong}/>
        </div>
        <div className="Cover">
          <Album ref={this.album}/>
        </div>    
      </div>
    );
  }
}