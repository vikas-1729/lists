import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  handleToogle = (index) => {
    console.log('index', index);
  };
  render() {
    const { lists } = this.props;

    if (lists.length === 0) {
      return <h1>No item to show</h1>;
    }
    console.log('list-item', lists);

    return (
      <div className="list">
        {lists.map((list, index) => {
          return (
            <div className="list-item-left" key={index}>
              <header>{list.listName}</header>
              <ul className="list-item-content">
                {list.values.map((value, index) => {
                  return (
                    <li className="list-item-value" key={index}>
                      <input
                        type="checkbox"
                        onClick={() => {
                          this.handleToogle(index);
                        }}
                      />
                      <label>{value.name}</label>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
function mapToState(state) {
  return {
    lists: state.lists,
  };
}
export default connect(mapToState)(List);
