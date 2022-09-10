import styled from 'styled-components';

const Wrapper = styled.div`
  table.customers {
    thead, tbody {
      tr {
        border-bottom: solid 1px #f3f3f3;

        th, td {
          padding-left: 3px;
          padding-right: 3px;

          &:first-child {
            padding-left: 10px;
          }

          &:last-child {
            text-align: center;
          }
        }
      }
    }

    thead {
      tr {
        th {
          font-size: 1rem;
          font-weight: 600;
          padding-bottom: 5px;
        }
      }
    }

    tbody {
      tr {
        td {
          padding-top: 4px;
          padding-bottom: 4px;

          button {
            &:hover {
              text-decoration: underline;
            }
          }
        }

        &:nth-child(odd) {
          background-color: #f0f0f0;
        }

        &:hover {
          background-color: #e5e5e5 !important;
        }
      }
    }
  }
`;

export default Wrapper;
