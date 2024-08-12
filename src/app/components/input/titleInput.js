import React from 'react';
import Input from './input';

const TitleInput = ({ value, onChange }) => {
    return (
        <Input value={value} onChange={onChange} label="Notification Title" placeholder="Enter title..." id="title" />
    );
};

export default TitleInput;
