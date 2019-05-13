import React, { Component } from "react";
import PropTypes from 'prop-types';


class TableHead extends Component {
  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    const { columns, onSort } = this.props;
    return (
      <thead data-test='TableHeadComponent'>
        <tr>
          {columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => onSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

TableHead.propTypes = {
  columns: PropTypes.array,
  onSort: PropTypes.func
}

export default TableHead;
