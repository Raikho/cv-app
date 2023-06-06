import './App.css';
import {Component} from 'react';
import uniqid from 'uniqid'
import FieldGroup from './components/FieldGroup.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        { name: "Name", type: "text", id: uniqid(), value: '', editMode: true},
        { name: "Email", type: "email", id: uniqid(), value: '', editMode: true},
        { name: "Phone Number", type: "number", id: uniqid(), value: '', editMode: false },
      ]
    };
  }

  handleSubmit = (id) => {
    this.setState({
      fields: this.state.fields.map(field => {
        if (field.id === id) {
          field.editMode = false;
        }
        return field;
      })
    })
  }
  handleEdit = (id) => {
    this.setState({
      fields: this.state.fields.map(field => {
        if (field.id === id) {
          field.editMode = true;
        }
        return field;
      })
    })
  }

  render() {
    const {fields} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <FieldGroup 
            fields={fields} 
            groupName="General"
            handleSubmit={this.handleSubmit}
            handleEdit={this.handleEdit}
          />
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
