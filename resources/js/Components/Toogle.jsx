import React from 'react'

export default function Toogle({children, ...props }) {
    return (
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    {...props}
                    type="checkbox"
                    className="sr-only peer" />
                <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-500"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-600">{children}</span>
            </label>
    )
}
