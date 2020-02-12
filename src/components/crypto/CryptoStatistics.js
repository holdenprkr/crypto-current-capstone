import React from "react";
import Button from 'react-bootstrap/Button'

export default ({ USDthirtyDays, thirtyDaysVolume, crypto }) => {
    //Slices past 29 days of data from array
    const allButTodayVolumeArr = thirtyDaysVolume.slice(0,29)
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
                <div>Period Open: <span className="statData">${USDthirtyDays[USDthirtyDays.length - 1]}</span></div>
                <div>Period Close: <span className="statData">${USDthirtyDays[0]}</span></div>
                <div>Period High: <span className="statData">${Math.max(...USDthirtyDays)}</span></div>
                <div>Period Low: <span className="statData">${Math.min(...USDthirtyDays)}</span></div>
                <div>*ADV = Average Daily Volume</div>
                <div className="cryptoNewsContainer">
                    <Button type="button" className="btn btn-info cryptoNewsButton" onClick={handleClick}>Crypto News</Button>
                </div>
            </section>
        </div>
    );
}