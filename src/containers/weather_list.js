import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        console.log(temps);



        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color={"orange"} units="K" /></td>
                <td><Chart data={pressures} color={"red"} units="hPa" /></td>
                <td><Chart data={humidity} color={"green"} units="%" /></td>
            </tr>
        );
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%) </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps ({ weather}){
    return {weather}; // {weather} === weather: weather}
}

export default connect(mapStateToProps)(WeatherList);