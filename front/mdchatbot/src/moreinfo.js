import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import axios from 'axios';

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = {
      DisInfo: []
    }
    this.props.setStep(6)
    axios.get(`http://localhost:8080/moreInfo/${this.props.sex}/${this.props.yearOfBirth}/${this.props.DiagnosisID}`, {
    })
      .then(res => {
        console.log('postrequest was made and received')
        console.log(res.data)
        this.setState({
          DisInfo: res.data
        })
        //console.log(this.state.subArea)
      })
      .catch(function (error) {
        console.log('Error! in info' + error)
      })
  };
  render() {
    let theDisease = []
      theDisease.push(
          <div>
        <div>
          <h2>  {this.state.DisInfo.Name}</h2>
        <h3>Description</h3>
        <p>{this.state.DisInfo.Description}</p>
        </div>
        <div>
        <h3>Recommended Treatment</h3>
        <p>{this.state.DisInfo.TreatmentDescription}</p>
        </div>
        </div>
      )
    return (
      <div className="diseaseinfo">
        {theDisease}
      </div>
    );
  }
}
export default Info;
