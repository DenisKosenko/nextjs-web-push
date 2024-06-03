import React from 'react';
import Select from './select';

const ConsumerSelect = ({ subscriptions, onSelect }) => {
    return (
        <Select placeholder="Select Consumer" onSelect={onSelect}>
            {subscriptions.map((x, index) => {
                if (!x.data) return null;

                return (
                    <option key={index} value={x.data.consumerId}>
                        {x.data.consumerId}
                    </option>
                );
            })}
        </Select>
    );
};

export default ConsumerSelect;
