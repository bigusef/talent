import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {title} from '../../actions/global';

class Add extends Component {
    componentDidMount () {
        this.props.title('add');
    }
    render() {
        return(
            <div>
            add form
            <Link to="/">Home</Link>
            </div>
        );
    };
}

export default connect(null, {title})(Add);