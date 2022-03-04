import React from 'react';
import { tableHeadData } from '../../constants/sellers';

const TableHead = () => (
  <thead>
    <tr>
      { tableHeadData.map((tableData) => (
        <th key={ tableData }>{ tableData }</th>
      ))}
    </tr>
  </thead>
);

export default TableHead;
