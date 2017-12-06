import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import LinearProgress from 'material-ui/LinearProgress';

class Diagnosis extends Component {
  constructor(props) {
    super(props)
    this.state = {
      diag: []
    }
    this.props.setStep(5)
    // console.log(this.props.symptomIDs)
    // console.log(this.props.sex)
    // console.log(this.props.yearOfBirth)
    axios.get(`http://localhost:8080/diagnosis/${this.props.sex}/${this.props.yearOfBirth}/${this.props.symptomIDs}`, {
    })
      .then(res => {
        console.log('postrequest was made and received')
        console.log(res.data)
        this.setState({
          diag: res.data
        })
        //console.log(this.state.subArea)
      })
      .catch(function (error) {
        console.log('Error! in diagnosis' + error)
      })
  };
  render() {
    let theDiagnosis = []
    for (let i = 0; i < this.state.diag.length; i++) {
      theDiagnosis.push(
        <div>
          <h2>  {this.state.diag[i].Issue.Name}</h2>
          <div className="meter">
            <LinearProgress style={{
              height: '10px', width: '75%',
              borderRadius: '10px', margin: 'auto',
              marginBottom: '10px'
            }}
              color='#E53935' mode="determinate" value={this.state.diag[i].Issue.Accuracy} />
          </div>
          <Link to={`/moreInfo/${this.state.diag[i].Issue.ID}`}>
            <RaisedButton style={{ marginBottom: '20px' }} backgroundColor='#E53935' onClick={() => { this.props.setDiagnosis(this.state.diag[i].Issue.ID) }} > More Info </RaisedButton>
          </Link>
          <br />
        </div>
      )
    };
    let toDisplay = (this.state.diag.length > 0 ?
      <div>
        <h2> These issues have been associated with your symptoms. </h2>
        <p> If you would like any more info on any of these, please click more info </p>
        {theDiagnosis} </div>
      :
      <div> <h2> There doesn't seem to be any diseases associated with your symptoms :( </h2> <br /> Please talk to a doctor for more help! </div>
    )
    return (
      <div className="gender">
        {toDisplay}
      </div>
    );
  }
}
export default Diagnosis;
