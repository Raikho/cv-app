import {useState} from 'react'


const Field = props => {
    const [editMode, setEditMode] = useState('edit');
    const [value, setValue] = useState('starting value');

    const toggleMode = () => {setEditMode(!editMode)};
    const handleChangeValue = (e) => {setValue(e.target.value);}

    if (props.editMode) {
        return (
            <form
                onSubmit={props.onSubmit}
                className="field"
            >
                <input
                    placeholder={props.placeholder}
                />
                <button
                    // onClick={() => console.log('clicked')}
                    type="submit"
                >submit</button>
            </form>
        );
    }

    if (!props.editMode) {
        return (
            <div className="field">
                <div className="field-value">
                    {'value: ' + props.value}
                </div>
            </div>
        )
    }

    // return (
    //     <div className="field">
    //         {editMode ?
    //             <input 
    //                 placeholder={props.placeholder}
    //                 onChange={handleChangeValue}
    //             /> :
    //             <div className="field-value">
    //                 {value}
    //             </div>
    //         }
    //         <button
    //             onClick={toggleMode}
    //         >{editMode ? 'submit' : 'edit'}</button>
    //     </div>
    // );
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