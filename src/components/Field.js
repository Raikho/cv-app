import {Component} from 'react';

export default class Field extends Component {

    render() {
        const {name, type, id, editMode, handleSubmit, handleEdit} = this.props;
        
        return (
            <div className="field">
                <input
                    type={type}
                    placeholder={"Please enter " + name + "..."}
                />
                {(editMode) ?
                    <button onClick={() => {handleSubmit(id)}}>
                        Submit
                    </button> :
                    <button onClick={() => {handleEdit(id)}}>
                        edit
                    </button>
                }
            </div>
        );
    }
}