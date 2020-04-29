import React from 'react';

const Art = () => {
  return (
    <div className="art-box">
      <img className="android" src={window.android} />
      <img className="iphone" src={window.iphone} />
      <img className="controller" src={window.controller} />
      <img className="desktop" src={window.desktop} />
      <img className="laptop" src={window.laptop} />
      <img className="potion" src={window.potion} />
      <img className="disc" src={window.disc} />
      <img className="headphones" src={window.headphones} />
    </div>
  )
}

export default Art;