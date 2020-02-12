import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button'
import { CryptoContext } from './CryptoProvider';
import { CryptoDataContext } from './CryptoDataProvider';

export default ({ setCrypto }) => {
    const { getCryptosData } = useContext(CryptoDataContext)
    const { cryptos } = useContext(CryptoContext)
    const [ chosenTicker, setTicker ] = useState("")

    //Set chosenTicker state to selected option
    const handleControlledInputChange = (event) => {
      setTicker(event.target.value)
  }

    //Dropdown for crypto options to query
    return(
      <div className="cryptoDropdown">
        <select 
        className="browser-default custom-select" 
        name="cryptoSelect"
        onClick={handleControlledInputChange}>
          <option disabled>Choose a crypto:</option>
          {
              cryptos.map(cryptoObj => {
                  return <option key={cryptoObj.id} value={cryptoObj.code}>{cryptoObj.crypto} - {cryptoObj.code}</option>
              })
          }
        </select>
          <Button 
          onClick={() => {
            //Set crypto state to selected crypto
            setCrypto(chosenTicker)
            //Query API with selected crypto
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
