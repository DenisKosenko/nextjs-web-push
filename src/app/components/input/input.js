import React from 'react';

const Input = ({ placeholder, onChange, label, value, id, required }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 ">
                {label}
            </label>
            <input
                required={required}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type="text"
                id={id}
                className="block w-full rounded-md border-0 py-2 px-2.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
            />
        </div>
    );
};

export default Input;
