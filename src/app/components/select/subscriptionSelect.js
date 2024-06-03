import React from 'react';
import Select from './select';

const SubscriptionSelect = ({ subscriptions, onSelect }) => {
    return (
        <Select placeholder="Select Subscription" onSelect={onSelect}>
            {subscriptions.map((x, index) => {
                if (!x.data) return null;

                return (
                    <option key={index} value={x.data.subscriptionId}>
                        {x.data.consumerId}
                    </option>
                );
            })}
        </Select>
    );
};

export default SubscriptionSelect;
