import {useState} from 'react'


const Field = props => {
    // const [editMode, setEditMode] = useState('edit');
    const [currentValue, setCurrentValue] = useState('starting value');

    const handleSubmit = event => {
        event.preventDefault();
        props.handleSubmit(currentValue, props.id);
    };

    const handleChange = event => {
        setCurrentValue(event.target.value);
    };

    if (props.editMode) {
        return (
            <form
                className="field"
                onSubmit={handleSubmit}
            >
                <input
                    placeholder={props.placeholder}
                    onChange={handleChange}
                    type={props.type}
                />
                <button type="submit">submit</button>
            </form>
        );
    } else {
        return (
            <div className="field">
                <div className="field-value">
                    {props.value}
                </div>
                <button onClick={props.handleEdit}>edit</button>
            </div>
        )
    }
}


export default Field;

// export class Field2 extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             editMode: true,
//             value: 'beginning value',
//         };
//     }

//     toggleEditMode = () => {
//         this.setState({editMode: (!this.state.editMode)});
//     }

//     handleChangeValue = (e) => {
//         this.setState({value: e.target.value});
//     }

//     render() {
//         const { editMode, value } = this.state;
//         const { name, type } = this.props;
        
//         if (editMode)
//             return (
//                 <div className="field">
//                     <input 
//                         type={type}
//                         placeholder={"Please enter " + name + "..."}
//                         onChange={this.handleChangeValue}
//                     />
//                     <button onClick={this.toggleEditMode}>Submit</button>
//                 </div>
//             )
//         else
//             return (
//                 <div className="field">
//                     <div className="field-value">{value}</div>
//                     <button onClick={this.toggleEditMode}>Edit</button>
//                 </div>
//             );
//     }
// }