import { Component } from 'react';

export class Filter extends Component {
  render() {
      return (
        <label style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <span>Enter contact name to find it...</span>
          <input
            onChange={this.props.onChange}
            name="filter"
            style={{
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              width: '340px',
              boxSizing: 'border-box',
            }}
          />
        </label>
      );
  }
}
