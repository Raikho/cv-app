import { useEffect, Fragment} from 'react';
import FieldGroup from './FieldGroup.js'


const ExpandableFieldGroup = props => {
    const { title, isDynamic, sections, addSection, removeSection, handleSubmit, id } = props;

    useEffect(() => {if (!isDynamic) addSection(id)}, []);

    return (
        <div className="expandable-field-group">
            <div className="expandable-group-name">{title}</div>
            {sections.map(section => 
                <Fragment key={section.id}>
                    <FieldGroup
                        key={section.id}
                        fields={section.fields}
                        handleSubmit={handleSubmit}
                    />
                    {isDynamic ? 
                        <button
                            onClick={() => removeSection(id, section.id)}
                        >delete</button> 
                    : null}
                </Fragment>
            )}
            {isDynamic ? <button onClick={() => addSection(id)}>add</button> : null}
        </div>
    );
}


export default ExpandableFieldGroup;