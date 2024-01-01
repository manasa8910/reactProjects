import { useState, useEffect } from "react";

const ProgressBar = () => {
  const [filled, setFilled] = useState(0);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (filled < 100)
      setTimeout(() => {
        setFilled((prev) => (prev += 2));
        setStatus("Loading...");
      }, 100);
    else if (filled > 99) setStatus("Completed");
  }, [filled]);

  return (
    <>
      <div className="progressbar">
        <div
          className="progressTube"
          style={{
            width: `${filled}%`,
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      <p className="barStatus">{status}</p>
    </>
  );
};

export default ProgressBar;
