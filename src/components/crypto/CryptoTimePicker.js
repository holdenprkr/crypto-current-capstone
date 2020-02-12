import React from "react";
import Button from 'react-bootstrap/Button'

export default ({ setDateRange }) => {
        //Each button changes dateRange state in CryptoList
        return (
            <div>
                <Button type="button" className="btn btn-info cryptoTimeButton" onClick={() => setDateRange(365)}>Year</Button>
                <Button type="button" className="btn btn-info cryptoTimeButton" onClick={() => setDateRange(180)}>6 Months</Button>
                <Button type="button" className="btn btn-info cryptoTimeButton" onClick={() => setDateRange(90)}>3 Months</Button>
                <Button type="button" className="btn btn-info cryptoTimeButton" onClick={() => setDateRange(30)}>Month</Button>
                <Button type="button" className="btn btn-info cryptoTimeButton" onClick={() => setDateRange(7)}>Week</Button>
            </div>
        );
    }