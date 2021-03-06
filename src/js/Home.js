import React, { Component } from 'react';
import axios from 'axios';
import './../css/Home.css';
import Navigation from './Navigation'
import Card from './card';
import Search from './search';
import {Link} from 'react-router-dom';


export default class Home extends Component{

    constructor(props){
        super(props);

        this.state = {
            eventData: []
        }

    }

    componentWillMount(){
        //axios.get('http://localhost:3001/events/popular')
        axios.get('https://socialbackendweb.herokuapp.com/events/popular')
            .then((response) => {

                let events = [];
                for(let i = 0; i < response.data.length; i++){
                    events.push(response.data[i])
                }
                this.setState({
                    eventData: events
                })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }

    render(){
        return (
            <div className="App">
                <Navigation/>
                <Search/>
                <div className="popularCards">
                    {this.state.eventData.map((event, key) => (
                        <Link to={{ pathname:`/Event_Details/${event["idEvent"]}`, state:{ eventID: event["idEvent"]}}}>
                            <Card key={key} image={event["event_image"]} event={event["event_name"]} description={event["event_description"]}/>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
}
