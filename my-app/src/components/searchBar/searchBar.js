import React from "react";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {city: ''};

        this.handleChange = this.handleChange.bind(this);
        this.submitCity = this.submitCity.bind(this);
    }

    handleChange(event){
        this.setState({city: event.target.city});
    }

    submitCity(event){
        event.preventDefault();

        this.setState({city: event.target.city});

        console.log(this.state.city);
    }

    render(){
        return(
            <div>
            <form onSubmit={this.submitCity}>
            <label>
                Name:
                <input type="text" value={this.state.city} onChange={this.handleChange} />
             </label>
                <input type="submit" value="Submit" />                
            </form>
            </div>
        )
    }
}

export default Search;