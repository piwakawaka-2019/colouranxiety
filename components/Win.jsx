import React, { Component } from 'react';


class Win extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() {
      const handleClick = (e) => {
        window.location = "/";     
     }

        return (
          <div>
            <h1 className='heading'>That's Awesome</h1>
            <img src={'https://images-na.ssl-images-amazon.com/images/I/51-G3tQVdfL._SX425_.jpg'}/>
            <br>
            </br>
          <button onClick={handleClick}> Try Again! </button>

          </div>
          );
    }
  }
  

export default Win

