import {Component} from 'react';
import uniqid from 'uniqid'
import FieldGroup from './FieldGroup.js'

export default class ExpandableFieldGroup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [],
        }
    }

    addTemplate = () => {
        let sectionTemplate = {
            fields: [...this.props.template.fields],
            id: uniqid(),
        };
        sectionTemplate.fields.forEach(field => field.id = uniqid())
        
        this.setState({sections: [...this.state.sections, sectionTemplate]});
    }

    render() {
        const {sections} = this.state;
        const {template} = this.props;

        return (
            <div className="expandable-field-group">
                <div className="expandable-group-name">{template.name}</div>
                {sections.map((section, index) =>
                    <>
                    <FieldGroup 
                        fields={section.fields} 
                        groupName={template.name + " #" + (index+1)}
                        key={section.id}
                    />
                    <button>Remove</button>
                    </>
                )}
                <button onClick={this.addTemplate}>Add</button>
            </div>
        );
    }
}