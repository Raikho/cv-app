import {Component} from 'react';

export default class Field extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: true,
            value: 'beginning value',
        };
    }

    toggleEditMode = () => {
        this.setState({editMode: (!this.state.editMode)});
    }

    handleChangeValue = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        const { editMode, value } = this.state;
        const { name, type } = this.props;
        
        if (editMode)
            return (
                <div className="field">
                    <input 
                        type={type}
                        placeholder={"Please enter " + name + "..."}
                        onChange={this.handleChangeValue}
                    />
                    <button onClick={this.toggleEditMode}>Submit</button>
                </div>
            )
        else
            return (
                <div className="field">
                    <div className="field-value">{value}</div>
                    <button onClick={this.toggleEditMode}>Edit</button>
                </div>
            );
    }
}