import React, { useEffect, useState } from 'react';

function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  return <div className="container mt-5"><div className="display-4">{counter}</div></div>;
}

export default Timer;
