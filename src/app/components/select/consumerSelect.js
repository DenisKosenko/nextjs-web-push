import React from 'react';
import Select from './select';

const ConsumerSelect = ({ subscriptions, onSelect }) => {
    return (
        <Select placeholder="Select Consumer Id" onSelect={onSelect}>
            {subscriptions.map((x, index) => {
                if (!x) return null;

                return (
                    <option key={index} value={x.consumerId}>
                        {x.consumerId}
                    </option>
                );
            })}
        </Select>
    );
};

export default ConsumerSelect;
