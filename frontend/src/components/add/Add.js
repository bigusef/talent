import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Add extends Component {
    render() {
        return(
            <div>
            add form
            <Link to="/">Home</Link>
            </div>
        );
    };
}

export default Add;