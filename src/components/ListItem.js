import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component {
  render() {
    const { lists } = this.props;
    let listChecked = findCheckedItem(lists);
    return (
      <div className="list">
        {listChecked.map((list, index) => {
          return (
            <div className="list-item-right" key={index}>
              <header>{list.headerName}</header>
              <ul className="list-item-content">
                {list.values.map((value, index) => {
                  return (
                    <li className="list-item-value" key={index}>
                      <div className="content">{value.name}</div>
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
function findCheckedItem(lists) {
  let listChecked = [];
  lists.map((listItem, index) => {
    let headerName = listItem.listName;
    let tempArr = [];
    let mainIndex = index;
    listItem.values.map((value, index) => {
      if (value.checked === false) {
        tempArr.push({
          name: value.name,
          index: index,
        });
      }
      return {};
    });
    if (tempArr.length > 0) {
      listChecked.push({
        headerName,
        values: tempArr,
        mainIndex,
      });
    }
    return {};
  });
  return listChecked;
}
function mapToState(state) {
  return {
    lists: state.lists,
  };
}
export default connect(mapToState)(ListItem);
