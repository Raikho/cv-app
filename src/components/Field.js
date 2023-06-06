import {Component} from 'react';

export default class Field extends Component {

    render() {
        const {name, type} = this.props;
        
        return (
            <div className="field">
                <input
                    type={type}
                    placeholder={"Please enter " + name + "..."}
                />
                <button>Submit</button>
            </div>
        );
    }
}