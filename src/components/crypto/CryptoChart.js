import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';
import CryptoDropdown from "./CryptoDropdown";
import { CryptoContext } from "./CryptoProvider";

export default ({ USDthirtyDays, crypto, setCrypto }) => {
    const { cryptos } = useContext(CryptoContext)

    const foundCryptoObj = cryptos.find(cryptoObj => cryptoObj.code === crypto)

    const data = {
        labels: ['-29 Days', '-28 Days', '-27 Days', '-26 Days', '-25 Days', '-24 Days', '-23 Days', '-22 Days', '-21 Days', '-20 Days', '-19 Days', '-18 Days', '-17 Days', '-16 Days', '-15 Days', '-14 Days', '-13 Days', '-12 Days', '-11 Days', '-10 Days', '-9 Days', '-8 Days', '-7 Days', '-6 Days', '-5 Days', '-4 Days', '-3 Days', '-2 Days', '-1 Day', 'Today'],
        datasets: [
          {
            label: 'Crypto Price For The Last 30 Days',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: USDthirtyDays.reverse()
          }
        ]
      };
    return (
      <div className="cryptoChart">
        <div className="currencySelect">
          <span className="dropdownSection"><CryptoDropdown setCrypto={setCrypto} /></span>
        </div>
        <h2>{foundCryptoObj === undefined ? "Bitcoin" : foundCryptoObj.crypto}</h2>
        <Line data={data} />
      </div>
    );
};