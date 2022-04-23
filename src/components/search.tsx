import React, { FunctionComponent } from 'react';
import TextInput from './textInput';

type SearchProps = {}

export const Search: FunctionComponent<SearchProps> = () => {
  return (
    <>
      <h1 className="text-lg text-gray-700 font-bold mb-1 ml-40 pl-4">
        Search Flow
      </h1>
      <form className="pt-3">
        <TextInput label="Search" type="search" placeholder="Search" />
      </form>
    </>
  )
}

export default Search;