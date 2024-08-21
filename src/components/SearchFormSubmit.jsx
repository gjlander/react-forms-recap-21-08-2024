import { useState } from 'react';

const SearchFormSubmit = () => {
    const [value, setValue] = useState('');
    const [countries, setCountries] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://restcountries.com/v3.1/name/${value}`)
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
            })
            .catch((err) => console.error(err));
    };
    return (
        <>
            <form onSubmit={handleSubmit} id='search-form' role='search'>
                <h3 className='text-4xl my-4'>
                    Search for a country on submit
                </h3>
                <label htmlFor='search-input'>
                    Search:
                    <input
                        className='input input-bordered mr-2'
                        type='search'
                        name='search-input'
                        id='search-input'
                        placeholder='Country name...'
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>

                <button type='submit' className='btn'>
                    Search
                </button>
            </form>

            <ol className='list-decimal'>
                {countries.length > 0 &&
                    countries.map((country) => (
                        <li key={country.name.common}>{country.name.common}</li>
                    ))}
            </ol>
        </>
    );
};

export default SearchFormSubmit;
