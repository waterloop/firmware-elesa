import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonYellow } from '@components/Buttons'

const Box = styled.div`
    width: 400px;
    background-color: ${({ theme }) => theme.colours.blues.dark_blue};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ theme }) => theme.colours.white};
    border-radius: 5px;
    font-family: 'Roboto';
    font-style: normal;
    margin-right: 20px;
    margin-bottom: 25px
`;

const DeviceName = styled.div`
    margin-top: 40px;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
`

export default function StatisticBox(props) {
    return (
        <Box>
            <DeviceName>{props.deviceName}</DeviceName>
            <p><span>Device ID </span>{props.deviceID}</p>
            <ButtonYellow height='56px' onClick={props.getDeviceDetails} style = {{"marginBottom": "45px"}}>
                View Device Details
            </ButtonYellow>
        </Box>
    );
}