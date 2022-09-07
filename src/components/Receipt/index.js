import React from 'react';
import StyledWrapper from './StyledWrapper';

const Receipt = () => {
  return (
    <StyledWrapper>
      <h2 className='text-center font-bold text-xl'>KSHEERAM DIARY</h2>
      <div className='text-center mt-4'>
        <span className='block'>Subhash P.S, Puliparambil House, Vatanapally</span>
        <span className='block'>Ph: 2601111, 9645377150</span>
      </div>

      <div className='mt-6'>
        <div>
          <span className='font-bold'>Name: </span>Sreelakshmi</div>
        <div>
          <span className='font-bold'>Month: </span>October 2023
        </div>
      </div>

      <div className='mt-6'>
        <table>
          <tbody>
            <tr>
              <td className='date'>1</td>
              <td>1</td>
              <td className='date'>12</td>
              <td>1</td>
              <td className='date'>23</td>
              <td>1</td>
            </tr>

            <tr>
              <td className='date'>2</td>
              <td>0</td>
              <td className='date'>13</td>
              <td>1</td>
              <td className='date'>24</td>
              <td>1</td>
            </tr>

            <tr>
              <td className='date'>3</td>
              <td>1</td>
              <td className='date'>14</td>
              <td>0</td>
              <td className='date'>25</td>
              <td>1</td>
            </tr>

            <tr>
              <td className='date'>4</td>
              <td>0</td>
              <td className='date'>15</td>
              <td>1</td>
              <td className='date'>26</td>
              <td>1</td>
            </tr>


            <tr>
              <td className='date'>5</td>
              <td>1</td>
              <td className='date'>16</td>
              <td>1</td>
              <td className='date'>27</td>
              <td>1</td>
            </tr>



            <tr>
              <td className='date'>6</td>
              <td>1</td>
              <td className='date'>17</td>
              <td>1</td>
              <td className='date'>28</td>
              <td>1</td>
            </tr>



            <tr>
              <td className='date'>7</td>
              <td>0</td>
              <td className='date'>18</td>
              <td>0.5</td>
              <td className='date'>29</td>
              <td>0.5</td>
            </tr>

            <tr>
              <td className='date'>8</td>
              <td>1</td>
              <td className='date'>19</td>
              <td>1</td>
              <td className='date'>30</td>
              <td>1</td>
            </tr>

            <tr>
              <td className='date'>9</td>
              <td>1</td>
              <td className='date'>20</td>
              <td>1</td>
              <td className='date'>31</td>
              <td>1</td>
            </tr>

            <tr>
              <td className='date'>10</td>
              <td>1</td>
              <td className='date'>21</td>
              <td>1</td>
              <td className='date'></td>
              <td></td>
            </tr>

            <tr>
              <td className='date'>12</td>
              <td>1</td>
              <td className='date'>22</td>
              <td>1</td>
              <td className='date'></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='mt-6'>
        <span className='font-bold'> Milk</span>: 10 ltrs
      </div>

      <div className='mt-6'>
        <span className='font-bold'> Total Amount</span>: Rs 290
      </div>

      <div className='mt-6'>
        <span className='font-bold'>Pay via UPI:</span> 9961610182
      </div>

      <div className='payment-receipt mt-6'>
        <div className='mt-2 mb-4 text-center text-sm'>Return this while making payment</div>
        <div>
          <span className='font-bold'>Name: </span>Sreelakshmi
        </div>
        <div>
          <span className='font-bold'>Month: </span>October 2023
        </div>
        <div className='mt-2'>
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