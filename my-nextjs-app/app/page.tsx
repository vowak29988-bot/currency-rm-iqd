// @ts-ignore
"use client"

import { useState } from 'react';

export default function CurrencyConverter() {
  const [myr, setMyr] = useState<string>('');
  const [iqd, setIqd] = useState<string>('');
  
  const USD_TO_MYR = 413 / 100;
  const USD_TO_IQD = 135000 / 100;

  const MYR_TO_IQD_RATE = USD_TO_IQD / USD_TO_MYR;
  const IQD_TO_MYR_RATE = 1 / MYR_TO_IQD_RATE;

  const formatNumber = (num: number): string => {
    return num.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  };

  const handleMYRChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setMyr(raw);

    if (raw === "") {
      setIqd("");
      return;
    }

    const num = Number(raw);
    if (!isNaN(num)) {
      const converted = num * MYR_TO_IQD_RATE;
      setIqd(formatNumber(converted));
    }
  };

  const handleIQDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setIqd(raw);

    if (raw === "") {
      setMyr("");
      return;
    }

    const num = Number(raw);
    if (!isNaN(num)) {
      const converted = num * IQD_TO_MYR_RATE;
      setMyr(formatNumber(converted));
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '400px',
        margin: '50px auto',
        background: 'white',
        borderRadius: '15px',
        padding: '30px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '30px',
          fontSize: '24px'
        }}>
          🇲🇾 RM ⇄ IQD 🇮🇶
        </h1>

        {/* RM INPUT */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            Malaysian Ringgit (RM):
          </label>
          <input
            type="number"
            value={myr}
            onChange={handleMYRChange}
            placeholder="Enter RM"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              color: '#764ba2'
            }}
          />
        </div>

        <div style={{
          textAlign: 'center',
          margin: '20px 0',
          fontSize: '20px',
          color: '#667eea'
        }}>
          ⇅
        </div>

        {/* IQD INPUT */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#555'
          }}>
            Iraqi Dinar (IQD):
          </label>
          <input
            type="number"
            value={iqd}
            onChange={handleIQDChange}
            placeholder="Enter IQD"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              color: '#764ba2'
            }}
          />
        </div>

        <div style={{
          background: '#f0f8ff',
          padding: '15px',
          borderRadius: '8px',
          marginTop: '20px',
          fontSize: '12px',
          color: '#666'
        }}>
          <strong>Exchange Rates:</strong><br/>
          1 MYR = {MYR_TO_IQD_RATE.toFixed(2)} IQD <br/>
          1 IQD = {IQD_TO_MYR_RATE.toFixed(6)} MYR <br/><br/>
          <em>Based on: 100 USD = 413 MYR = 135,000 IQD</em>
        </div>
      </div>
    </div>
  );
}
