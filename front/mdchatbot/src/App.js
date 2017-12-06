import React, { Component } from 'react';
import './App.css';
import Gender from './gender';
import Age from './age'
import axios from 'axios';
import Symptoms from './symptoms'
import { Link } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

const muiTheme = getMuiTheme({
  palette: {
    color: '#E53935',
  },
  appBar: {
    height: 100,
    color: '#E53935'
  },
  stepper: {
        iconColor: '#E53935'
    }
});

class Icon extends Component {
  render() {
    return (<Link to={'/'}> <img className='image' src='whiteIcon.png' alt='Dr.Robot'style={{ marginTop: '-26px', border: '4px solid white' }} /> </Link>
    )
  }
}



class App extends Component {
  constructor() {
    super();
    this.state = {
      symptomIDs: '',
      gender: '',
      sex: '',
      yearOfBirth: 0,
      symptoms: [],
      bodyArea: 0,
      specBodyPart: 0,
      stepIndex: 0,
      open: true,
      DiagnosisID: 0,
    }
    this.setBodyArea = this.setBodyArea.bind(this)
    this.setAge = this.setAge.bind(this)
    this.setSpecBodyPart = this.setSpecBodyPart.bind(this)
    this.changeGender = this.changeGender.bind(this)
    this.addToSymptoms = this.addToSymptoms.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.setStep = this.setStep.bind(this)
    this.setDiagnosis = this.setDiagnosis.bind(this)
  }

  setDiagnosis (num) {
    this.setState ({
      DiagnosisID: num,
    })
  }

  setBodyArea(num) {
    this.setState({
      bodyArea: num
    });
  }

  nextStep() {
    if (this.state.stepIndex < 7) {
      this.setState({
        stepIndex: this.state.stepIndex + 1
      })
    }
  }

  previousStep() {
    if (this.state.stepIndex > 0) {
      this.setState({
        stepIndex: this.state.stepIndex - 1
      })
    }
  }

  setStep(num) {
    this.setState ({
        stepIndex: num,
    })
  }

  setSpecBodyPart(num) {
    this.setState({
      specBodyPart: num,
    })
  }

  getSymptoms(event) {
    event.preventDefault(); //stops page reload
    axios.post('https://localhost:8080/symptoms', {
      text: this.state.symptoms
    })
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }

  changeGender(inputedGender, inputedSex) {
    this.setState({
      gender: inputedGender, sex: inputedSex,
    })
  }

  setAge(number) {
    this.setState({
      yearOfBirth: number
    })
  }

  addToSymptoms(array) {
    let thisString = ''
    for (let i = 0; i < array.length; i++) {
      if (array[i].present) {
        thisString += (array[i].ID + ',')
      }
    }

    this.setState({
      symptomIDs: thisString
    })
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };


  render() {
    // console.log(this.state.specBodyPart)
    console.log(this.state.symptomIDs)
    console.log(this.props.children)
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <AppBar titleStyle={{fontSize: '48px'}} className='red' title='Dr. Robot' iconElementLeft={<Icon />}
          />
          <Stepper  activeStep={this.state.stepIndex}>
            <Step  color= '#E53935'>
              <StepLabel muiTheme={muiTheme}>Gender</StepLabel>
            </Step>
            <Step>
              <StepLabel>Age</StepLabel>
            </Step>
            <Step>
              <StepLabel>Body Area</StepLabel>
            </Step>
            <Step>
              <StepLabel>Body Part</StepLabel>
            </Step>
            <Step>
              <StepLabel>Symptoms</StepLabel>
            </Step>
            <Step>
              <StepLabel>Diagnosis</StepLabel>
            </Step>
            <Step>
              <StepLabel>More Info</StepLabel>
            </Step>
          </Stepper>
          <div className='bubble'>
            <div className ='innerbubble'>
          {React.cloneElement(this.props.children, {
            setSpecBodyPart: this.setSpecBodyPart, specBodyPart: this.state.specBodyPart,
            yearOfBirth: this.state.yearOfBirth, setAge: this.setAge,
            changeGender: this.changeGender, gender: this.state.gender, sex: this.state.sex,
            setBodyArea: this.setBodyArea, bodyArea: this.state.bodyArea,
            addToSymptoms: this.addToSymptoms, symptomIDs: this.state.symptomIDs,
            nextStep: this.nextStep, previousStep: this.previousStep, stepIndex: this.state.stepIndex,
            open: this.state.open, handleClose: this.handleClose, handleOpen: this.handleOpen,
            setStep: this.setStep, setDiagnosis: this.setDiagnosis, DiagnosisID: this.state.DiagnosisID,
          })}
          <br/>
          </div> </div>
          <img className='robot' src="eveQuotes.png" alt=""/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
