import axios from 'axios'

import { useEffect, useState } from 'react'

function App() {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')
    
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])

  const countriesToShow = countries.filter(country => country.name.official.toLowerCase().includes(newFilter.toLowerCase()))
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      filter countries <input filter={newFilter} onChange={handleFilterChange} />
      {console.log(newFilter)}
      {countriesToShow.length > 10 &&
        <div>Too many countries, specify another filter</div>
      }
      {countriesToShow.length <= 10 && countriesToShow.length >1 &&
        <div>{countriesToShow.map(country => <div key={country.name.official}>{country.name.official}<button onClick={() => setNewFilter(country.name.official)}>show</button></div>)}</div>
      }
      {countriesToShow.length == 1 &&
        <div>
          <h2>{countriesToShow[0].name.official}</h2>
          <div>capital {countriesToShow[0].capital}</div>
          <div>area {countriesToShow[0].area}</div>
          <h3>languages:</h3>
          <ul>
            { countriesToShow[0].languages &&
              Object.keys(countriesToShow[0].languages).map(language => <li key={countriesToShow[0].name.offcial + language}>{language}</li> )
            }
          </ul>
        </div>
      }
    </div>

  );
}

export default App;
