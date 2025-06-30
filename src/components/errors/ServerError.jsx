import { AlertTriangle } from "lucide-react"; // Optional: professional icon
import "./ServerError.css"; // Optional: extract styles if needed

const ServerError = ({
  message = "We're having some technical issues.",
  onRetry,
}) => (
  <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light px-3">
    <div className="text-center p-4 rounded shadow-sm bg-white animate-fade">
      <AlertTriangle size={48} className="text-danger mb-3" />
      <h2 className="text-danger fw-bold mb-2">Something Went Wrong</h2>
      <p className="text-muted mb-4">
        { "We're having some technical issues.Please try again shortly."}
      </p>
      <button onClick={onRetry} className="btn btn-danger px-4 py-2">
        Retry
      </button>
    </div>
  </div>
);

export default ServerError;
