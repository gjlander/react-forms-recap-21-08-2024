import { useState } from 'react';

const SearchType = () => {
    const [value, setValue] = useState('');
    const [countries, setCountries] = useState();

    // this will make a request each time you type, so the list will dynamically update
    const handleChange = (e) => {
        setValue(e.target.value);
        fetch(`https://restcountries.com/v3.1/name/${value}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCountries(data);
            })
            .catch((err) => console.error(err));
    };

    return (
        <>
            {/* Because we are no longer "submitting", we don't need to wrap the input in a form. 
            We're listening to every change to the input value. This could cause performance issues as written,  
            but leads to a dynamic update of the results */}
            <h3 className='text-4xl my-4'>Search for a country as you type</h3>
            <label htmlFor='search-input'>
                Search:
                <input
                    className='input input-bordered mr-2'
                    type='search'
                    name='search-input'
                    id='search-input'
                    placeholder='Country name...'
                    value={value}
                    onChange={handleChange}
                    // We should still have the search role for accessibility
                    role='search'
                />
            </label>
            {/* We also don't need a button, because typing executes the search */}

            {/* check that countries exists, and that it is has objects in it */}
            {countries && countries.length && (
                <ol className='list-decimal'>
                    {countries.map((country) => (
                        <li key={country.name.common}>{country.name.common}</li>
                    ))}
                </ol>
            )}
        </>
    );
};

export default SearchType;
