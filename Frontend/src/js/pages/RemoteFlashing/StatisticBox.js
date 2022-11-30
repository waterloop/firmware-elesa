import React, { useState } from 'react';
import styled from 'styled-components';
import ScaleSVG from '../../../../../img/svg/icons/icon_operations_scale.svg';

const Box = styled.div`
    width: 400px;
    height: 267px;
    background-color: ${({ theme }) => theme.colours.blues.dark_blue};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.colours.white};
    border-radius: 5px;
    font-family: 'Roboto';
    font-style: normal;

    h4 {
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
    }

    span {
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
    }

    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }

`;

export default function StatisticBox(props) {
    return (
        <Box>
            <p>{props.deviceName}</p>
            <p><span>Device ID </span>{props.deviceID}</p>
            <ButtonYellow height='56px' onClick={scanForDevices}>
                View Device Details
            </ButtonYellow>
        </Box>
    );
}