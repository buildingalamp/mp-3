import styled from "styled-components";

const StyledHeader=styled.header`
    background-color: #6B9080;

    @media screen and (max-width: 1000px) {
        text-align: center;
    }
`;

export default function Header(){
    return(
        <StyledHeader>
            <div>
                <h1>Jeffrey Zhou</h1>
                <p><strong>Online Resume</strong></p>
            </div>
        </StyledHeader>
    )
}