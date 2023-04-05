import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Oval } from 'react-loader-spinner'
import styled from 'styled-components';
import theme from '@styles/theme';
import { ButtonYellow, ButtonLightGrey } from '@components/Buttons'
import StatisticBox from './StatisticBox'
import ScrollBar from '../../components/ScrollBar';
import ExitIconWhite from '@img/svg/exit_white.svg';
import StatusIconConnected from '@img/svg/icons/icon_status_bar_connected.svg';
import StatusIconDisconnected from '@img/svg/icons/icon_status_bar_disconnected.svg';
import ProgressBarLogo from '@img/svg/icons/icon_operations_progressbar.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  width: 100%;
  height: 90%;
  overflow: hidden;
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
  justify-content: space-between;
  width: 43%;

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
  min-width: 45vw;
  max-width: 900px;
  height: 40px;
  display: flex;
  padding-bottom: 5px;
  bottom: 30px;
  align-items: flex-end;
`;

const Content = styled(ScrollBar)`
  max-height: 525px;
  width: 900px;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  overflow-y: scroll;
`;

const loadingModalStyle = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  content: {
    background: theme.colours.blues.dark_blue,
    width: '552px',
    height: '355px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const deviceInfoModalStyle = {
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  },
  content: {
    width: '840px',
    height: '582px',
    padding: '40px',
    paddingLeft: '65px',
    background: theme.colours.blues.dark_blue,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const CenteredModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

const ModalContent = styled.div`
  display: flex;
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

const DeviceInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 80px;
  gap: 60px;
`

const DeviceInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  font-family: Roboto;
  font-size: 34px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colours.yellows.primary_yellow};
`

const DividerLine = styled.div`
  border-left: 1px solid white; 
  height: 100%;
  width: 1px;
`

const DeviceInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const DeviceInfoColHeader = styled.div`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 0.1em;
  text-align: left;
  width: 100%;
  color: ${({ theme }) => theme.colours.yellows.primary_yellow};
`

const DeviceInfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colours.white};
`

const DeviceInfoRowLabel = styled.label`
  width: 125px;
  height: 21px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  color: ${({ theme }) => theme.colours.white};
`

const DeviceInfoRowInput = styled.input`
  height: 30px;
  width: 150px;
  left: 155px;
  top: 0px;
  border-radius: 3px;
  padding: 5px 10px 5px 10px;
  background-color: transparent;
  border: 1px solid white;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.colours.white};
`

const DeviceInfoRowText = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.02em;
`

function CustomModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onAfterOpen={props.onAfterOpen}
      onRequestClose={props.onRequestClose}
      style={props.style}
      contentLabel="Example Modal"
    >
      <CenteredModalContent>
        <ModalHeader>
          <button onClick={() => {console.log("1"); props.onRequestClose()}} style={{backgroundColor:"transparent", border: "none", cursor: "pointer"}}>
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
      </CenteredModalContent>
    </Modal>
  )
}

export default function RemoteFlashing() {
  const [connectionStatus, setConnectionStatus] = useState({
    connected: 
    {text: "CONNECTED", logo: StatusIconConnected}, 
    disconnected:
    {text: "DISCONNECTED", logo: StatusIconDisconnected}
  });

  const [isScanning, setScanning] = React.useState(false);
  const [isScanningDevice, setScanningDevice] = React.useState(false);
  const [isSavingDetails, setSavingDetails] = React.useState(false);
  const [showDevices, setShowDevices] = React.useState(false);
  const [showDeviceDetails, setShowDeviceDetails] = React.useState(false);

  // const [devices, setDevices] = React.useState(["Device 1", "Device 2", "Device 3", "Device 4"]);
  const devices = ["Device 1", "Device 2", "Device 3", "Device 4"]

  // Scanning for devices
  function scanForDevices() {
    setScanning(true);
  }

  function whileScanning() {
    // references are now sync'd and can be accessed.
    console.log("Scanning");
  }

  function finishedScanning() {
    setScanning(false);
    setShowDevices(true);
  }

  // Device details
  function getDeviceDetails() {
    setScanningDevice(true);
  }

  function whileScanningDevice() {
    console.log("Scanning");
  }

  function finishedScanningDevice() {
    console.log("finished canning device")
    setScanningDevice(false);
    setShowDevices(false);
    setShowDeviceDetails(true);
  }

  function closeDeviceDetails() {
    setShowDeviceDetails(false);
    setShowDevices(true);
  }

  function saveDeviceDetails() {
    setShowDeviceDetails(false);
    setSavingDetails(true);
  }

  return (
    <div style={{"width": "100%"}}>
      <Nav>
        <NavContent>
          <connectionStatus.connected.logo />
          <p>{connectionStatus.connected.text}</p>
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
          style={loadingModalStyle}
          title={"Scanning..."}
        />

        <CustomModal
          isOpen={isScanningDevice}
          onAfterOpen={whileScanningDevice}
          onRequestClose={finishedScanningDevice}
          style={loadingModalStyle}
          title={"Scanning..."}
        />

        <CustomModal
          isOpen={isSavingDetails}
          onAfterOpen={() => {}}  // TODO
          onRequestClose={() => {setSavingDetails(false)}}
          style={loadingModalStyle}
          title={"Saving Changes"}
        />

        <Modal
          isOpen={showDeviceDetails}
          onRequestClose={closeDeviceDetails}
          style={deviceInfoModalStyle}
          contentLabel="Device Details"
        >
          <ModalContent>
            <DeviceInfoTitle>
              Device X
              <button onClick={closeDeviceDetails} style={{backgroundColor:"transparent", border: "none", cursor: "pointer"}}>
                <ExitIconWhite/>
              </button>
            </DeviceInfoTitle>
            <DeviceInfo>

              <DeviceInfoCol>
                <DeviceInfoColHeader>DEVICE INFORMATION</DeviceInfoColHeader>
                <DeviceInfoRow>
                  <DeviceInfoRowLabel htmlFor="deviceMode">Device Mode</DeviceInfoRowLabel>
                  <DeviceInfoRowInput type="text" id="deviceMode" name="deviceMode"/>
                </DeviceInfoRow>
                <DeviceInfoRow>
                  <DeviceInfoRowLabel htmlFor="shortDeviceID">Short Device ID</DeviceInfoRowLabel>
                  <DeviceInfoRowInput type="text" id="shortDeviceID" name="shortDeviceID"/>
                </DeviceInfoRow>
                <DeviceInfoRow>
                  <DeviceInfoRowLabel htmlFor="longDeviceID">Long Device ID</DeviceInfoRowLabel>
                  <DeviceInfoRowInput type="text" id="longDeviceID" name="longDeviceID"/>
                </DeviceInfoRow>
                <DeviceInfoRow>
                  <ButtonLightGrey onClick={saveDeviceDetails}>SAVE CHANGES</ButtonLightGrey>
                </DeviceInfoRow>
                <br/>
                <DeviceInfoColHeader>DEVICE STATUS</DeviceInfoColHeader>
                <DeviceInfoRow>
                  <DeviceInfoRowLabel>Device Type</DeviceInfoRowLabel>
                  STM32L432KC
                </DeviceInfoRow>
                <DeviceInfoRow>
                  <DeviceInfoRowLabel>Device Version</DeviceInfoRowLabel>
                  2.14
                </DeviceInfoRow>
              </DeviceInfoCol>
              <DividerLine/>
              <DeviceInfoCol>
                <DeviceInfoColHeader>DEVICE MANAGEMENT</DeviceInfoColHeader>
                <DeviceInfoRow>
                  <DeviceInfoRowText>Save compiled source code to a device connected to the CAN Bus.</DeviceInfoRowText>
                  <ButtonLightGrey>FLASH DEVICE</ButtonLightGrey>
                </DeviceInfoRow>
                <DeviceInfoRow>
                  <DeviceInfoRowText>Erase a segment of the memory on a board.</DeviceInfoRowText>
                  <ButtonLightGrey>ERASE</ButtonLightGrey>
                </DeviceInfoRow>
                <DeviceInfoRow>
                  <DeviceInfoRowText>Ensure the integrity of code flashed to the board.</DeviceInfoRowText>
                  <ButtonLightGrey>CHECKSUM</ButtonLightGrey>
                </DeviceInfoRow>

              </DeviceInfoCol>

            </DeviceInfo>
          </ModalContent>
        </Modal>

        <div
          style = {{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%"}}
        >
          <Content>
            {showDevices ?
                devices.map((device, i) => {
                  return (
                    <StatisticBox
                      key = {i}
                      deviceName = {device}
                      deviceID = {device.split(" ")[1]}
                      getDeviceDetails = {() => { console.log("Scanning device details"); getDeviceDetails(); }}
                    />
                  )
                })
            : (
              null
            )}
          </Content>

          <ProgressBar>
            <ProgressBarLogo />
          </ProgressBar>
        </div>

      </Container>
    </div>
  )
}