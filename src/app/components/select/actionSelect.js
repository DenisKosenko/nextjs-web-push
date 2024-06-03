import React from 'react';
import Select from './select';

const actionTypes = [
    'pause-mode',
    'flex-puff',
    'personalized-charging',
    'software-update',
    'low-performance-support',
    'loyalty',
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
