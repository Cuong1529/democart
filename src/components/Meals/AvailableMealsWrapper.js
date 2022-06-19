import styled from "styled-components";

const AvailableMealsWrapper = styled.div`
  .meals {
    max-width: 60rem;
    width: 90%;
    margin: 2rem auto;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
  .btnReset {
    cursor: pointer;
    background-color: #f52500;
    border-radius: 5px;
    color: white;
    margin: 5px auto;
    margin-right: 0px;
    display: block;
  }
`;

export default AvailableMealsWrapper;
