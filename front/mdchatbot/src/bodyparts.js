import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class Bodyparts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bodyPartValue: 0
        }
        this.grabValue = this.grabValue.bind(this)
        this.props.setStep(2)
    }
    grabValue = (event, index, value) => {
        this.setState({
            bodyPartValue: value
        })
    }
    render() {
        // console.log(this.state.bodyPartValue)
        return (
            <div className="bodyparts">
                <div className='bodypartstitle' >
                <h2 className='typewriter'> Where are you <br/> experiencing <br/> pain or discomfort?</h2> </div>
                <br />
                <SelectField autoWidth={true} name="bodyArea" value={this.state.bodyPartValue} onChange={this.grabValue} id="areaSelect">
                    <MenuItem value='6' primaryText='Head, Throat and Neck' />
                    <MenuItem value="15" primaryText='Chest and Back' />
                    <MenuItem value="7" primaryText='Arms & Shoulder' />
                    <MenuItem value="16" primaryText='Abdomen, Pelvis & Buttocks' />
                    <MenuItem value="10" primaryText='Legs' />
                </SelectField>
                <br/>
                <Link to={'/age'}> <RaisedButton backgroundColor= '#E53935' onClick={() => {this.props.previousStep} }> Back </RaisedButton> </Link>
                <Link to={`/sublocation/${this.state.bodyPartValue}`}>
                    <RaisedButton backgroundColor= '#E53935' onClick={() => { this.props.setBodyArea(this.state.bodyPartValue) }}> Next </RaisedButton>
                </Link>
            </div>
        );
    }
}

export default Bodyparts;
