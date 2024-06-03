import React from 'react';
import Select from './select';

const ActionSelect = ({ onSelect }) => {
    const actionTypes = [
        'pause-mode',
        'flex-puff',
        'personalized-charging',
        'software-update',
        'low-performance-support',
        'loyalty',
    ];
    return (
        <Select placeholder="Select action type" onSelect={onSelect}>
            {actionTypes.map((x) => (
                <option key={x} value={x}>
                    {x}
                </option>
            ))}
        </Select>
    );
};

export default ActionSelect;
