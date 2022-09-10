import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  @media print {
    font-size: 2rem;

    .title {
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 2rem;
    }
  }
  table {
    width: 100%;
    border-top: solid 1px silver;
    border-left: solid 1px silver;

    @media print{
      border-top: solid 1px black;
      border-left: solid 1px black;
    }

    tr {
      border-bottom: solid 1px silver;
      @media print{
        border-bottom: solid 1px black;
      }

      td {
        width: 16.66%;
        text-align: center;

        border-right: solid 1px silver;
        @media print{
          border-right: solid 1px black;
        }

        &.date {
          padding-left: 0.5rem;
        }
      }
    }
  }

  .payment-receipt {
    border-top: dashed 1px black;
  }
`;

export default Wrapper;
