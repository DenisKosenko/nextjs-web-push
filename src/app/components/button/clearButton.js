import React, { useState } from 'react';
import Button from './button';

const ClearButton = () => {
    const [isLoading, setIsLoading] = useState(false);
    const onClick = async () => {
        setIsLoading(true);

        await fetch('/api/subscriptionInfo', {
            method: 'DELETE',
        });

        window.location.reload();
    };
    return (
        <Button
            isLoading={isLoading}
            className={`!bg-[#ff5555] ${!isLoading ? '!hover:bg-[#f84444] focus:!ring-[#f9aaaa]' : ''}`}
            onClick={onClick}
        >
            Clear data
            <svg fill="#000000" height="16px" width="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <rect stroke="white" fill="white" height="12" width="2" x="15" y="12"></rect>
                <rect stroke="white" fill="white" height="12" width="2" x="19" y="12"></rect>
                <rect stroke="white" fill="white" height="12" width="2" x="11" y="12"></rect>
                <path
                    stroke="white"
                    fill="white"
                    d="M20,6V5a3,3,0,0,0-3-3H15a3,3,0,0,0-3,3V6H4V8H6V27a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V8h2V6ZM14,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H14ZM24,27a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V8H24Z"
                />
            </svg>
        </Button>
    );
};

export default ClearButton;
