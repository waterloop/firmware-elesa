import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 460px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
`;

const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  justify-content: start;
  padding: 20px 30px;
  width: 400px;
  height: 90px;
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
`

export default function Sidebar() {
    return (
        <Column>
            <Option>Operations</Option>
            <Option>Connections</Option>
            <Option>Remtoe Flashing</Option>
        </Column>
    )
}