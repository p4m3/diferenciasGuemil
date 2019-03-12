import React, { Component } from 'react';

import PercentageBar from './PercentageBar.jsx';
import IconBar from './IconBar.jsx';


const samples = [20, 3, 8, 4, 4, 10, 12];
const icons = [
  {},
  {},
];


class SampleResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title_english = this.props.title_english;
    let title_spanish = this.props.title_spanish;
    let samples = this.props.sample_data.map(e => ({ value: e.value, color: e.color || false }));
    let icons = this.props.sample_data.map(e => ({
      url: e.icon,
      value: e.value,
      color: e.color || false,
    }));

    return (
      <div class="row">
        <h4 class="col-md-4">
          {title_english}
          <br />
          <span lang="es">{title_spanish}</span>
        </h4>
        <div class="col-md-8">
          <PercentageBar samples={samples} />
          <IconBar icons={icons} />
        </div>
      </div>
    );
  }
}


export default SampleResult;
