import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import { CryptoNameContext } from './CryptoNameProvider';
import { CryptoDataContext } from './CryptoDataProvider';

export default ({ crypto, setCrypto }) => {
    const { getCryptosData } = useContext(CryptoDataContext)
    const { cryptoNames } = useContext(CryptoNameContext)
    const [ chosenTicker, setTicker ] = useState("")

    const handleControlledInputChange = (event) => {
      setTicker(event.target.value)
  }

//   useEffect(() => {
//     getCryptosData(crypto.cryptoSelect)
// }, [crypto])

    return(
      <div className="cryptoDropdown">
        <select 
        className="browser-default custom-select" 
        name="cryptoSelect"
        onClick={handleControlledInputChange}>
          <option disabled>Choose a crypto:</option>
          {
              cryptoNames.map(cryptoObj => {
                  return <option key={cryptoObj.id} value={cryptoObj.code}>{cryptoObj.crypto} - {cryptoObj.code}</option>
              })
          }
        </select>
          <Button 
          onClick={() => {
            setCrypto(chosenTicker)
            getCryptosData(chosenTicker)
          }}
          name="cryptoSelect"
          type="button" 
          className="btn btn-info cryptoNewsButton">
            Search
          </Button>
      </div>
    );
  }
