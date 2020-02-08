import React, { useContext, useState } from "react";
import { CryptoDataContext } from "./CryptoDataProvider";
import CryptoChart from "./CryptoChart";
import CryptoStatistics from "./CryptoStatistics";
import "./Crypto.css"

export default () => {
    const { cryptosData } = useContext(CryptoDataContext)
    const [ crypto, setCrypto ] = useState("")

    const timeSeriesKeyName = 'Time Series (Digital Currency Daily)'
    
    let allDaysArray = []
    for (let property in cryptosData[timeSeriesKeyName]) {
        if (cryptosData[timeSeriesKeyName].hasOwnProperty(property)) {
          allDaysArray.push(property)
        }
      }

      const thirtyDaysArrayKeys = allDaysArray.slice(0, 30)

      let thirtyDaysArrayObjects = []
      for (let day of thirtyDaysArrayKeys) {
        thirtyDaysArrayObjects.push(cryptosData[timeSeriesKeyName][day])
      }

      let USDthirtyDayNumberStringData = []
      for (let dayObj of thirtyDaysArrayObjects) {
          USDthirtyDayNumberStringData.push(dayObj[ '4b. close (USD)'])
      }

      let USDthirtyDayNumbersData = []
      for (let numStr of USDthirtyDayNumberStringData) {
        USDthirtyDayNumbersData.push(parseFloat(numStr).toFixed(2))
      }

      let thirtyDayVolumeStringData = []
      for (let dayObj of thirtyDaysArrayObjects) {
          thirtyDayVolumeStringData.push(dayObj['5. volume'])
      }

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