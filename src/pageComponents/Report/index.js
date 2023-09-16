import React from 'react';
import _ from 'lodash';
import CustomersList from './CustomersList';
import StyledWrapper from './StyledWrapper';
import { useRouter } from 'next/router';

const ReportPage = () => {
  const router = useRouter();
  const { month, year } = router.query;

  const customers = JSON.parse(localStorage.getItem('customers')) || [];

  const summaryItems = [];
  let total = 0;

  summaryItems.push({
    name: 'Milk',
    qty: _.reduce(customers, (sum, customer) => sum + customer.milk, 0),
    unit: 'Litre',
    pricePerUnit: 70,
  });

  return (
    <StyledWrapper>
      <div className="flex items-center mb-4">
        <h3 className='text-xl font-600 underline'>
          Report - {month} {year}
        </h3>
        <button
          onClick={() => router.push('/')}
          className="text-blue-500 hover:underline cursor-pointer ml-4"
        >
          Back
        </button>
      </div>

{/* Todo */}
      {/* <h2 className='text-lg mb-4'>Summary</h2>
      <table className='report-table'>
        <thead>
          <tr>
            <th>Item</th>
            <th>Qty</th>
            <th>Unit</th>
            <th>Price Per Unit</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {summaryItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.unit}</td>
              <td>{item.pricePerUnit}</td>
              <td>{item.qty * item.pricePerUnit}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:</td>
            <td>{total}</td>
          </tr>
        </tfoot>
      </table> */}

      <h2 className='text-lg mb-4'>Customers</h2>
      <CustomersList customers={customers}/>
    </StyledWrapper>
  );
};

export default ReportPage;