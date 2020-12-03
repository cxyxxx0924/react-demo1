import React, { useState, useEffect } from 'react';

function ComponentFunction(props) {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer);
    }
  })
  return (
    <div>
      <p>ComponentFunction</p>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default ComponentFunction;