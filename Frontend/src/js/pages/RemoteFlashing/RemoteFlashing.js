import React, { useState } from 'react';
import Modal from 'react-modal';
import { Oval } from 'react-loader-spinner'
import styled from 'styled-components';
import theme from '../../styles/theme';
import { ButtonYellow } from '../../components/Buttons'
import StatisticBox from './StatisticBox'
import ExitIconWhite from '../../../../../img/svg/exit_white.svg';
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

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 20px;
  top: 20px;
  position: absolute;
`;

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: ${({ theme }) => theme.colours.white};
`

const StatisticsSection = styled.div`
  margin: 50px 0 0 0;
  display:grid;
  grid-template-columns: 35% 35%;
  grid-row: auto auto;
  grid-column-gap: 15%;
  grid-row-gap: 62px;

  @media (max-width: 1400px) {
    grid-template-columns: 35% 35%;
  }
  @media (max-width: 700px) {
    grid-template-columns: 80%;
  }
`;

function CustomModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onAfterOpen={props.onAfterOpen}
      onRequestClose={props.onRequestClose}
      style={props.style}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <ModalHeader>
          <button onClick={props.onCancel} style={{backgroundColor:"transparent", border: "none", cursor: "pointer"}}>
            <ExitIconWhite/>
          </button>
        </ModalHeader>
        <ModalBody>
          <ModalTitle>{props.title}</ModalTitle>
          <Oval
            height={104}
            width={104}
            color="#ffffff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#91939a"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default function RemoteFlashing() {
  const [connectionStatus, setconnectionStatus] = useState({
    connected: 
    {text: "CONNECTED", logo: StatusIconConnected}, 
    disconnected:
    {text: "DISCONNECTED", logo: StatusIconDisconnected}
  });

  const [isScanning, setScanning] = React.useState(false);
  const [devices, setDevices] = React.useState([]);

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

  function cancelScanning() {
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

        <CustomModal
          isOpen={isScanning}
          onAfterOpen={whileScanning}
          onRequestClose={finishedScanning}
          onCancel={cancelScanning}
          style={customStyles}
          title={"Scanning..."}
        />

        <Content>

        </Content>

        <ProgressBar>
          <ProgressBarLogo />
        </ProgressBar>
      </Container>
    </div>
  )
}