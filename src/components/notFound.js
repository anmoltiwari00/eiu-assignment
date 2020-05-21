//core imports
import React from 'react';
//assets imports
import notFound from '../assets/images/not_found.png';
//Not found class
class NotFound extends React.Component {
  render() {
    //local styles
    const container = {
      margin: '0 auto',
      width: '90%',
      textAlign: 'center'
    }
    const text = {
      textAlign: 'center',
      fontSize: '15pt'
    }
    const oops =  {
      fontSize: '30pt',
      margin: '15px'
    }
    //local styles end here
    return(
      <div style={container}>
        <div>
          <img src={notFound} alt="Not Found" />
        </div>
        <div style={text}>
          <div style={oops}>
            <b>Oops!</b>
          </div>
          <div>
              The page you are looking for is not available.
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound;
