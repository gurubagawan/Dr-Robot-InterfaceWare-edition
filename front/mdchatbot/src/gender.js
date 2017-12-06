import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Home from './home';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    color: 'D50000',
  },
  appBar: {
    height: 100,
    color: '#D50000'
  },
    RaisedButton: {
    color: '#D50000'
  },
});

class Gender extends Component {
  constructor (props) {
    super (props)
    this.props.setStep(0)
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="gender">
        <Home open={this.props.open} handleClose ={this.props.handleClose} handleOpen={this.props.handleOpen}/>
        <div >
          <h3 className ='genderHead'> Please select your gender </h3>
        </div>
        <button className='btn' onClick={() => { this.props.changeGender('man', 'male') }}> <img src="./male.png" alt=""/> </button>
        <button className='btn' onClick={() => { this.props.changeGender('woman', 'female') }}><img src="./female.png" alt=""/></button>
       <br/>  <Link to={'/age'}> <RaisedButton  backgroundColor= '#D50000'
       muiTheme={muiTheme}
        > Next </RaisedButton> </Link>

      </div>
       </MuiThemeProvider>
    );
  }
}

export default Gender;
