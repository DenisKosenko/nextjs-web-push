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
            className="py-2 px-4 rounded-md outline-none appearance-none cursor-pointer hover:bg-gray-300 transition-all"
        >
            <option value="">{placeholder}</option>
            {children}
        </select>
    );
};

export default Select;
