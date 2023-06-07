import './App.css';
import {Component} from 'react';
import uniqid from 'uniqid'
import FieldGroup from './components/FieldGroup.js';
import ExpandableFieldGroup from './components/ExpandableFieldGroup.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [
        { name: "Name", type: "text", id: uniqid() },
        { name: "Email", type: "email", id: uniqid() },
        { name: "Phone Number", type: "number", id: uniqid() },
      ],
      templates: [
        {
          name: "Educational Experience",
          fields: [
            { name: "School Name", type:"text" },
            { name: "Title of Study", type:"text" },
            { name: "Start Date", type:"date" },
            { name: "End Date", type:"date" },
          ],
        },
        {
          name: "Work Experience",
          fields: [
            { name: "Company Name", type:"text" },
            { name: "Position Title", type:"text" },
            { name: "Main Tasks", type:"text" },
            { name: "Start Date", type:"date" },
            { name: "End Date", type:"date" },
          ],
        },
      ],
    };
  }

  render() {
    const {fields, templates} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <FieldGroup 
            fields={fields} 
            groupName="General"
          />
          {templates.map(template => 
            <ExpandableFieldGroup template={template}/>
          )}
        </header>
      </div>
    );
  }
}