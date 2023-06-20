import './App.css';
import { useState } from 'react';
import uniqid from 'uniqid'
import ExpandableFieldGroup from './components/ExpandableFieldGroup.js';

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
    let templatesCopy = copy(templates);
    let template = templatesCopy.filter(template => template.id === id)[0];

    let newFields = copy(template.fieldsTemplate).map(field => 
      Object.assign(field, {value: '', editMode: true, id: uniqid()})
    );
    template.sections.push({id: uniqid(), fields: newFields});

    setTemplates(templatesCopy);
  }

  const removeSection = (templateId, sectionId) => {
    let templatesCopy = copy(templates);
    let template = templatesCopy.filter(t => t.id === templateId)[0];

    let newSections = copy(template.sections).filter(s => s.id !== sectionId);
    template.sections = newSections;
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
            id={template.id}
            title={template.title}
            isDynamic={template.isDynamic}
            sections={template.sections}
            addSection={addSection}
            removeSection={removeSection}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}


export default App;

function copy(x) {
  return JSON.parse(JSON.stringify(x));
}
