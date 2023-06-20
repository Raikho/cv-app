import uniqid from 'uniqid';
import {useState, useEffect} from 'react';
import FieldGroup from './FieldGroup.js'
import Field from './Field.js';


const ExpandableFieldGroup = props => {
    const { title, isDynamic, sections, addSection, handleSubmit } = props;

    useEffect(() => {
        if (!isDynamic) {
            console.log('is not dynamic');
            addSection();
        }
    }, []);

    // if (!isDynamic) {
    //     console.log('is not dynamic')
    //     addSection();
    // }

    return (
        <div className="expandable-field-group">
            <div className="expandable-group-name">{title}</div>
            {sections.map(section => 
                <FieldGroup
                    key={section.id}
                    fields={section.fields}
                    handleSubmit={handleSubmit}
                />
            )}
             {/* {
                areShown.map((isShown, index) => {
                    if (isShown) {
                        return (<>
                            <FieldGroup 
                                fields={sections[index].fields}
                                key={sections[index].id}
                            />
                        </>);
                    }
                    return <div>empty</div>;
                })
                
                // sections.map(section => {
                //     if (!section.show) 
                //         return null;
                //     return (
                //         <>
                //             <FieldGroup
                //                 fields={section.fields}
                //                 key={section.id}
                //             />
                //             <button>remove</button>
                //         </>
                //     );
                // })
            } */}
            {isDynamic ? <button>add</button> : null}
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