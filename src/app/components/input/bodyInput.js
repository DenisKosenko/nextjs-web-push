import React from 'react';
import Input from './input';

const BodyInput = ({ value, onChange }) => {
    return <Input value={value} onChange={onChange} label="Notification Body" placeholder="Enter body..." id="text" />;
};

export default BodyInput;
