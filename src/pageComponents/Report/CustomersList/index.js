import React from 'react';
import {
  MILK,
  CURD,
  BUTTERMILK,
  GHEE
} from 'constants/report';
import { getItemTotal } from 'utils/report'; 
import StyledWrapper from './StyledWrapper';

const CustomersList = ({customers}) => {
  customers = customers || [];

  return (
    <StyledWrapper>
      <table className="min-w-full bg-white customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Milk</th>
            <th>Curd</th>
            <th>Butter Milk</th>
            <th>Ghee</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {customers.map((c) => {
            return (
              <tr key={c.uuid}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{getItemTotal(c.items, MILK)}</td>
                <td>{getItemTotal(c.items, CURD)}</td>
                <td>{getItemTotal(c.items, BUTTERMILK)}</td>
                <td>{getItemTotal(c.items, GHEE)}</td>
                <td className='text-blue-700'>
                  <button>View</button>
                  <button className='ml-5'>Print</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </table>
    </StyledWrapper>
  );
};

export default CustomersList;