import React, {Component, Fragment} from 'react';
import Header from './Header';
import RestaurantsDisplay from './Restaurants';

const url = "http://ec2-52-91-30-31.compute-1.amazonaws.com:8443/restaurant/";

class Home extends Component{
    constructor(){
        super()

        this.state={
            restaurant:''
        }
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                restaurant:data
            })
        })
    }

    render(){
        return(
            <Fragment>
                <Header/>
                <RestaurantsDisplay datalist={this.state.restaurant}/>
            </Fragment>
        )
    }
}

export default Home;
