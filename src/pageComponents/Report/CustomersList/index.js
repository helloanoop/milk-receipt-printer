import React from 'react';
import { usePrint } from 'providers/Print';
import StyledWrapper from './StyledWrapper';

const CustomersList = ({customers}) => {
  customers = customers || [];

  const {
    print
  } = usePrint();

  const openPrintModal = (c, options) => print(c, options);

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
            <th>Butter</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {customers.map((c) => {
            return (
              <tr key={c.uuid}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.milk}</td>
                <td>{c.curd}</td>
                <td>{c.buttermilk}</td>
                <td>{c.ghee}</td>
                <td>{c.butter}</td>
                <td>{c.balance}</td>
                <td className='text-blue-700'>
                  <button onClick={() => openPrintModal(c)}>View</button>
                  <button  onClick={() => openPrintModal(c, {print: true})}className='ml-5'>Print</button>
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