import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { ButtonYellow, ButtonLightGrey, ButtonDarkGrey } from './components/Buttons';

const Container = styled.div`
    background-color: ${({ theme }) => theme.colours.blues.medium_blue};
    color: white;
    display: flex;
    flex-direction: row;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: ${({ theme }) => theme.font}
`;

const myFunc = () => {
    console.log("clicked!");
} 

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Sidebar></Sidebar>
                <div class="main">
                    <h1 class="header">Section Title</h1>
                    <ButtonYellow width="400px" height="80px" fontSize="30px" onClick={myFunc}>Custom Size</ButtonYellow>
                    <ButtonLightGrey>Default Size</ButtonLightGrey>
                    <ButtonDarkGrey>Default Size</ButtonDarkGrey>
                </div> 
            </Container>
        </ThemeProvider>
    )
}