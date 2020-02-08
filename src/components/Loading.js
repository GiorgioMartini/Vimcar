import React, { useState, useEffect } from "react";

const Loading = () => {
  const [content, setCcontent] = useState('Loading');
  
  useEffect(() => {
    const id = window.setInterval(() => {
      content === 'Loading...'
        ? setCcontent('Loading')
        : setCcontent(prev => prev + '.')
    }, 300)
    return () => window.clearInterval(id)
  },[content])
  
  return (
    <p className="b f3 tc pa2">
      {content}
    </p>
  );
};

export default Loading;
