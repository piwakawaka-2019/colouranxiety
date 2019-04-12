import React, { Component } from 'react';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <button>RED</button>
                <button>BLUE</button>
                <button>YELLOW</button>
                <button>GREEN</button>
             </div>



        );
    }
}
 
export default Buttons;