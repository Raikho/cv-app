import './App.css';
import {Component, useState, useEffect} from 'react';
import uniqid from 'uniqid'
import FieldGroup from './components/FieldGroup.js';
import ExpandableFieldGroup from './components/ExpandableFieldGroup.js';

import Field from './components/Field.js';


const App = props => {

  let [templates, setTemplates] = useState([
    {
      title: 'General Information',
      id: uniqid(),
      isDynamic: false,
      fieldsTemplate: [
        {placeholder: 'Enter name', type: 'text'},
        {placeholder: 'Enter email', type: 'email'},
        {placeholder: 'Enter phone number', type: 'number'},
      ],
      sections: [],
    },
    {
      title: 'Educational Experience',
      id: uniqid(),
      isDynamic: true,
      fieldsTemplate: [
        {placeholder: 'Enter school name', type: 'text'},
        {placeholder: 'Enter title of study', type: 'text'},
        {placeholder: 'Enter start date', type: 'text'},
        {placeholder: 'Enter end date', type: 'text'},
      ],
      sections: [],
    },
    {
      title: 'Work Experience',
      id: uniqid(),
      isDynamic: true,
      fieldsTemplate: [
        {placeholder: 'Enter company name', type: 'text'},
        {placeholder: 'Enter position title', type: 'text'},
        {placeholder: 'Enter main tasks', type: 'text'},
        {placeholder: 'Enter start date', type: 'text'},
        {placeholder: 'Enter end date', type: 'text'},
      ],
      sections: [],
    },
  ]);

  const addSection = id => {
    let templatesCopy = [...templates];
    
    let template = templatesCopy.filter(template => template.id === id)[0];
    let sections = template.sections;
    let fields = [...template.fieldsTemplate];
    fields.forEach(field => {
      field.value = '';
      field.editMode = true;
      field.id = uniqid();
    })
    sections.push({id: uniqid(), fields: fields});

    setTemplates(templatesCopy);
  }

  const handleSubmit = (value, id) => {
    let templatesCopy = [...templates];

    for (let template of templatesCopy)
      for (let section of template.sections)
        for (let field of section.fields)
          if (field.id === id) {
            field.value = value;
            field.editMode = false;
            setTemplates(templatesCopy);
            return;
          }
  }

  return (
    <div className="App">
      <div className="App-header">
        {templates.map(template =>
          <ExpandableFieldGroup
            key={template.id}
            title={template.title}
            isDynamic={template.isDynamic}
            sections={template.sections}
            addSection={() => {addSection(template.id)}}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}


export default App;




// export class App2 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       fields: [
//         { name: "Name", type: "text", id: uniqid(), editMode: true, value: '' },
//         { name: "Email", type: "email", id: uniqid(), editMode: true, value: '' },
//         { name: "Phone Number", type: "number", id: uniqid(), editMode: true, value: '' },
//       ],
//       templates: [
//         {
//           name: "Educational Experience",
//           fields: [
//             { name: "School Name", type:"text" },
//             { name: "Title of Study", type:"text" },
//             { name: "Start Date", type:"date" },
//             { name: "End Date", type:"date" },
//           ],
//         },
//         {
//           name: "Work Experience",
//           fields: [
//             { name: "Company Name", type:"text" },
//             { name: "Position Title", type:"text" },
//             { name: "Main Tasks", type:"text" },
//             { name: "Start Date", type:"date" },
//             { name: "End Date", type:"date" },
//           ],
//         },
//       ],
//     };
//   }

//   handleChangevalue = () => {
    
//   }

//   handleChangeMode = () => {

//   }

//   render() {
//     const {fields, templates} = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//           <FieldGroup 
//             fields={fields} 
//             groupName="General Information"
//           />
//           {templates.map(template => 
//             <ExpandableFieldGroup 
//               template={template}
//               key={uniqid()}
//             />
//           )}
//         </header>
//       </div>
//     );
//   }
// }