import './App.css';
import Search from './components/searchBar/searchBar';
import { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody } from 'reactstrap';
import WeatherData from './components/weatherData/weatherData';

class App extends Component{
  render(){
    return(
      <div>
        <Card className='outer'>
          <CardHeader>Weather App</CardHeader>
          <CardBody>
            <WeatherData/>
          </CardBody>
          <CardFooter>Weather App</CardFooter>
        </Card>
      </div>
    )
  }
}

export default App;
