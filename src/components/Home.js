import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

class Home extends React.Component {
    render(){
        return(
            <div>
                <img 
                className="home-img"
                src="https://images.unsplash.com/photo-1520254553641-2eed4cf2ef26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80"
                alt="women smiling"
                />
            <Jumbotron className="jumbo-style">
              <h1 className="display-3">Welcome To Sauti Studio</h1>
              <p className="lead">
              Sauti East Africa is a women-led social enterprise based in Kenya that deploys market and trade information to women cross border traders in “low-technology” environments across East Africa. Sauti leverages on the competitive advantage of mobile technology, specifically USSD and SMS, to deliver tailored trade and market information to traders.
              Our mission is to empower SMEs to trade legally, safely, and profitably.Sauti’s current deployment includes information platforms in Kenya, Uganda, and Rwanda, and has facilitated 30,000 information requests from 4500 cumulative users across the region. 
                </p>
              <hr className="my-2" />
              <p>This app will enable tech-enabled people throughout Africa to quickly communicate their ideas they have to address poverty.</p>
              <p className="lead">
                <Button color="danger">Learn More</Button>
              </p>
            </Jumbotron>
          </div>
        )
    }
}

export default Home;