import styled from "styled-components";

const HeaderWrapper = styled.div`
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    background-color: #8a2b06;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  .main-image {
    width: 100%;
    height: 25rem;
    z-index: 0;
    overflow: hidden;
    img {
      width: 110%;
      height: 100%;
      object-fit: cover;
      // transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
    }
  }

  .cart {
    background-color: #eb0a0a;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    padding: 5px;
  }

  .action {
    display: flex;
  }
  .logout {
    margin-right: 5px;
  }
`;

export default HeaderWrapper;
