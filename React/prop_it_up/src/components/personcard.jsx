import React, {Component} from 'react';


class PersonCard extends Component{

    constructor(props){
        super(props)
        this.state = {age: props.age}
    }


    increaseAge = () =>{
        let stateX = {...this.state}
        stateX.age++
        this.setState(stateX)
    }


    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        );
    }
}



export default PersonCard;