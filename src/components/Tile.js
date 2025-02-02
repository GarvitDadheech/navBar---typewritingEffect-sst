import React from 'react';

function Tile({header, subHeader, img, text, link, linkText, position}) {
  return (
    <div>
      <div className={`Tile ${position}`}>
        <h2>{header}</h2>
        <h3>{subHeader}</h3>
        <div className="img-parent">
          <img src={img} alt="tile-img" />
        </div>
        <div className="text">
          {text}
        </div>
        <div className="link-parent">
          <a href={link} className="link">{linkText}</a>
        </div>
      </div>
    </div>
  );
}

export default Tile;
