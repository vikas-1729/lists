import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggle } from '../action';

class List extends Component {
  handleToogle = (e, mainIndex, index) => {
    let listItem = document.getElementById(`list-item${mainIndex}${index}`);
    if (e.target.checked) {
      listItem.style.backgroundColor = 'lightgreen';
    } else {
      if (mainIndex % 2 === 0) {
        listItem.style.backgroundColor = '#f1f1f1';
      } else {
        listItem.style.backgroundColor = 'white';
      }
      //document.getElementById(`list-item${index}`).style.backgroundColor =
    }
    this.props.dispatch(toggle(mainIndex, index));
  };
  render() {
    const { lists } = this.props;

    if (lists.length === 0) {
      return <h1>No item to show</h1>;
    }
    console.log('list-item', lists);

    return (
      <div className="list">
        {lists.map((list, mainIndex) => {
          return (
            <div className="list-item-left" key={mainIndex}>
              <header>{list.listName}</header>
              <ul className="list-item-content">
                {list.values.map((value, index) => {
                  return (
                    <li
                      className="list-item-value"
                      id={`list-item${mainIndex}${index}`}
                      key={index}
                    >
                      <input
                        type="checkbox"
                        id={`checkbox${index}`}
                        onChange={(e) => {
                          this.handleToogle(e, mainIndex, index);
                        }}
                        checked={value.checked}
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
