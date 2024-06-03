import React from 'react';

const Select = ({ placeholder, onSelect, children }) => {
    const onChange = (e) => {
        const value = e.target.value;

        onSelect(value);
    };

    return (
        <select
            defaultValue=""
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
            <option value="">{placeholder}</option>
            {children}
        </select>
    );
};

export default Select;
