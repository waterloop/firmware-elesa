import React, { useState } from 'react';
import styled from 'styled-components';
import ScaleSVG from '@img/svg/icons/icon_operations_scale.svg';

const Box = styled.div`
    width: 350px;
    height: 261px;
    background-color: ${({ theme }) => theme.colours.blues.dark_blue};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.colours.white};
    font-size: 60px;
    border-radius: 5px;
    text-align: center;

        p{margin:0;}
    p:first-child{font-size: 34px;}
    @media (max-width: 1000px) {
        p:first-child{font-size: 25px;}
      }
`;

export default function StatisticBox({component}) {
    return (
        <Box>
            <p>{component.title}</p>
            <p>{component.number}</p>
            <ScaleSVG width="80%" viewBox="0 0 310 58"/>
        </Box>
    );
}