import React from 'react';
import _ from 'lodash';
import CustomersList from './CustomersList';
import StyledWrapper from './StyledWrapper';
import { useRouter } from 'next/router';

const ReportPage = () => {
  const router = useRouter();
  const { month, year } = router.query;

  const customers = JSON.parse(localStorage.getItem('customers')) || [];

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

      <h2 className='text-lg mb-4'>Customers</h2>
      <CustomersList customers={customers}/>
    </StyledWrapper>
  );
};

export default ReportPage;