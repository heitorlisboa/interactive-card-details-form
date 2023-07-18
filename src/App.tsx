import { FormEvent, useState } from 'react';

import './App.css';

const cardNumberRegex = /\d{4} ?\d{4} ?\d{4} ?\d{4}/;

const initialInputState = {
  value: '',
  isTouched: false,
};

const updateBlurState = (previousState: typeof initialInputState) => {
  return {
    value: previousState.value,
    isTouched: true,
  };
};

function App() {
  const [cardholderName, setCardholderName] = useState(initialInputState);
  const [cardNumber, setCardNumber] = useState(initialInputState);
  const [expirationMonth, setExpirationMonth] = useState(initialInputState);
  const [expirationYear, setExpirationYear] = useState(initialInputState);
  const [cvc, setCvc] = useState(initialInputState);

  const isCardholderNameInvalid = cardholderName.value.length < 5;
  const isCardNumberInvalid = !cardNumberRegex.test(cardNumber.value);
  const isExpirationDateInvalid =
    expirationMonth.value.trim().length === 0 ||
    expirationYear.value.trim().length === 0;
  const isCvcInvalid = cvc.value.trim().length === 0;

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({
      cardholderName: cardholderName.value,
      cardNumber: cardNumber.value,
      expirationMonth: expirationMonth.value,
      expirationYear: expirationYear.value,
      cvc: cvc.value,
    });
  }

  return (
    <main>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="cardholder-name" className="label">
            Cardholder Name
          </label>
          <input
            id="cardholder-name"
            className="input"
            type="text"
            placeholder="e.g. Jane Appleseed"
            data-invalid={isCardholderNameInvalid && cardholderName.isTouched}
            onChange={(event) => {
              setCardholderName((previousState) => {
                return {
                  value: event.target.value,
                  isTouched: previousState.isTouched,
                };
              });
            }}
            onBlur={() => {
              setCardholderName(updateBlurState);
            }}
          />
          {isCardholderNameInvalid && cardholderName.isTouched && (
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
            data-invalid={isCardNumberInvalid && cardNumber.isTouched}
            onChange={(event) => {
              setCardNumber((previousState) => {
                return {
                  value: event.target.value,
                  isTouched: previousState.isTouched,
                };
              });
            }}
            onBlur={() => {
              setCardNumber(updateBlurState);
            }}
          />
          {isCardNumberInvalid && cardNumber.isTouched && (
            <label htmlFor="card-number" className="error-label">
              Wrong format, numbers only and 16 digits
            </label>
          )}
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
                data-invalid={
                  isExpirationDateInvalid && expirationMonth.isTouched
                }
                onChange={(event) => {
                  setExpirationMonth((previousState) => {
                    return {
                      value: event.target.value,
                      isTouched: previousState.isTouched,
                    };
                  });
                }}
                onBlur={() => {
                  setExpirationMonth(updateBlurState);
                }}
              />
              <input
                id="expiration-year"
                className="input"
                type="text"
                placeholder="YY"
                data-invalid={
                  isExpirationDateInvalid && expirationYear.isTouched
                }
                onChange={(event) => {
                  setExpirationYear((previousState) => {
                    return {
                      value: event.target.value,
                      isTouched: previousState.isTouched,
                    };
                  });
                }}
                onBlur={() => {
                  setExpirationYear(updateBlurState);
                }}
              />
            </div>
            {isExpirationDateInvalid &&
              (expirationMonth.isTouched || expirationYear.isTouched) && (
                <label htmlFor="expiration-month" className="error-label">
                  Can't be blank
                </label>
              )}
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
              data-invalid={isCvcInvalid && cvc.isTouched}
              onChange={(event) => {
                setCvc((previousState) => {
                  return {
                    value: event.target.value,
                    isTouched: previousState.isTouched,
                  };
                });
              }}
              onBlur={() => {
                setCvc(updateBlurState);
              }}
            />
            {isCvcInvalid && cvc.isTouched && (
              <label htmlFor="cvc" className="error-label">
                Can't be blank
              </label>
            )}
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
