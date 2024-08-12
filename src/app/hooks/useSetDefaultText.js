import React, { useEffect } from 'react';
import { LOW_PERFORMANCE_SUPPORT, LOYALTY, PERSONALIZED_CHARGING, SOFTWARE_UPDATE } from '../const/actionTypes';

const useSetDefaultText = (actionType, setTitle, setText) => {
    useEffect(() => {
        let title = '';
        let body = '';
        actionType;

        switch (actionType) {
            case SOFTWARE_UPDATE:
                title = 'New update available';
                body = 'To unlock the full flavour of SMARTCORE sticks, update device firmware';
                break;
            case LOW_PERFORMANCE_SUPPORT:
                title = 'Low Battery Performance';
                body = 'Run diagnostic to detect and solve issues';
                break;
            case LOYALTY:
                title = 'You’ve earned 50 points';
                body = 'Great start! Earn more rewards in IQOS CLUB. Find out more';
                break;
            case PERSONALIZED_CHARGING:
                title = 'Your IQOS insight report is ready!';
                body = 'Learn more about your IQOS usage habits';
                break;
            default:
                break;
        }
        setTitle(title);
        setText(body);
    }, [actionType]);
};

export default useSetDefaultText;
