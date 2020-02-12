import React, { useContext } from "react";
import {Line} from 'react-chartjs-2';
import CryptoDropdown from "./CryptoDropdown";
import { CryptoContext } from "./CryptoProvider";

export default ({ USDnumberData, crypto, setCrypto, label, dateRange }) => {
    const { cryptos } = useContext(CryptoContext)

    const foundCryptoObj = cryptos.find(cryptoObj => cryptoObj.code === crypto)

    const data = {
        labels: label.reverse(),
        datasets: [
          {
            label: `Crypto Price For The Last ${dateRange} Days`,
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
            data: USDnumberData.reverse()
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