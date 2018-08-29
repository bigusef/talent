import React, { Component } from 'react';
import { connect } from 'react-redux';

import { title } from '../../actions';

class Edit extends Component {
    state = {
        expert: null
    }

    componentDidMount () {
        this.props.title(`Edit ${this.props.expert.name}`);
        console.log(this.props.expert);
        
        this.setState({expert: this.props.expert})
    }
    render() {
        return(
            <div>Edit</div>
        );
    }
}

const mapStateToProps = state => ({ expert: state.global.expert });

export default connect(mapStateToProps, {title})(Edit);
