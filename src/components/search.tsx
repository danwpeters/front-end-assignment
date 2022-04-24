import React, { Fragment, FunctionComponent, useState, ChangeEvent, MouseEvent } from 'react';
import TextInput from './textInput';
import truncateHtml from 'truncate-html';

export const Search: FunctionComponent = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.currentTarget.value);
  };

  const handleInputButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    const getSearchResults = async () => {
      if (query) {
        const response = await fetch(`http://localhost:4000/api/ships/${query}`)
          .then(res => res.json())
          .then((data) => {
            return data
          })
          .catch(err => console.log(err))
    
          setSearchResults(response);
      } else {
        setSearchResults([]);
      }
    }

    getSearchResults();
  }, [query]);

  return (
    <>
      <h1 className="text-lg text-gray-700 font-bold mb-1 md:ml-40 md:pl-4">
        Search Flow
      </h1>
      <form className="pt-3">
        <TextInput label="Search" type="search" placeholder="Search" value={query} onChange={handleInputChange} onBtnClick={handleInputButtonClick} />
      </form>

      <div className="text-lg text-gray-700 md:ml-40 py-10 md:pl-4">
        {searchResults.length > 0 && (
          <table className="border-collapse table-auto w-full text-sm">
            <thead className="font-bold text-left">
              <tr>
                <th className="w-1/3 p-4 pl-0">
                  Ship ID
                </th>
                <th className="w-1/3 p-4">
                  Yeah of construction
                </th>
                <th className="w-1/3 p-4">
                  Shipyard
                </th>
              </tr>
            </thead>
            <tbody>
            {searchResults?.map((item: any, index) => (
              <Fragment key={index}>
                <tr>
                  <td className="p-4 pl-0">{item.shipId}</td>
                  <td className="p-4">{item.yearOfConstruction}</td>
                  <td className="p-4">{item.shipyard}</td>
                </tr>
                <tr className="border-b border-gray-300">
                  {item.body && (
                    <td className="pb-4" colSpan={3} dangerouslySetInnerHTML={{__html: truncateHtml(item.body, 100, { byWords: true })}} />
                  )}
                </tr>
              </Fragment>
            ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  )
}

export default Search;