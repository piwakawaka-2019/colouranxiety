import React, { Component } from 'react';
import Word from './Word.jsx'

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log('word on button', this.props)
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