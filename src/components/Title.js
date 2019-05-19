import React from 'react';
import { connect } from 'react-redux';
import { Spinner, Button } from 'reactstrap';

import { updateAppName } from '../actions';

class Title extends React.Component{
    state= {
        newTitleText: this.props.title,
        editing: false
    };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value })
    };

    updateTitle = e => {
        e.preventDefault();
        this.props.updateAppName(this.state.newTitleText);
        this.setState({editing: false});
    };

    render(){
        return(
            <div>
                {!this.state.editing ? (
                    <h1>
                        {this.props.title}{' '}
                    <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" 
                    onClick= { () => this.setState({ editing: true })}
                    />
                    </h1>
                ) : (
                    <div>
                    <input 
                    className="title-input"
                    type="text"
                    name="newTitleText"
                    value={this.state.newTitleText}
                    onChange={this.handleChanges}
                    />
                    <Button onClick={this.updateTitle}>Edit Flow Title</Button>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        title: state.title
    };
};

export default connect(mapStateToProps, { updateAppName })(Title);