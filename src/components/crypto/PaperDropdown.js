import React, { Component, useContext } from 'react';
import { CurrencyNameContext } from './CurrenyNameProvider';

export default (props) => {
    const { currencyNames } = useContext(CurrencyNameContext)

    return(
      <div className="currencyDropdown">
        {/* <span>Currency:</span> */}
        <select className="browser-default custom-select">
          <option>Choose a currency!</option>
          {
              currencyNames.map(currencyObj => {
                  return <option key={currencyObj.id}value={currencyObj.code}>{currencyObj.currency} - {currencyObj.code}</option>
              })
          }
        </select>
      </div>
    );
  }