import { useState } from 'react';
import './App.css';

function App() {
  const [cardholderName, setCardholderName] = useState('');

  return (
    <main>
      <form className="form">
        <div className="input-group">
          <label htmlFor="cardholder-name" className="label">
            Cardholder Name
          </label>
          <input
            id="cardholder-name"
            className="input"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={(event) => {
              setCardholderName(event.target.value);
            }}
          />
          {cardholderName.length < 5 && (
            <label htmlFor="cardholder-name" className="error-label">
              Minimum of 5 characters
            </label>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="card-number" className="label">
            Card number
          </label>
          <input
            id="card-number"
            className="input"
            type="text"
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>

        <div className="input-group-row">
          <div className="input-group">
            <label htmlFor="expiration-month" className="label">
              Exp. date (mm/yy)
            </label>
            <div className="input-row">
              <input
                id="expiration-month"
                className="input"
                type="text"
                placeholder="MM"
              />
              <input
                id="expiration-year"
                className="input"
                type="text"
                placeholder="YY"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="cvc" className="label">
              CVC
            </label>
            <input
              id="cvc"
              className="input"
              type="text"
              placeholder="e.g. 123"
            />
          </div>
        </div>

        <button className="submit-button" type="submit">
          Confirm
        </button>
      </form>
    </main>
  );
}

export default App;
