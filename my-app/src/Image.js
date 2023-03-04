import React, { Component } from 'react'

export class Image extends Component {
  render() {
    const { source, alternativeText } = this.props;
    return (
      <div>
        <img src={ source } alt={ alternativeText } />;
      </div>
    )
  }
}

export default Image