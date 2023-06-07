import {Component} from 'react';

export default class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {editMode: true};
    }

    toggleEditMode = () => {
        this.setState({editMode: (!this.state.editMode)});
    }

    render() {
        const { editMode } = this.state;
        const { name, type } = this.props;
        
        if (editMode)
            return (
                <div className="field">
                    <input 
                        type={type}
                        placeholder={"Please enter " + name + "..."}
                    />
                    <button onClick={this.toggleEditMode}>Submit</button>
                </div>
            )
        else
            return (
                <div className="field">
                    <input 
                        type={type}
                        placeholder={"... <" + {name} + "> ..."}
                    />
                    <button onClick={this.toggleEditMode}>Edit</button>
                </div>
            );
    }
}