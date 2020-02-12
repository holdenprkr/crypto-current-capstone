import React from "react";
import Button from 'react-bootstrap/Button'
import CryptoTimePicker from "./CryptoTimePicker";

export default ({ USDnumberData, numberDataVolume, crypto, dateRange, setDateRange }) => {
    //Slices past X(state) days of data from array
    const allButTodayVolumeArr = numberDataVolume.slice(0, dateRange)
    //Averages all volumes
    const VolumeArrayAvg = allButTodayVolumeArr.reduce((a,b) => a + b, 0) / allButTodayVolumeArr.length
    //Fixes avaerage volume by 8 places
    const FormattedVolAvg = VolumeArrayAvg.toFixed(8)

    //Opens window in new tab
    const handleClick = () => {
        window.open('https://beincrypto.com/', '_blank')
    }
    
    //displays data accordingly to label
    return (
        <div className="cryptoStatistics">
            <h2>{crypto === "" ? "BTC" : crypto} Statistics</h2>
            <section>
                <div>Period ADV: <span className="statData">{FormattedVolAvg}</span></div>
                <div>Period Open: <span className="statData">${USDnumberData[USDnumberData.length - 1]}</span></div>
                <div>Period Close: <span className="statData">${USDnumberData[0]}</span></div>
                <div>Period High: <span className="statData">${Math.max(...USDnumberData)}</span></div>
                <div>Period Low: <span className="statData">${Math.min(...USDnumberData)}</span></div>
                <div>*ADV = Average Daily Volume</div>
                <div className="cryptoNewsContainer">
                    <Button type="button" className="btn btn-info cryptoNewsButton" onClick={handleClick}>Crypto News</Button>
                </div>
                <CryptoTimePicker setDateRange={setDateRange} />
            </section>
        </div>
    );
}