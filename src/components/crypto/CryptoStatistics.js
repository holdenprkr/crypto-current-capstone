import React from "react";

export default ({ thirtyDays, thirtyDaysVolume}) => {
    const allButTodayVolumeArr = thirtyDaysVolume.slice(0,29)
    const VolumeArrayAvg = allButTodayVolumeArr.reduce((a,b) => a + b, 0) / allButTodayVolumeArr.length
    const FormattedVolAvg = VolumeArrayAvg.toFixed(2)
    return (
        <div className="cryptoStatistics">
            <h2>Chinese Yuan BTC Statistics</h2>
            <section>
                <div>Period Open: <span className="statData">${thirtyDays[0]}</span></div>
                <div>Period Close: <span className="statData">${thirtyDays[thirtyDays.length - 1]}</span></div>
                <div>Period High: <span className="statData">${Math.max(...thirtyDays)}</span></div>
                <div>Period Low: <span className="statData">${Math.min(...thirtyDays)}</span></div>
                <div>DVA in USD: <span className="statData">${FormattedVolAvg}</span></div>
                <br/>
                <div>*DVA = Daily Volume Average</div>
                {/* <div>Volume Average in CNY:</div> */}
            </section>
        </div>
    );
}