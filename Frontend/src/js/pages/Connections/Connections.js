import React, {useState} from 'react';
import styled from 'styled-components';
import { ButtonDarkGrey, ButtonLightGrey, ButtonYellow } from '../../components/Buttons';
import { ProgressBar, ProgressBarLogo } from '../../components/ProgressBar';
import ScrollBar from '../../components/ScrollBar';
import Modal from 'styled-react-modal'
import ExitIcon from '@img/svg/exit.svg';

const ConnectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  width: 90%;
  font-size: 1.25rem;
  padding-bottom: 100px;
  align-items: stretch;
  overflow: hidden;
`
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 80px;
  width: 75%;
`;

const HeadingButtonContainer = styled.div`
  margin-left: auto;
`;

const ConnectionsList = styled(ScrollBar)`
  padding-right: 50px;
  overflow-y: scroll;
  margin-bottom: 50px;
  max-height: 85%;
  max-width: 65vw;
`

const ConnectionCardColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ConnectionCardContainer = styled.div`
  padding: 2rem 4rem;
  display: flex;
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
  border-radius: 5px;
  margin-bottom: 1rem;
  justify-content: space-between;
`

const ConnectionModal = Modal.styled`
  font-family: ${({ theme }) => theme.font};
  color: ${({ theme }) => theme.colours.white};
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
  border-radius: 5px;
  padding: 25px 10px 50px 50px;
  display: flex;
  align-items: start;
`;

const ConnectionModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const ConnectionModalInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: center;
  margin-right: 125px;
  p {
    margin-right: 1rem;
  }
`
const ConnectionCard = ({ connectionName, ipAddress}) => {
  return (
    <ConnectionCardContainer>
      <ConnectionCardColumn>
        <h2 style={{ fontSize: '2rem', margin: '0px', marginBottom: '1rem' }}>{connectionName}</h2>
        <div>
          <p style={{ fontWeight: 'bold', margin: '0px', marginBottom: '0.5rem' }}>IP Address</p>
          <p style={{ margin: '0px' }}>{ipAddress}</p>
        </div>
      </ConnectionCardColumn>
      <ConnectionCardColumn>
        <ButtonYellow style={{ marginBottom: '1rem'}} fontSize={'1.1rem'} width="294px">CONNECT</ButtonYellow>
        <ButtonDarkGrey fontSize={'1.1rem'} width="294px">DISCONNECT</ButtonDarkGrey>
      </ConnectionCardColumn>
    </ConnectionCardContainer>
  );
};

export default function Connections() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!modalIsOpen);
  }

  const [connections, setConnections] = useState([
    { connectionName: "Test1", ipAddress: "123.456.678"},
    { connectionName: "Test2", ipAddress: "123.456.673"},
    { connectionName: "Test1", ipAddress: "123.456.671"},
    { connectionName: "Test2", ipAddress: "123.456.672"},
    { connectionName: "Test1", ipAddress: "123.456.671"},
    { connectionName: "Test2", ipAddress: "123.456.672"},
    { connectionName: "Test1", ipAddress: "123.456.61"},
    { connectionName: "Test2", ipAddress: "123.456.621"}]);

  return (
    <ConnectionsContainer>
      <HeadingContainer>
        <h1>Connections</h1>
        <HeadingButtonContainer>
          <ButtonDarkGrey width="auto" onClick={toggleModal}>CONNECT NEW DEVICE</ButtonDarkGrey>
        </HeadingButtonContainer>
      </HeadingContainer>
      <ConnectionsList>
        {connections.map((connection) => (
          <ConnectionCard key={connection.ipAddress} {...connection} />
        ))}
      </ConnectionsList>
      <ProgressBar style={{marginRight: "80px", width: "64vw"}}>
        <ProgressBarLogo />
      </ProgressBar>


      <ConnectionModal
        isOpen={modalIsOpen} 
        onBackgroundClick={toggleModal}
      >
        <ConnectionModalContainer>
          <div style={{display: "flex", alignItems: "center", marginBottom: "1.5rem"}}>
            <h2 style={{ margin: "0px" , fontSize: "2rem"}}>Connect New Device</h2>
            <div onClick={toggleModal} style={{marginLeft: "50px", marginTop: "0px", width: "75px", height: "75px", backgroundColor: "transparent" }}>
              <ExitIcon></ExitIcon>
            </div>
          </div>
          <form>
            <ConnectionModalInputGroup>
              <p>
                IP Address
              </p>
              <input></input>
            </ConnectionModalInputGroup>
            <ConnectionModalInputGroup>
              <p>
                Port Number
              </p>
              <input></input>
            </ConnectionModalInputGroup>
          </form>
          <ButtonLightGrey width="auto">CONNECT</ButtonLightGrey>
        </ConnectionModalContainer>
      </ConnectionModal>
    </ConnectionsContainer>
  );
}