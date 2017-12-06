import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Symptoms extends Component {
    render() {
        let allSymptoms =[]
        allSymptoms = this.props.symptoms
        console.log(typeof(allSymptoms))
        const symptomList = allSymptoms.map((onesymptom, i) => {
            return ( <li key={i} className="list-group-item">
                     <input type="checkbox"  value="on" />
                    <label>
                        {onesymptom.Name}
                    </label>
                </li>)

        })
        console.log(allSymptoms)
        return (
             <div>
              {symptomList}
            </div>
        )

    }
}

export default Symptoms;
