import React, { Component } from 'react';
import style from '../css/AlbumPanel.module.css';

class AlbumPanel extends Component {
  render() {
    const panelStyle = {
      marginTop: '30px',
    };
    const videoControlBar = {
      // width: '100%',
      // outline: 'none',
      // borderRadius: '10px',
      // background: '#DEF3F8',
      // boxShadow: '0 0 10px #63A35C inset',
    }

    return (
      <div>
        <div style={panelStyle}>
          <h3>黑色幽默</h3>
          <p className={style.singer}>周杰倫</p>
        </div>
        <div>
          <input type="range" className={style.controlBar} style={videoControlBar}/>
        </div>
      </div>
    );
  }
}

export default AlbumPanel;