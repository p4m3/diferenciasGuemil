import React, { Component } from 'react';

import background_colors from '../color.jsx';


function compare_numbers(a, b) {
  return b.value - a.value;
}


function PercentageBar(props) {
  let samples = props.samples.slice().sort(compare_numbers);
  let total = 0;
  let segments = [];

  for (let i = 0; i < samples.length; i++) {
    let value = samples[i].value;

    total += value;
  }

  for (let i = 0; i < samples.length; i++) {
    let value = samples[i].value;

    let ratio = (value / total);
    let width = ratio * 100;
    let background_color = samples[i].color || background_colors[i];

    let style = {
      'width': `${width}%`,
      'background-color': background_color,
    };

    segments.push(
      <div className='percentage-segment' style={style}></div>
    );
  }

  return (
    <div className='percentage-container'>
      {segments}
    </div>
  );
}


PercentageBar.defaultProps = {
  samples: [],
};


export default PercentageBar;
