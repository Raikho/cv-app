import {Component} from 'react';
import Field from './Field.js'

export default class FieldGroup extends Component {

    render() {
        const {fields} = this.props;
        
        return (
            <div className="field-group">
                {fields.map(field =>
                    <Field name={field.name} type={field.type}/>
                )}
            </div>
        );
    }
}