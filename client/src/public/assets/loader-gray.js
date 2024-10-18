import React from "react";

function LoaderGray() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{width: "90px"}}><radialGradient id="a--inject-12" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop className="svg__stop-color" offset="0" stopColor="#727272"></stop><stop className="svg__stop-color" offset=".3" stopColor="#727272" stopOpacity=".9"></stop><stop className="svg__stop-color" offset=".6" stopColor="#727272" stopOpacity=".6"></stop><stop className="svg__stop-color" offset=".8" stopColor="#727272" stopOpacity=".3"></stop><stop className="svg__stop-color" offset="1" stopColor="#727272" stopOpacity="0"></stop></radialGradient><circle className="svg_strokeWidth" transformOrigin="center" fill="none" stroke="url(#a--inject-12)" strokeWidth="18" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="0.5" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle className="svg__stroke svg_strokeWidth" transformOrigin="center" fill="none" opacity=".2" stroke="#727272" strokeWidth="18" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
  );
}

export default LoaderGray;

