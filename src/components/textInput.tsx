import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import cn from 'classnames';
import { ReactComponent as MagnifyingGlass } from '../assets/magnifying-glass.svg'

type TextInputProps = {
  label: string,
  type: string,
  placeholder?: string
}

export const TextInput: FunctionComponent<TextInputProps> = ({label, type, placeholder}) => {
  const [inputValue, setInputValue] = useState('')
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  return (
    <div className="flex gap-4 items-center py-4">
      <div className="flex-none w-40">
        <label className="block w-full text-right text-sm text-gray-500">
          {label}
        </label>
      </div>
      <div className="relative w-full drop-shadow-lg">
        <input
          className={cn(
            'flex-initial appearance-none border-2 w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-2 focus:border-blue-700',
            inputValue ? 'pr-14' : ''
          )}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange} />
            <button
              className={cn(
                "absolute top-0 right-0 w-12 h-full font-bold py-2 px-3 focus:outline-none focus:shadow-outline",
                inputValue ? "bg-blue-800 hover:bg-blue-900" : ""
              )}
            >
              <MagnifyingGlass
                className={inputValue ? "fill-white" : " fill-gray-500"}
              />
            </button>
      </div>
    </div>
  );
}

export default TextInput;
