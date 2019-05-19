import React from 'react';
import { Card, CardBody, Nav, NavItem, NavLink, 
    CardTitle, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';

import { connect } from 'react-redux';

import { addApp } from '../actions';

import Title from './Title';

class Dashboard extends React.Component {
    state={
        newApp: '',
    };


handleChanges = e => {
    this.setState({ newApp: e.target.value })
}

addApp = e =>{
    e.preventDefault();
    this.props.addApp(this.state.newApp);
    this.setState({ newApp: '' })
}

render (){
    return (
            <>
            <div className="dashboard">
            <div className="side-nav">
                <p>Dashboard Menu</p>
                <Nav vertical>
                <NavItem>
                    <NavLink href="#">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Projects</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Overview</NavLink>
                </NavItem>
                </Nav>
            </div>
            <div className="app-design"> 
                <Title />
            
            {this.props.screens && 
            this.props.screens.map(screen => (
                    <Card className="design-card">
                        <CardBody>
                        <CardTitle>{screen.name}</CardTitle>
                        <Form>
                        <FormGroup>
                            <Label for="exampleText">Screen Information</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                            <FormText color="muted">
                                Enter in response description for current flow in the field above. This is what will be displayed on screen to the user.
                            </FormText>
                        </FormGroup>
                        </Form>
                        <Button>Add To This Response</Button>
                        </CardBody>
                    </Card>
            ))}
            </div>
                </div>
            <input 
                type="text"
                value={this.state.newApp}
                onChange={this.handleChanges}
                placeholder="Add in your response title here!"
                />
                <Button color="success" onClick={this.addApp}>Add Additional Responses For Flow</Button>
                <Button>Submit</Button>

            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        screens: state.screens
    };
};

export default connect(mapStateToProps, { addApp })(Dashboard)