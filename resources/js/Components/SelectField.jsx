import React from 'react';

const SelectField = ({className='', defaultOptionTitle='', options, ...rest }) => {
    return (
        <select
            {...rest}
            className={'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm '
            + className }
        >
            {
                defaultOptionTitle.length > 0 &&
                <option
                    key='default'
                    value={''}
                >
                    {defaultOptionTitle}
                </option>
            }
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default SelectField;
