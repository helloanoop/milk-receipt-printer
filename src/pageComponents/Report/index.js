import React from 'react';
import uuid from 'utils/uuid';
import CustomersList from './CustomersList';
import StyledWrapper from './StyledWrapper';

const ReportPage = () => {
  const customers = [{
    uuid: uuid(),
    name: 'Anusree',
    phone: '9878978909',
    items: [
      {date: 1, milk: 1, curd: 0.5, buttermilk: 0, ghee: 0},
      {date: 2, milk: 1, curd: 0.5, buttermilk: 0, ghee: 0},
      {date: 3, milk: 1, curd: 0, buttermilk: 0, ghee: 0}
    ],
  }, {
    uuid: uuid(),
    name: 'Anoop',
    phone: '9988009988',
    items: [
      {date: 1, milk: 0, curd: 0, buttermilk: 0, ghee: 0},
      {date: 2, milk: 1, curd: 0.5, buttermilk: 0, ghee: 0},
      {date: 3, milk: 1, curd: 0, buttermilk: 0, ghee: 0}
    ],
  }, {
    uuid: uuid(),
    name: 'Anoop',
    phone: '9988009988',
    items: [
      {date: 1, milk: 0, curd: 0, buttermilk: 0, ghee: 0},
      {date: 2, milk: 1, curd: 0.5, buttermilk: 0, ghee: 0},
      {date: 3, milk: 1, curd: 0, buttermilk: 0, ghee: 0}
    ],
  }, {
    uuid: uuid(),
    name: 'Anoop',
    phone: '9988009988',
    items: [
      {date: 1, milk: 0, curd: 0, buttermilk: 0, ghee: 0},
      {date: 2, milk: 1, curd: 0.5, buttermilk: 0, ghee: 0},
      {date: 3, milk: 1, curd: 0, buttermilk: 0, ghee: 1}
    ],
  }];
  return (
    <StyledWrapper>
      <h3 className='text-center mt-10 mb-10 text-xl font-600 underline'>
        Report - October 2023
      </h3>
      <CustomersList customers={customers}/>
    </StyledWrapper>
  );
};

export default ReportPage;