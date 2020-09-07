import React from 'react';
import './App.css';
import Album from './components/Album';
import Sidebar from './components/Sidebar';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.album = React.createRef();
    this.state = {
      coverType: 'Cover',
    }
  }

  changeSong = (songlistIdx, songIdx) =>{
    this.album.current.changeSong(songlistIdx , songIdx);
  };

  changeListType = () => {
    let type = 'Cover';
    if(this.state.coverType === 'Cover') type = 'CoverLeft';
    this.setState({
      coverType: type
    });
  }

  render(){
    const app={
      backgroundColor: "#FF8C6E",
      height: '100vh',
      textAlign: 'center',
    }
    return(
      <div style={app}>
        <div>
          <Sidebar changeSong = {this.changeSong}
                   changeListType = {this.changeListType}/>
        </div>
        <div className={this.state.coverType}>
          <Album ref={this.album}/>
        </div>    
      </div>
    );
  }
}