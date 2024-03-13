import React, { useState } from 'react';
import styled from 'styled-components';
import StatisticBox from './StatisticBox';
import StatusIconConnected from '@img/svg/icons/icon_status_bar_connected.svg';
import StatusIconDisconnected from '@img/svg/icons/icon_status_bar_disconnected.svg';
import ProgressBarLogo from '@img/svg/icons/icon_operations_progressbar.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 80px 0 80px;
  height: 100%;
  width: 100%;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  p {padding-left: 18px}
  background: linear-gradient(180deg, #232635 0%, #31325D 100%);
`;

const StatusBar = styled.div`
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
  margin-top: 50px;
  height: 80px;
  width: 700px;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    width: 95%;
  }
`;

const State = styled.div`
  width: 140px;
  text-align: center;
  color: ${({ theme }) => theme.colours.white};
  font-size: 24px;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

const ProgressBar = styled.div`
  width: 700px;
  height: 40px;
  display: flex;
  padding-bottom: 5px ;
  align-items: flex-end;
  border-bottom: 8px solid ${({ theme }) => theme.colours.blues.dark_blue};
`;

const StatisticsSection = styled.div`
  max-width: 1040px;
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

// APITODO: Set up an API endpoint/connection
// The data to be retrieved is the current state of Loop pod
// This data will be used to move the positioning of the loop image on the path
export default function Operations() {
  const [stages, setStages] = useState([
    {name: "Resting", on: false}, 
    {name: "LV Ready", on: false}, 
    {name: "HV Ready", on: false}, 
    {name: "Autopilot", on: false}, 
    {name: "Break", on: false}]);
  const [connectionStatus, setconnectionStatus] = useState({
    connected: 
    {text: "CONNECTED", logo: StatusIconConnected}, 
    disconnected:
    {text: "DISCONNECTED", logo: StatusIconDisconnected}
  });
  // APITODO: An API connection to establish the live values of the below features
  // The data to be displayed at this endpoint are the live values
  const [podStatistics, setPodStatistics] = useState([
    {title: "Battery Pack Voltage", number: 0}, 
    {title: "Motor Voltage", number: 0}, 
    {title: "IGBT Temperature", number: 0}, 
    {title: "Cell Temperature", number: 0}
  ]);

    return (
      <Container>
        <Nav>
          <connectionStatus.connected.logo />
          <p>{connectionStatus.connected.text}</p>
        </Nav>

        <StatusBar>
        {stages.map((s) => (
            <State key={s.name}>{s.name}</State>
          ))}
        </StatusBar>

        <ProgressBar>
          <ProgressBarLogo />
        </ProgressBar>

        <StatisticsSection>
          {podStatistics.map((c) => (
            <StatisticBox component={c} key={c.title} />
          ))}
        </StatisticsSection>
      </Container>
    )
}