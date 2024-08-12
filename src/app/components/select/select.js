import React from 'react';

const Select = ({ placeholder, onSelect, children, label, id }) => {
    const onChange = (e) => {
        const value = e.target.value;

        onSelect(value);
    };

    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium leading-6 ">
                {label}
            </label>
            <div className="relative">
                <select
                    defaultValue=""
                    onChange={onChange}
                    className="cursor-pointer bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none "
                >
                    <option value="">{placeholder}</option>
                    {children}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                            fillRule="evenodd"
                            d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Select;
