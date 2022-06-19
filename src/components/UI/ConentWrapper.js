import styled, { keyframes } from "styled-components";
import { Fragment } from "react";

const slide_down = keyframes`
    from {
        opacity: 0;
        transform: translateY(-3rem);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

const ContentWrapper = styled(Fragment)`
    .modal {
        position: fixed;
        top: 20vh;
        left: 5%;
        width: 90%;
        background-color: white;
        padding: 1rem;
        border-radius: 14px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        z-index: 30;
        animation: ${slide_down} 300ms ease-out forwards;
    }
`;

export default ContentWrapper;
