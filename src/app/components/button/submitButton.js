import React from 'react';
import Button from './button';

const SubmitButton = (props) => {
    return (
        <Button {...props}>
            Send push notification
            <svg fill="#000000" height="16px" width="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    stroke="white"
                    fill="white"
                    d="M28.11,13.32,2.13,2.1,7.44,14.85a3.05,3.05,0,0,1,0,2.3L2.13,29.88l26-11a3,3,0,0,0,0-5.51ZM27.31,17,5.87,26.12l3.41-8.2A4.42,4.42,0,0,0,9.56,17H20V15H9.56a4.42,4.42,0,0,0-.28-.92L5.87,5.9l21.45,9.25a1,1,0,0,1,.6.92A1,1,0,0,1,27.31,17Z"
                />
            </svg>
        </Button>
    );
};

export default SubmitButton;
