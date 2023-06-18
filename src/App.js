import './App.css';
import {Component} from 'react';
import uniqid from 'uniqid'
import FieldGroup from './components/FieldGroup.js';
import ExpandableFieldGroup from './components/ExpandableFieldGroup.js';

import Field from './components/Field.js';


const App = props => {

  let fields = [
    {placeholder: 'first', type: 'text', id: uniqid()},
    {placeholder: 'second', type: 'text', id: uniqid()},
    {placeholder: 'third', type: 'text', id: uniqid()}
  ]

  return (
    <div className="App">
      <div className="App-header">
        <Field 
          placeholder={'enter value'}
        />
        <FieldGroup 
          fields={fields}
        />
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