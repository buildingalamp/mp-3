import {Link} from "react-router";
import styled from "styled-components";

const StyledFooter=styled.header`
    background-color: #6B9080;
`;
export default function Footer(){
    return(
        <StyledFooter>
            <p>All Rights Reserved by Jeffrey Zhou <Link to="../credits/credits.html"> Credits</Link> &copy;</p>
            <div id="time-date"></div>
        </StyledFooter>
    )
}