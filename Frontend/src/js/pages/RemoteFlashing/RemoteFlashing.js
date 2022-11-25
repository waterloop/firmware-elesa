import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { ButtonYellow } from '../../components/Buttons'
import StatisticBox from './StatisticBox';
import StatusIconConnected from '../../../../../img/svg/icons/icon_status_bar_connected.svg';
import StatusIconDisconnected from '../../../../../img/svg/icons/icon_status_bar_disconnected.svg';
import ProgressBarLogo from '../../../../../img/svg/icons/icon_operations_progressbar.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
`;

const Nav = styled.div`
  background-color: ${({ theme }) => theme.colours.blues.medium_blue};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  padding-left: 80px;
  box-shadow: 0px 6px 16px rgba(35, 38, 53, 0.25), inset 1px 0px 4px #232635;
`;

const NavContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 18px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 139px;

  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 56px;
  }
`;


const ProgressBar = styled.div`
  border-bottom: 8px solid ${({ theme }) => theme.colours.blues.dark_blue};
  width: 800px;
  height: 40px;
  display: flex;
  padding-bottom: 5px;
  position: fixed;
  bottom: 30px;
  align-items: flex-end;
`;

const Content = styled.div`
  height: 60%;
`;

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  content: {
    background: theme.colours.blues.dark_blue,
    width: '552px',
    height: '355px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function RemoteFlashing() {
  const [connectionStatus, setconnectionStatus] = useState({
    connected: 
    {text: "CONNECTED", logo: StatusIconConnected}, 
    disconnected:
    {text: "DISCONNECTED", logo: StatusIconDisconnected}
  });

  const [isScanning, setScanning] = React.useState(false);

  function scanForDevices() {
    setScanning(true);
  }

  function whileScanning() {
    // references are now sync'd and can be accessed.
    console.log("Scanning");
  }

  function finishedScanning() {
    setScanning(false);
  }

  return (
    <div>
      <Nav>
        <NavContent>
          <connectionStatus.connected.logo />
          <p>{connectionStatus.disconnected.text}</p>
        </NavContent>
      </Nav>
      <Container>
        <Header>
          <h3>
            Remote Flashing
          </h3>
          <ButtonYellow height='56px' onClick={scanForDevices}>
            Scan For Devices
          </ButtonYellow>
        </Header>

        <Modal
          isOpen={isScanning}
          onAfterOpen={whileScanning}
          onRequestClose={finishedScanning}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={finishedScanning}>close</button>
          <div>I am a modal</div>
        </Modal>
        <Content>

        </Content>

        <ProgressBar>
          <ProgressBarLogo />
        </ProgressBar>
      </Container>
    </div>
  )
}