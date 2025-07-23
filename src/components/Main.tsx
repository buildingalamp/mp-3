import styled from "styled-components";

const StyledMain=styled.main`
    height: 100vh;
    width: 70%;
    background-color: #EAF4F4;

    h2, p {
        text-align: center;
    }

    ul {
        padding-left: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
    }

    li {
        border-left: #000000 3px solid;
        padding-left: 1vw;
        text-align: left;
        font-size: calc(10px + 1vw);
        margin: 5% auto;
        width: 80%;
    }
    
    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const Main = ({ children }) => {
    return <StyledMain>{children}</StyledMain>;
}
export default Main;