import React from "react";

function LoaderGray() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{width: "90px"}}>
      <radialGradient
        id="a--inject-12"
        cx="0.66"
        cy="0.313"
        fx="0.66"
        fy="0.313"
        gradientTransform="scale(1.5)"
      >
        <stop className="svg__stop-color" offset="0" stopColor="#727272"></stop>
        <stop
          className="svg__stop-color"
          offset="0.3"
          stopColor="#727272"
          stopOpacity="0.9"
        ></stop>
        <stop
          className="svg__stop-color"
          offset="0.6"
          stopColor="#727272"
          stopOpacity="0.6"
        ></stop>
        <stop
          className="svg__stop-color"
          offset="0.8"
          stopColor="#727272"
          stopOpacity="0.3"
        ></stop>
        <stop
          className="svg__stop-color"
          offset="1"
          stopColor="#727272"
          stopOpacity="0"
        ></stop>
      </radialGradient>
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="url(#a--inject-12)"
        strokeDasharray="200 1000"
        strokeLinecap="round"
        strokeWidth="18"
        className="svg_strokeWidth"
      >
        <animateTransform
          attributeName="transform"
          calcMode="spline"
          dur="0.6"
          keySplines="0 0 1 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="360;0"
        ></animateTransform>
      </circle>
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="none"
        stroke="#727272"
        strokeLinecap="round"
        strokeWidth="18"
        className="svg__stroke svg_strokeWidth"
        opacity="0.2"
      ></circle>
    </svg>
  );
}

export default LoaderGray;
