import React, {useState} from 'react';
import styled from 'styled-components';
import { ButtonDarkGrey, ButtonYellow } from '../../components/Buttons';
import { ProgressBar, ProgressBarLogo } from '../../components/ProgressBar';
import ScrollBar from '../../components/ScrollBar';

const ConnectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
  width: 100%;
  padding-right: 80px;
  font-size: 1.25rem;
  padding-bottom: 100px;
  justify-content: stretch;
  align-items: stretch;
`
const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 80px;
`;

const HeadingButtonContainer = styled.div`
  margin-left: auto;
`;

const ConnectionsList = styled(ScrollBar)`
  padding-right: 50px;
  overflow-y: scroll;
  margin-bottom: 50px;

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
        <ButtonYellow style={{ marginBottom: '1rem'}} >CONNECT</ButtonYellow>
        <ButtonDarkGrey>DISCONNECT</ButtonDarkGrey>
      </ConnectionCardColumn>
    </ConnectionCardContainer>
  );
};

export default function Connections() {
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
          <ButtonDarkGrey>CONNECT NEW DEVICE</ButtonDarkGrey>
        </HeadingButtonContainer>
      </HeadingContainer>
      <ConnectionsList>
        {connections.map((connection) => (
          <ConnectionCard key={connection.ipAddress} {...connection} />
        ))}
      </ConnectionsList>
      <ProgressBar style={{marginRight: "80px"}}>
        <ProgressBarLogo />
      </ProgressBar>
    </ConnectionsContainer>
  );
}