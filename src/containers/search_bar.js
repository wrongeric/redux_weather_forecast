import React, {Component} from 'react';
import  { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            term: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({
            term: event.target.value,
        })
    }
    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term: '',
        });
    }

    render(){
        const {term}= this.state;
        return (
            <form onSubmit={this.onFormSubmit}className="input-group ">
                <input
                    placeholder={"Get a five-day forecast in your favorite cities"}
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators ({ fetchWeather }, dispatch);
}

//we pass in null - whenever we map a function as a dispatch, it always goes in as the SECOND argument, this container doesn't care about state
export default connect(null, mapDispatchToProps)(SearchBar);

//http://api.openweathermap.org/data/2.5/forecast?appid=5c716eac2b220b425de8c3ecdaa589f6&q-New%20York,us