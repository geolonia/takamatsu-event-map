import React from "react";
import './About.scss'
import Qrcode from './Qrcode'
import Share from './Share'

const Content = () => {

  return (
    <div className="about">
      <div className="branding">
        <img className="image" src={'./usuki-logo.png'} alt="ロゴ"/>
      </div>

      <div className="description">{'臼杵観光マップ'}</div>
      <div className="qrcode"><Qrcode url={window.location.href}/></div>
      <Share />
    </div>
  );
};

export default Content;
