import React from 'react';
import Input from './input';

const DusnInput = ({ value, onChange }) => {
    return <Input value={value} onChange={onChange} label="Dusn" placeholder="Enter dusn..." id="dusn" />;
};

export default DusnInput;
