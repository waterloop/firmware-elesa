import React from 'react';
import styled from 'styled-components';
import Operations from './pages/Operations/Operations';
import Connections from './pages/Connections/Connections';
import RemoteFlashing from './pages/RemoteFlashing/RemoteFlashing';
import { ThemeProvider } from 'styled-components';
import OperationIcon from '../../../img/svg/icons/icon_operations_sidebar.svg';
import ConnectionIcon from '../../../img/svg/icons/icon_connections_sidebar.svg';
import RemoteFlashingIcon from '../../../img/svg/icons/icon_remote_flashing_sidebar.svg';
import theme from './styles/theme';
  import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

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

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 460px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    justify-content: start;
    padding: 20px 30px;
    width: 400px;
    height: 90px;
    text-decoration: none;
    color: ${({ theme }) => theme.colours.white};
    background-color: ${({ theme }) => theme.colours.blues.dark_blue};
    p {margin-left: 20px;}
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Container>
                    <Column>
                        <StyledLink to="/"> <OperationIcon /> <p> Operations </p> </StyledLink>
                        <StyledLink to="/remtoeFlashing"> <ConnectionIcon /> <p> Remtoe Flashing </p> </StyledLink>
                        <StyledLink to="/connections"> <RemoteFlashingIcon />  <p> Connections </p> </StyledLink>
                        
                    </Column>
                    <Routes>
                        <Route path='*' element={<Operations />}> </Route>
                        <Route path='/connections' element={<Connections />}> </Route>
                        <Route path='/remtoeFlashing' element={<RemoteFlashing />}> </Route>
                    </Routes>
                </Container>
            </Router>
        </ThemeProvider>
    )
}