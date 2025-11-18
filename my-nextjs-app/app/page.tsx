// @ts-ignore
"use client"

// app.js - Complete Next.js currency converter
import { useState } from 'react';

export default function CurrencyConverter() {
  const [myr, setMyr] = useState('');
  const [iqd, setIqd] = useState('');
  
  // Conversion rates based on your data
  const USD_TO_MYR = 413 / 100;
  const USD_TO_IQD = 135000 / 100;
  const MYR_TO_IQD_RATE = USD_TO_IQD / USD_TO_MYR;

  const convertToIQD = (myrAmount) => {
    if (!myrAmount || isNaN(myrAmount)) return '';
    const iqdAmount = myrAmount * MYR_TO_IQD_RATE;
    return iqdAmount.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    });
  };

  const handleMYRChange = (e) => {
    const value = e.target.value;
    setMyr(value);
    
    if (value === '') {
      setIqd('');
      return;
    }
    
    const numValue = parseFloat(value);
    if (!isNaN(numValue)) {
      setIqd(convertToIQD(numValue));
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
          🇲🇾 RM to IQD 🇮🇶
        </h1>
        
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
            placeholder="Enter amount in RM"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        
        <div style={{
          textAlign: 'center',
          margin: '20px 0',
          fontSize: '20px',
          color: '#667eea'
        }}>
          ↓
        </div>
        
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
            type="text"
            value={iqd}
            readOnly
            placeholder="IQD amount will appear here"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ddd',
              borderRadius: '8px',
              fontSize: '16px',
              backgroundColor: '#f9f9f9',
              boxSizing: 'border-box'
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
          <strong>Exchange Rate:</strong><br />
          1 MYR = {MYR_TO_IQD_RATE.toFixed(2)} IQD<br />
          <em>Based on: 100 USD = 413 MYR = 135,000 IQD</em>
        </div>
      </div>
    </div>
  );
}
