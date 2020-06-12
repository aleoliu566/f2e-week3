import React, { Component } from 'react';

class AlbumPanel extends Component {
  render() {
    const panelStyle = {
      marginTop: '30px',
    };
    return (
      <div>
        <div style={panelStyle}>
          <h3>黑色幽默</h3>
          <p>周杰倫</p>
        </div>
      </div>
    );
  }
}

export default AlbumPanel;