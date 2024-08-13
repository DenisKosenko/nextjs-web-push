import React from 'react';
import Input from './input';
import {
    LOW_PERFORMANCE_SUPPORT,
    PERSONALIZED_CHARGING,
    SOFTWARE_UPDATE,
    PAUSE_MODE,
    FLEX_PUFF,
    FLEX_BATTERY,
} from '../../const/actionTypes';

const dusnRequiredActions = [
    LOW_PERFORMANCE_SUPPORT,
    PERSONALIZED_CHARGING,
    SOFTWARE_UPDATE,
    PAUSE_MODE,
    FLEX_PUFF,
    FLEX_BATTERY,
];

const DusnInput = ({ value, onChange, actionType }) => {
    return (
        <Input
            value={value}
            onChange={onChange}
            required={actionType && dusnRequiredActions.includes(actionType)}
            label="Dusn"
            placeholder="Enter dusn..."
            id="dusn"
        />
    );
};

export default DusnInput;
