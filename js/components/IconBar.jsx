import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import background_colors from '../color.jsx';


const  not_found_url = 'svg/nn.svg';


function Icon(props) {
  const { url, value, index, color } = props;
  let img;
  let bg_color = color || background_colors[index];
  let svgstyle = { width: 60 };

  if (!color) {
    svgstyle.fill = background_colors[index];
  }

  if (url) {
    img = <ReactSVG wrapper='span' svgStyle={svgstyle} svgClassName="icon-image" src={url} />;
  } else {
    img = <ReactSVG wrapper='span' svgStyle={svgstyle} svgClassName="icon-image" src={not_found_url} />;
  }

  return (
    <div className="icon">
      {img}
      <p><strong style={{ color: bg_color }}>{value}</strong></p>
    </div>
  )
}


function IconBar(props) {
  let { icons } = props;
  let result = [];

  for (let i = 0; i < icons.length; i++) {
    let e = icons[i];

    let o = <Icon url={e.url} value={e.value} index={i} color={e.color || false} />;
    result.push(o);
  }

  return (
    <div className="icon-bar">
      {result}
    </div>
  );
}


Icon.defaultProps = {
  url: not_found_url,
};


IconBar.defaultProps = {
  icons: [],
}



export default IconBar;
