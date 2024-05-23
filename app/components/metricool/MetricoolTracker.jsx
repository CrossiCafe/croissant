"use client";
import { useEffect } from 'react';

const MetricoolTracker = () => {
  useEffect(() => {
    const loadScript = (callback) => {
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://tracker.metricool.com/resources/be.js';
      script.onreadystatechange = callback;
      script.onload = callback;
      head.appendChild(script);
    };

    loadScript(() => {
      beTracker.t({ hash: 'bd2713b53b423865476c61e6b4762b92' });
    });
  }, []);

  return null; 
};

export default MetricoolTracker;
