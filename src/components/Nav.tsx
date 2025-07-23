import {Link} from "react-router";
import styled from "styled-components";

const StyledNav=styled.nav`
    background-color: #CCE3DE;
    width: 30%;
    
    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

const StyledUL=styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    
    @media screen and (max-width: 750px){
        flex-direction: row;
    }
`;

const StyledIL=styled.li`
    border: #000000 3px solid;
    text-align: center;
    margin: 5% auto;
    width: 80%;
`

const StyledLink=styled(Link)`
    padding: 1% 2%;
    font-size: calc(2px + 1.5vw);
    color: #000000;
    text-decoration: none;
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledUL>
                <StyledIL><StyledLink to={`/`}>Home</StyledLink></StyledIL>
                <StyledIL><StyledLink to={`/education.html`}>Education</StyledLink></StyledIL>
                <StyledIL><StyledLink to={'/employment.html'}>Employment</StyledLink></StyledIL>
                <StyledIL><StyledLink to={`/achievements.html`}>Achievements</StyledLink></StyledIL>
                <StyledIL><StyledLink to={`/references.html`}>References</StyledLink></StyledIL>
                <StyledIL><StyledLink to={`/certifications.html`}>Certifications</StyledLink></StyledIL>
                <StyledIL><StyledLink to={`/projects.html`}>Projects</StyledLink></StyledIL>
            </StyledUL>
        </StyledNav>
    )
}