import "../App.css";

const LoadingSpinner = () => {
  return (
    <div className="loading-state">
      <div className="spinner" aria-label="Loading categories"></div>
      <p>Loading categories...</p>
    </div>
  );
};

export default LoadingSpinner;
