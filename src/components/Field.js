import { useState } from 'react'


const Field = props => {
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