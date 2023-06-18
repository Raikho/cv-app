import uniqid from 'uniqid';
import {useState, useEffect} from 'react';
import FieldGroup from './FieldGroup.js'


const ExpandableFieldGroup = props => {
    const {template} = props;
    const [sections, setSections] = useState(Array(10).fill(null));

    // useEffect(() => {
    //     let newSections = [...sections];
    //     newSections[1] = template;
    //     setSections(newSections);
    // }, []);

    const addSection = () => {
        let newSections = [...sections];
        newSections[1] = template;
        setSections(newSections);
    }

    return (
        <div className="expandable-field-group">
            <div className="expandable-group-name">{template.name}</div>
            {
                sections.map(section => {
                    if (!section) 
                        return null;
                    return (
                        <>
                            <FieldGroup
                                fields={section.fields}
                            />
                            <button>remove</button>
                        </>
                    );
                })
            }
            <button onClick={addSection}>add</button>
        </div>
    );
}


export default ExpandableFieldGroup;

// export default class ExpandableFieldGroup extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             sections: [],
//         }
//     }

//     addTemplate = () => {
//         let sectionTemplate = {
//             id: uniqid(),
//             jsx: null,
//         };
//         let fields = [...this.props.template.fields];
//         fields.forEach(field => field.id = uniqid())

//         sectionTemplate.jsx = (
//             <FieldGroup
//                 fields={fields}
//                 // groupName={'# ' + (this.state.sections.length + 1)}
//                 groupName=''
//                 key={sectionTemplate.id}
//             />
//         );


//         this.setState({sections: [...this.state.sections, sectionTemplate]});
//     }

//     removeTemplate = (id) => {
//         this.setState({sections: this.state.sections.filter(
//             section => (id !== section.id)
//         )});
//     }

//     render() {
//         const {sections} = this.state;
//         const {template} = this.props;

//         return (
//             <div className="expandable-field-group">
//                 <div className="expandable-group-name">{template.name}</div>
//                 {sections.map((section, index) => 
//                     <>
//                         {section.jsx}
//                         {(index === sections.length - 1) ?
//                             <button
//                                 onClick={() => this.removeTemplate(section.id)}
//                             >remove</button> 
//                             : ''
//                         }
//                     </>
//                 )}
//                 <button onClick={this.addTemplate}>Add</button>
//             </div>
//         );
//     }
// }