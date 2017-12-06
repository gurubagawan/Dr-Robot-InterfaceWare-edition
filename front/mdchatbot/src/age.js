import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
// import {Button, Icon} from 'react-materialize'
// import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';


class Age extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthYear: 0
        }
        this.grabValue = this.grabValue.bind(this)
        this.props.setStep(1)
    }
    grabValue = (event, index, value) => {
        this.setState({
           birthYear: value
        })
    }
    render() {
        let ageArray = []
        for (let i = 1940; i < 2018; i++) {
            ageArray.push(i)
        }
        var ageDropDown = ageArray.map((curAge, j) => {
            return (
                <MenuItem key={j} value={curAge} primaryText={curAge}/>
            )
        })
        return (
            <div className="App">
                <form>
                    <div className="typewriter">
                    <h2> What year were <br/> you born?</h2>
                    </div>
                    <SelectField autoWidth={true} floatingLabelText='Birth year' value={this.state.birthYear} onChange={this.grabValue}>
                        {ageDropDown}
                    </SelectField>
                    <br/>
                    <Link to={'/'}> <RaisedButton backgroundColor= '#E53935'onClick={() => {this.props.previousStep} }> Back </RaisedButton> </Link>
                    <Link to={'/bodyparts'}> <RaisedButton backgroundColor= '#E53935' onClick={() => {this.props.setAge(this.state.birthYear)} }> Next </RaisedButton> </Link>
                </form>
            </div>
        );
    }
}

export default Age
