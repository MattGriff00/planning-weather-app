import React, { useEffect, useState } from "react";
import { Card } from 'reactstrap';
import Search from '../searchBar/searchBar'

class WeatherData extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        };

        this.onSubmit = this.onSubmit.bind(this)
    }

    /*const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
    
        console.log("Latitude is:", lat)
        console.log("Longitude is:", long)

        fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });

      }, [lat, long]);*/

    onSubmit(city) {
          this.setState({ city });
    };

    render(){
        return(
        <Card> 
            <Search onSubmit={this.onCitySubmit}/>

            <p> City Name: </p>
            {/*{(typeof data.main != 'undefined') ? (
                <div>
                    <p>{lat} Lat, {long} Long</p>
                    <p>City: {data.name}</p>
                    <p>Temp: {data.main.temp}</p>
                </div>
                    ):(
                <div>
                    <p>Refresh</p>
                </div>
                    )}*/}
        </Card>
        )
    }
}

export default WeatherData;