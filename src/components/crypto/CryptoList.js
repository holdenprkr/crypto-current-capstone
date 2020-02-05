import React, { useContext } from "react";
import { CryptoContext } from "./CryptoProvider";
import CryptoChart from "./CryptoChart";
import CryptoStatistics from "./CryptoStatistics";
import "./crypto.css"

export default () => {
    const { cryptos } = useContext(CryptoContext)
    const timeSeriesKeyName = 'Time Series (Digital Currency Daily)'
    
    let allDaysArray = []
    for (let property in cryptos[timeSeriesKeyName]) {
        if (cryptos[timeSeriesKeyName].hasOwnProperty(property)) {
          allDaysArray.push(property)
        }
      }

      const thirtyDaysArrayKeys = allDaysArray.slice(0, 30)
      let thirtyDaysArrayObjects = []
      for (let day of thirtyDaysArrayKeys) {
        thirtyDaysArrayObjects.push(cryptos[timeSeriesKeyName][day])
      }

      let thirtyDayNumberStringData = []
      for (let dayObj of thirtyDaysArrayObjects) {
          thirtyDayNumberStringData.push(dayObj[ '4b. close (USD)'])
      }

      let thirtyDayNumbersData = []
      for (let numStr of thirtyDayNumberStringData) {
        thirtyDayNumbersData.push(parseFloat(numStr))
      }

      let thirtyDayVolumeStringData = []
      for (let dayObj of thirtyDaysArrayObjects) {
          thirtyDayVolumeStringData.push(dayObj[ '6. market cap (USD)'])
      }

      let thirtyDayVolumeNumberData = []
      for (let volStr of thirtyDayVolumeStringData) {
          thirtyDayVolumeNumberData.push(parseFloat(volStr))
      }
    
    return (
        <div className="cryptoData">
            <CryptoStatistics thirtyDays={thirtyDayNumbersData} thirtyDaysVolume={thirtyDayVolumeNumberData} />
            <CryptoChart thirtyDays={thirtyDayNumbersData} />
        </div>
    )
}