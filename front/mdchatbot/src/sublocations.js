import React, { Component } from 'react';
import './App.css';
import Gender from './gender';
import Age from './age'
import axios from 'axios';
import Symptoms from './symptoms';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';

class Sublocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subArea: [],
      specPart: 0,
    }
    this.grabValue = this.grabValue.bind(this)
    this.props.setStep(3)
    //console.log(this.props.bodyArea)
    axios.get(`http://localhost:8080/bodyarea/${this.props.bodyArea}`, {
    })
      .then(res => {
        console.log('postrequest was made and received')
        this.setState({
          subArea: res.data
        })
        //console.log(this.state.subArea)
      })
  }
  grabValue = (event, index, value) => {
    this.setState({
      specPart: value
    })
  }
  render() {
    // console.log(this.props.bodyArea)
    // console.log(this.state.specPart)
    var subAreaArray = []

    subAreaArray = this.state.subArea.map((specpart, j) => {
      //  console.log(specpart.Name)
      return (
        <MenuItem key={j} primaryText={specpart.Name} value={specpart.ID} />
      )
    })
    let loadingPartsJSX = (this.state.subArea.length > 0 ?
      <div> <h2 className='typewriter'>  Okay which part <br /> specifically? </h2>
        <SelectField name="subArea" onChange={this.grabValue} id="areaSelect" value={this.state.specPart}>
          {subAreaArray}
        </SelectField> <br />
      </div>
      : <div> <CircularProgress size={80} thickness={5} /></div>)
    // console.log(subAreaArray)
    return (
      <div>
        {loadingPartsJSX}
        <Link to={'/bodyparts'}> <RaisedButton backgroundColor='#E53935' onClick={() => { this.props.previousStep }}> Back </RaisedButton> </Link>
        <Link to={`/bodypartsymptoms/${this.state.specPart}`}> <RaisedButton backgroundColor='#E53935' onClick={() => { this.props.setSpecBodyPart(this.state.specPart) }}> Next </RaisedButton> </Link>
      </div>
    )
  }
}

export default Sublocation;
