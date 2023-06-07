import {Component} from 'react';
import Field from './Field.js'

export default class FieldGroup extends Component {

    render() {
        const { fields, groupName } = this.props;
        
        return (
            <div className="field-group">
                <div className="group-name">
                    <div>{groupName}</div>
                </div>
                {fields.map(field =>
                    <Field 
                        name={field.name} 
                        type={field.type} 
                        key={field.id}
                    />
                )}
            </div>
        );
    }
}