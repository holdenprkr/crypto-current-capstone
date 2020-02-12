import React, { useContext, useState } from "react";
import { CryptoDataContext } from "./CryptoDataProvider";
import CryptoChart from "./CryptoChart";
import CryptoStatistics from "./CryptoStatistics";
import "./Crypto.css"

export default () => {
    const { cryptosData } = useContext(CryptoDataContext)
    const [ crypto, setCrypto ] = useState("")

    //stores desired key name in a variable
    const timeSeriesKeyName = 'Time Series (Digital Currency Daily)'
    
    //stores all key names on desired key (timeSeriesKeyName)  of data in all days array (array of date strings)
    let allDaysArray = []
    for (let property in cryptosData[timeSeriesKeyName]) {
        if (cryptosData[timeSeriesKeyName].hasOwnProperty(property)) {
          allDaysArray.push(property)
        }
      }

      //slices the last 30 dates from all days array
      const thirtyDaysArrayKeys = allDaysArray.slice(0, 30)

      //pushes each object with key date from original data into array.
      let thirtyDaysArrayObjects = []
      for (let day of thirtyDaysArrayKeys) {
        thirtyDaysArrayObjects.push(cryptosData[timeSeriesKeyName][day])
      }

      //finds closing values in USD of queried crypto for each day and pushes into array as strings
      let USDthirtyDayNumberStringData = []
      for (let dayObj of thirtyDaysArrayObjects) {
          USDthirtyDayNumberStringData.push(dayObj[ '4b. close (USD)'])
      }

      //converts number strings into number values and pushes to array
      let USDthirtyDayNumbersData = []
      for (let numStr of USDthirtyDayNumberStringData) {
        USDthirtyDayNumbersData.push(parseFloat(numStr).toFixed(2))
      }

      //finds volume of queried crypto for each day and pushes into array as strings
      let thirtyDayVolumeStringData = []
      for (let dayObj of thirtyDaysArrayObjects) {
          thirtyDayVolumeStringData.push(dayObj['5. volume'])
      }

      //converts number strings into number values and pushes to array
      let thirtyDayVolumeNumberData = []
      for (let volStr of thirtyDayVolumeStringData) {
          thirtyDayVolumeNumberData.push(parseFloat(volStr))
      }
      
    return (
      <>
        <div className="cryptoData">
            <CryptoStatistics USDthirtyDays={USDthirtyDayNumbersData} thirtyDaysVolume={thirtyDayVolumeNumberData} crypto={crypto} />
            <CryptoChart USDthirtyDays={USDthirtyDayNumbersData} crypto={crypto} setCrypto={setCrypto} />
        </div>
      </>
    )
}