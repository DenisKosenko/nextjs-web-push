import React from 'react';
import Select from './select';

const SubscriptionSelect = ({ subscriptions, onSelect }) => {
    return (
        <Select placeholder="Select Subscription Id" label="Subscription Id" id="subscription" onSelect={onSelect}>
            {subscriptions.map((x, index) => {
                if (!x) return null;

                return (
                    <option key={index} value={x.subscriptionId}>
                        {x.subscriptionId}
                    </option>
                );
            })}
        </Select>
    );
};

export default SubscriptionSelect;
