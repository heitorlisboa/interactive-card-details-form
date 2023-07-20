import successSvg from '../assets/icon-complete.svg';

export function Success() {
  return (
    <div className="success-container">
      <img src={successSvg} alt="" />

      <div className="success-content">
        <h1 className="success-title">Thank you!</h1>
        <p className="success-description">We've added your card details</p>
      </div>

      <button className="button">Continue</button>
    </div>
  );
}
