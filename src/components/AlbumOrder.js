import React, { Component } from 'react';
import next from '../img/next.svg';
import repeat from '../img/repeat.svg';


class CdOrder extends Component {
  render() {
    const iconStyle = {
      width: '20px',
      height: '20px',
      padding: '10px',
      marginBottom: '20px',
      marginLeft: '20px',
      borderRadius: '100%',
    }
    const transform = {
      transform: 'rotate(180deg)',
    }
    const repeatPosition = {
      position: 'absolute',
      bottom: '-50px',
    }
    const repeatIcon = {
      width: '24px',
      height: '30px',
      marginTop: '-4px',
      marginLeft: '-2px',
    }
    return (
      <div>
        <div className='borderDefault' style={iconStyle}>
          <img src={next} style={transform}/>
        </div>
        <div className='borderDefault' style={iconStyle}>
          <img src={next} />
        </div>
        <div style={repeatPosition}>
          <div className='borderDefault' style={iconStyle}>
            <img src={repeat}  style={repeatIcon}/>
          </div>
        </div>
        
      </div>
    );
  }
}

export default CdOrder;