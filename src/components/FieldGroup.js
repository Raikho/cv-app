import Field from './Field.js'


const FieldGroup = props => {
    const { fields, handleSubmit } = props;

    return (
        <div className="field-group">
            {fields.map(field => 
                <Field 
                    key={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                    type={field.type}
                    value={field.value}
                    editMode={field.editMode}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
}


export default FieldGroup;

// export default class FieldGroup extends Component {

//     render() {
//         const { fields, groupName } = this.props;
        
//         return (
//             <div className="field-group">
//                 <div className="group-name">
//                     <div>{groupName}</div>
//                 </div>
//                 {fields.map(field =>
//                     <Field 
//                         name={field.name} 
//                         type={field.type} 
//                         key={field.id}
//                     />
//                 )}
//             </div>
//         );
//     }
// }