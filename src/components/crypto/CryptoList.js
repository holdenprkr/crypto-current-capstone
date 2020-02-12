import React, { useContext, useState } from "react";
import { CryptoDataContext } from "./CryptoDataProvider";
import CryptoChart from "./CryptoChart";
import CryptoStatistics from "./CryptoStatistics";
import "./crypto.css"

export default () => {
    const { cryptosData } = useContext(CryptoDataContext)
    //State (string) used to determine what crypto has been selected
    const [ crypto, setCrypto ] = useState("")
    //State (numeric) used to determine how much data to slice
    const [ dateRange, setDateRange ] = useState(30)

    //stores desired key name in a variable
    const timeSeriesKeyName = 'Time Series (Digital Currency Daily)'
    
    //stores all key names on desired key (timeSeriesKeyName) of data in all days array (array of date strings)
    let allDaysArray = []
    for (let key in cryptosData[timeSeriesKeyName]) {
        if (cryptosData[timeSeriesKeyName].hasOwnProperty(key)) {
          allDaysArray.push(key)
        }
      }
      let formattedDaysArray = []
      for (let date of allDaysArray) {
        formattedDaysArray.push(new Date(date).toLocaleDateString('en-us'))
      }



      //slices the last "dateRange" dates from formattedDaysArray
      const formattedDaysLabels = formattedDaysArray.slice(0, dateRange)

      //slices the last "dateRange" dates from all days array
      const daysArrayKeys = allDaysArray.slice(0, dateRange)

      //pushes each object with key date from original data into array.
      let daysArrayObjects = []
      for (let day of daysArrayKeys) {
        daysArrayObjects.push(cryptosData[timeSeriesKeyName][day])
      }

      //finds closing values in USD of queried crypto for each day and pushes into array as strings
      let USDnumberStringData = []
      for (let dayObj of daysArrayObjects) {
          USDnumberStringData.push(dayObj[ '4b. close (USD)'])
      }

      //converts number strings into number values and pushes to array
      let USDnumberData = []
      for (let numStr of USDnumberStringData) {
        USDnumberData.push(parseFloat(numStr).toFixed(2))
      }

      //finds volume of queried crypto for each day and pushes into array as strings
      let dayVolumeStringData = []
      for (let dayObj of daysArrayObjects) {
          dayVolumeStringData.push(dayObj['5. volume'])
      }

      //converts number strings into number values and pushes to array
      let dayVolumeNumberData = []
      for (let volStr of dayVolumeStringData) {
          dayVolumeNumberData.push(parseFloat(volStr))
      }
      
    return (
      <>
        <div className="cryptoData">
            <CryptoStatistics setDateRange={setDateRange} USDnumberData={USDnumberData} numberDataVolume={dayVolumeNumberData} crypto={crypto} dateRange={dateRange}/>
            <CryptoChart USDnumberData={USDnumberData} label={formattedDaysLabels} crypto={crypto} setCrypto={setCrypto} dateRange={dateRange} />
        </div>
      </>
    )
}