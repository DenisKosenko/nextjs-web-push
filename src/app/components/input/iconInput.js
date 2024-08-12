import React from 'react';
import Input from './input';

const IconInput = ({ value, onChange }) => {
    return <Input value={value} onChange={onChange} label="Icon URL" placeholder="Enter url..." id="text" />;
};

export default IconInput;
