import React, { useEffect } from 'react';
import { FLEX_PUFF, LOW_PERFORMANCE_SUPPORT, LOYALTY, PAUSE_MODE, USAGE, SOFTWARE_UPDATE } from '../const/actionTypes';

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
                body = 'Run a diagnostic test to detect and solve battery issues. Tap to start.';
                break;
            case LOYALTY:
                title = 'You’ve earned 50 points';
                body = 'Great start! Earn more rewards in IQOS CLUB. Find out more';
                break;
            case USAGE:
                title = 'Your IQOS insight report is ready!';
                body = 'Learn more about your IQOS usage habits';
                break;
            case PAUSE_MODE:
                title = 'Optimise with Pause Mode';
                body = 'Pause your experience for up to 8 minutes and resume it.';
                break;
            case FLEX_PUFF:
                title = 'Optimise with FlexPuff';
                body = 'Extend your experience by up to 4 puffs.';
                break;
            case FLEX_BATTERY:
                title = 'Recharge your IQOS';
                body = 'Your battery is underperforming. Learn how to optimize it.';
                break;
            default:
                break;
        }
        setTitle(title);
        setText(body);
    }, [actionType]);
};

export default useSetDefaultText;
