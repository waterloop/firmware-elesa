import React, { useState } from 'react';
import styled from 'styled-components';
import StatisticBox from './StatisticBox';
import StatusIconConnected from '../../../../../img/svg/icons/icon_status_bar_connected.svg';
import StatusIconDisconnected from '../../../../../img/svg/icons/icon_status_bar_disconnected.svg';
import ProgressBarLogo from '../../../../../img/svg/icons/icon_operations_progressbar.svg';;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 80px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  p {padding-left: 18px}
`;

const StatusBar = styled.div`
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
  margin-top: 50px;
  width: 800px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const State = styled.p`
  color: ${({ theme }) => theme.colours.white};
  font-size: 24px;
`;

const ProgressBar = styled.div`
  border-bottom: 8px solid ${({ theme }) => theme.colours.blues.dark_blue};
  width: 800px;
  height: 40px;
  display: flex;
  padding-bottom: 5px ;
  align-items: flex-end;
`;

const StatisticsSection = styled.div`
  margin: 50px 0 0 0;
  display:grid;
  grid-template-columns: 380px 380px;
  grid-row: auto auto;
  grid-column-gap: 180px;
  grid-row-gap: 62px;
`;

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