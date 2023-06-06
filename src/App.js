import './App.css';
import {Component} from 'react';

export default class App extends Component {
  constuctor() {
    this.state = {
      fields: [
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
        { name: "Phone Number", type: "number" },
      ]
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
      </div>
    );
  }
}


// let fields = [
//   { name: "Name", type:"text" },
//   { name: "Email", type:"email" },
//   { name: "Phone Number", type:"number" },
// ]

// let fieldGroups = [
//   { name: "Educational Experience",
//     sections: [],
//     fields: [
//       { name: "School Name", type:"text" },
//       { name: "Title of Study", type:"text" },
//       { name: "Start Date", type:"date" },
//       { name: "End Date", type:"date" },
//     ] 
//   },
//   { name: "Work Experience",
//     sections: [],
//     fields: [
//       { name: "Company Name", type:"text" },
//       { name: "Position Title", type:"text" },
//       { name: "Main Tasks", type:"text" },
//       { name: "Start Date", type:"date" },
//       { name: "End Date", type:"date" },
//     ] 
//   },
// ]
