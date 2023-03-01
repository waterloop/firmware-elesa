import React from 'react';
import styled from 'styled-components';
import Operations from './pages/Operations/Operations';
import Connections from './pages/Connections/Connections';
import RemoteFlashing from './pages/RemoteFlashing/RemoteFlashing';
import ZeroMQ from './pages/ZeroMQTest/ZeroMQ';
import { ThemeProvider } from 'styled-components';
import OperationIcon from '@img/svg/icons/icon_operations_sidebar.svg';
import ConnectionIcon from '@img/svg/icons/icon_connections_sidebar.svg';
import RemoteFlashingIcon from '@img/svg/icons/icon_remote_flashing_sidebar.svg';
import theme from './styles/theme';
  import {
    HashRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';


const Container = styled.div`
    background-color: ${({ theme }) => theme.colours.blues.medium_blue};
    height: 100vh;
    color: white;
    display:grid;
    grid-template-columns: 25% 75%;
    grid-column-gap: 0px;
    font-family: ${({ theme }) => theme.font};
    @media (max-width: 900px) {
        grid-template-columns: 20% 80%;
      }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 10px 0;
  height: 100%;
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 24px;
    justify-content: start;
    padding: 20px 30px;
    height: 90px;
    text-decoration: none;
    color: ${({ theme }) => theme.colours.white};
    background-color: ${({ theme }) => theme.colours.blues.dark_blue};
    p {margin-left: 20px;}
    @media (max-width: 900px) {
        font-size: 0px;
      }
`;

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <ModalProvider>
                <Router>
                    <Container>
                        <Column>
                            <StyledLink to="/"> <OperationIcon /> <p> Operations </p> </StyledLink>
                            <StyledLink to="/remoteFlashing"> <ConnectionIcon /> <p> Remote Flashing </p> </StyledLink>
                            <StyledLink to="/connections"> <RemoteFlashingIcon />  <p> Connections </p> </StyledLink>
                            <StyledLink to="/test"> <RemoteFlashingIcon />  <p> Test </p> </StyledLink>
                        </Column>
                        <Routes>
                            <Route path='*' element={<Operations />}> </Route>
                            <Route path='/connections' element={<Connections />}> </Route>
                            <Route path='/remoteFlashing' element={<RemoteFlashing />}> </Route>
                            <Route path='/test' element={<ZeroMQ />}> </Route>
                        </Routes>
                    </Container>
                </Router>
            </ModalProvider>
        </ThemeProvider>
    )
}