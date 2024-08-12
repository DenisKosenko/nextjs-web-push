import React from 'react';
import Select from './select';
import {
    FLEX_BATTERY,
    FLEX_PUFF,
    LOW_PERFORMANCE_SUPPORT,
    LOYALTY,
    PAUSE_MODE,
    PERSONALIZED_CHARGING,
    SOFTWARE_UPDATE,
} from '../../const/actionTypes';

const actionTypes = [
    PAUSE_MODE,
    FLEX_PUFF,
    FLEX_BATTERY,
    PERSONALIZED_CHARGING,
    SOFTWARE_UPDATE,
    LOW_PERFORMANCE_SUPPORT,
    LOYALTY,
];

const ActionSelect = (props) => {
    return (
        <Select placeholder="Select action type" label="Action Type" id="action" {...props}>
            {actionTypes.map((x) => (
                <option key={x} value={x}>
                    {x}
                </option>
            ))}
        </Select>
    );
};

export default ActionSelect;
