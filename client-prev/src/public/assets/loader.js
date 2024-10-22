﻿import React from 'react'

const Loader = () => {
  return (
    <svg style={{width: "20px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a--inject-2" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop class="svg__stop-color" offset="0" stop-color="#fff"></stop><stop class="svg__stop-color" offset=".3" stop-color="#fff" stop-opacity=".9"></stop><stop class="svg__stop-color" offset=".6" stop-color="#fff" stop-opacity=".6"></stop><stop class="svg__stop-color" offset=".8" stop-color="#fff" stop-opacity=".3"></stop><stop class="svg__stop-color" offset="1" stop-color="#fff" stop-opacity="0"></stop></radialGradient><circle class="svg_strokeWidth" transform-origin="center" fill="none" stroke="url(#a--inject-2)" stroke-width="18" stroke-linecap="round" stroke-dasharray="200 1000" stroke-dashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="0.5" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle class="svg__stroke svg_strokeWidth" transform-origin="center" fill="none" opacity=".2" stroke="#fff" stroke-width="18" stroke-linecap="round" cx="100" cy="100" r="70"></circle></svg>    
)
}

export default Loader