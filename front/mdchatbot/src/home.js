import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';
import Gender from './gender';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class Home extends Component {
    state = {
        open: true,
    };
    render() {
        const actions = [
            <FlatButton
                label="Let's begin!"
                primary={true}
                onClick={this.props.handleClose}
            />,
        ];

        return (
            <div>
                <Dialog
                    title="Dr. Robot"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.handleClose}
                >
                    <h4>
                        Hi there! Welcome to Dr. Robot, your online medical assistant. If you're feeling sick, I can help you can figure out what your problem could be!
                When you're ready, please hit begin.
                </h4>
                </Dialog>
            </div>
        );
    }
}

class man extends Component {
    constructor() {
        super();
        this.state = {
            bodyPartValue: 0
        }
        this.grabValue = this.grabValue.bind(this)
    }
    grabValue(event) {
        this.setState({
            bodyPartValue: event.target.value
        })
    }
    render() {
        //var bodyPartValue = 0
        console.log(this.props.yearOfBirth)
        return (
            <div className="typewriter">
                <h4>
                    Hi there! Welcome to Dr. Robot, your online medical assistant. <br />
                    If you're feeling sick, I will ask you a series of questions to evalute what the problem could be!
                When you're ready, please hit begin.
                </h4>
                <Link to={'/gender'}> Begin
                  </Link>
            </div>
        );
    }
}

//export default Home;
