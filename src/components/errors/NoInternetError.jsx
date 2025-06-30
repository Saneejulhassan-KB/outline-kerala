const NoInternetError = ({ onRetry }) => (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-white">
      <h2>🔌 No Internet</h2>
      <p>Please check your connection and try again.</p>
      <button onClick={onRetry} className="btn btn-outline-primary mt-3">Retry</button>
    </div>
  );
  
  export default NoInternetError;
