import {Component} from 'react';
import FieldGroup from './FieldGroup.js'

export default class ExpandableFieldGroup extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    render() {
        return (
            <div>EXPANDABLE FIELD GROUP</div>
        );
    }
}