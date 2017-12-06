import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  block: {
    maxWidth: 250,
    margin: 'auto',
  },
  checkbox: {
    marginBottom: 4,
    color: '#E53935',
  },
};

class PartSymptoms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            symptomsArray: [],
            specPart: 0,
            partIDs: ''
        }
        this.props.setStep(4)
        this.updatePrescence = this.updatePrescence.bind(this)
        //console.log(this.props.specBodyPart)
        //console.log(this.props.gender)
        axios.get(`http://localhost:8080/bodypart/${this.props.specBodyPart}/${this.props.gender}`, {
        })
            .then(res => {
                console.log('postrequest was made and received')
                //console.log(res.data)
                let sympData= res.data
                this.setState({
                    symptomsArray: sympData.map((thissymp, i) => {
                        return({ID: thissymp.ID, Name: thissymp.Name, key: i, present: false })
                    })
                })
                //console.log(this.state.subArea)
            })
    };
    updatePrescence(num) {
        this.setState({
            symptomsArray: this.state.symptomsArray.map((single, k) => {
                return (num ===k ? {ID: single.ID, Name: single.Name, key: k, present: !single.done} : single)
            })
        })
    }
    render() {
        var listSymptomsArray = []
        listSymptomsArray = this.state.symptomsArray.map((specsymp, j) => {
            return (
                    <Checkbox style={styles.checkbox}
                     iconStyle={{fill: 'black'}}
                    id={specsymp.ID} label={specsymp.Name} value={specsymp.ID} defaultChecked={false} onClick={() => { this.updatePrescence(j) }} />
            )
        })
        let arrayToDisplay = (listSymptomsArray.length > 0?
                       <div style={styles.block}>
                        {listSymptomsArray}
                        </div>
:  <div> <CircularProgress size={80} thickness={5} /></div>
);
        return (
            <div className="symptoms">
                <h2 className='typewriter'> Please check off which <br/> of following symptoms <br/> you are experiencing: </h2> <br/>
                {arrayToDisplay}
                 <Link to={'/bodyparts'}> <RaisedButton backgroundColor= '#E53935' onClick={() => {this.props.previousStep} }> Back </RaisedButton> </Link>
                 <Link to={'/diagnosis'}>
                 <RaisedButton backgroundColor= '#E53935' onClick={() => { this.props.addToSymptoms(this.state.symptomsArray)}}> Next </RaisedButton>
 </Link>
            </div>
        );
    }
}

export default PartSymptoms;
