import React from 'react';
import Loader from '../loader';

const Button = ({ isLoading, children, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            type="submit"
            className={`${className} ${
                !isLoading ? 'hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300' : ''
            } transition-all flex items-center justify-center gap-3 text-white bg-blue-700 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center`}
        >
            {isLoading && <Loader />}
            {children}
        </button>
    );
};

export default Button;
