import styled from 'styled-components';

const Wrapper = styled.div`
  table {
    width: 100%;
    border-top: solid 1px silver;
    border-left: solid 1px silver;

    tr {
      border-bottom: solid 1px silver;

      td {
        width: 16.66%;
        text-align: center;

        border-right: solid 1px silver;

        &.date {
          font-weight: bold;
          padding-left: 1rem;
        }
      }
    }
  }

  .payment-receipt {
    border-top: dotted 1px black;
  }
`;

export default Wrapper;
