import { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader">
      <div className="loader-box">
        <p>Loading portfolio...</p>
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <span>{progress}%</span>
      </div>
    </div>
  );
}

export default Loader;
