import React from 'react';
import { getItemLabelToDisplayInGrid } from 'utils/report';
import StyledWrapper from './StyledWrapper';

const Receipt = ({customer}) => {
  const ItemLabel = ({date}) => {
    return (
      <td>{getItemLabelToDisplayInGrid(customer.items, date)}</td>
    );
  };
  const DateLabel = ({date}) => {
    return (
      <td className='date'>{date}</td>
    );
  };
  return (
    <StyledWrapper>
      <h2 className='title text-center font-bold text-xl'>SRI SHANKARA DIARY</h2>
      <div className='text-center text-sm mt-1'>
        <span className='block'>Subhash P.S, Puliparambil House, Vatanapally</span>
        <span className='block'>Ph: 2601111, 9645377150</span>
      </div>

      <div className='mt-4 customer-details'>
        <div>
          <span className='font-bold'>Name: </span>
          {customer.name} (Ph: {customer.phone})
        </div>
        <div>
          <span className='font-bold'>Month: </span>October 2023
        </div>
      </div>

      <div className='mt-6'>
        <table className='milk-grid'>
          <tbody>
            <tr>
              <DateLabel date={1} />
              <ItemLabel date={1} />
              <DateLabel date={12} />
              <ItemLabel date={12} />
              <DateLabel date={23} />
              <ItemLabel date={23} />
            </tr>

            <tr>
              <DateLabel date={2} />
              <ItemLabel date={2} />
              <DateLabel date={13} />
              <ItemLabel date={13} />
              <DateLabel date={24} />
              <ItemLabel date={24} />
            </tr>

            <tr>
              <DateLabel date={3} />
              <ItemLabel date={3} />
              <DateLabel date={14} />
              <ItemLabel date={15} />
              <DateLabel date={25} />
              <ItemLabel date={25} />
            </tr>

            <tr>
              <DateLabel date={4} />
              <ItemLabel date={4} />
              <DateLabel date={15} />
              <ItemLabel date={15} />
              <DateLabel date={26} />
              <ItemLabel date={26} />
            </tr>


            <tr>
              <DateLabel date={5} />
              <ItemLabel date={5} />
              <DateLabel date={16} />
              <ItemLabel date={16} />
              <DateLabel date={27} />
              <ItemLabel date={27} />
            </tr>



            <tr>
              <DateLabel date={6} />
              <ItemLabel date={6} />
              <DateLabel date={17} />
              <ItemLabel date={17} />
              <DateLabel date={28} />
              <ItemLabel date={28} />
            </tr>



            <tr>
              <DateLabel date={7} />
              <ItemLabel date={7} />
              <DateLabel date={18} />
              <ItemLabel date={18} />
              <DateLabel date={29} />
              <ItemLabel date={29} />
            </tr>

            <tr>
              <DateLabel date={8} />
              <ItemLabel date={8} />
              <DateLabel date={19} />
              <ItemLabel date={19} />
              <DateLabel date={30} />
              <ItemLabel date={30} />
            </tr>

            <tr>
              <DateLabel date={9} />
              <ItemLabel date={9} />
              <DateLabel date={20} />
              <ItemLabel date={20} />
              <DateLabel date={31} />
              <ItemLabel date={31} />
            </tr>

            <tr>
              <DateLabel date={10} />
              <ItemLabel date={10} />
              <DateLabel date={21} />
              <ItemLabel date={21} />
              <td className='date'></td>
              <td></td>
            </tr>

            <tr>
              <DateLabel date={11} />
              <ItemLabel date={11} />
              <DateLabel date={22} />
              <ItemLabel date={22} />
              <td className='date'></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='total-grid-container'>
        <table className='total-grid'>
          <tbody>
            <tr>
              <td>Milk: 10 x 45</td>
              <td>= 450</td>
            </tr>
            <tr>
              <td>Curd: 2 x 30</td>
              <td>= 60</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-6 total-amount'>
        <span className='font-bold'> Total Amount</span>: Rs 290
      </div>

      <div className='mt-6 upi'>
        <span className='font-bold'>Pay via UPI:</span> 9961610182
      </div>

      <div className='payment-receipt mt-6'>
        <div className='mt-2 mb-4 text-center text-sm return-label'>Return this while making payment</div>
        <div>
          <span className='font-bold'>Name: </span>Sreelakshmi
        </div>
        <div>
          <span className='font-bold'>Month: </span>October 2023
        </div>
        <div className='mt-2'>
          <span className='font-bold'>Total Amount: </span>
        </div>
        <div>
          <span className='font-bold'>Received Amount: </span>
        </div>
        <div>
          <span className='font-bold'>Received Date: </span>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Receipt;