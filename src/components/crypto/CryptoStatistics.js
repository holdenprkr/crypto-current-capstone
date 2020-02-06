import React from "react";
import Button from 'react-bootstrap/Button'

export default ({ USDthirtyDays, thirtyDaysVolume, crypto }) => {
    const allButTodayVolumeArr = thirtyDaysVolume.slice(0,29)
    const VolumeArrayAvg = allButTodayVolumeArr.reduce((a,b) => a + b, 0) / allButTodayVolumeArr.length
    const FormattedVolAvg = VolumeArrayAvg.toFixed(8)

    const handleClick = () => {
        window.location.href = 'https://beincrypto.com/'
    }
    
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
                {/* <div>Volume Average in CNY:</div> */}
            </section>
        </div>
    );
}