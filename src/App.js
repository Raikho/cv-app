import './App.css';
import {Component} from 'react';
import FieldGroup from './components/FieldGroup.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
        { name: "Phone Number", type: "number" },
      ]
    };
  }

  render() {
    const {fields} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <FieldGroup fields={fields} />
        </header>
      </div>
    );
  }
}


// Field, FieldGroup, ExpandableFieldGroup

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
