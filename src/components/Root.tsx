import Header from "./Header.tsx";
import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Main from "./Main.tsx"
import {Routes, Route} from "react-router";
import Home from "./mains/Home.tsx";
import Edu from "./mains/Edu.tsx";
import Emp from "./mains/Emp.tsx";
import Ach from "./mains/Ach.tsx";
import Ref from "./mains/Ref.tsx";
import Cert from "./mains/Cert.tsx";
import Proj from "./mains/Proj.tsx";
import styled from "styled-components";

const Wrapper=styled.div`
    width: 90vw;
    margin: auto;
`;

const Container=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`;

export default function Root(){
    return(
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>
                <Main>
                    <Routes>
                        <Route
                            path={`/`}
                            element={<Home/>}
                        />
                        <Route
                            path={`/education.html`}
                            element={<Edu/>}
                        />
                        <Route
                            path={`/employment.html`}
                            element={<Emp/>}
                        />
                        <Route
                            path={`/achievements.html`}
                            element={<Ach/>}
                        />
                        <Route
                            path={`/references.html`}
                            element={<Ref/>}
                        />
                        <Route
                            path={`/certifications.html`}
                            element={<Cert/>}
                        />
                        <Route
                            path={`/projects.html`}
                            element={<Proj/>}
                        />
                    </Routes>
                </Main>
            </Container>
            <Footer/>
        </Wrapper>
    )
}