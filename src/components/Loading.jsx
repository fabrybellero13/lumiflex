import { useEffect, useState } from "react";

export default function Loading({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 400);

          return 100;
        }

        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <h1 className="loading-logo">LumiFlex™</h1>

      <div className="loading-bar">
        <div
          className="loading-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{progress}%</p>
    </div>
  );
}