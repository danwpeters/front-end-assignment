import React, { FunctionComponent } from 'react';
import cn from 'classnames';
import { ReactComponent as MagnifyingGlass } from '../assets/magnifying-glass.svg'

type TextInputProps = {
  label: string,
  type: string,
  placeholder?: string,
  value: string,
  onChange: (e:any) => void,
  onBtnClick: (e:any) => void
}

export const TextInput: FunctionComponent<TextInputProps> = ({label, type, placeholder, value, onChange, onBtnClick}) => {

  return (
    <div className="flex flex-wrap gap-4 items-center py-4">
      <div className="md:flex-none md:w-40">
        <label className="block w-full text-right text-sm text-gray-500">
          {label}
        </label>
      </div>
      <div className="relative md:flex-1 w-full drop-shadow-lg">
        <input
          className={cn(
            'flex-initial appearance-none border-2 w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-2 focus:border-blue-700',
            value ? 'pr-14' : ''
          )}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange} />
            <button
              className={cn(
                "absolute top-0 right-0 w-12 h-full font-bold py-2 px-3 focus:outline-none focus:shadow-outline",
                value ? "bg-blue-800 hover:bg-blue-900" : ""
                )}
              type="button"
              onClick={onBtnClick}
            >
              <MagnifyingGlass
                className={value ? "fill-white" : " fill-gray-500"}
              />
            </button>
      </div>
    </div>
  );
}

export default TextInput;
