import { Component } from 'react';

export class Contacts extends Component {
    render() {
    return (
      <ul>
        {this.props.data.length > 0 ? (
          this.props.data.map(el => (
            <li key={el.id}>
              {el.name}: {el.number}
              <button
                type="button"
                onClick={()=>this.props.onDeleteBtn(el.id)}
                style={{
                  marginLeft: '10px',
                  padding: '2px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  boxSizing: 'border-box',
                }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>There are not contacts...</p>
        )}
      </ul>
    );
  }
}
