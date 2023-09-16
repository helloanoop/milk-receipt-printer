import styled from 'styled-components';

const Wrapper = styled.div`
table.report-table {
  tbody {
    tr:nth-child(even) {
      background-color: #f2f2f2; /* Light gray background for even rows */
    }

    tr:nth-child(odd) {
      background-color: #ffffff; /* White background for odd rows */
    }
  }
}
`;

export default Wrapper;
