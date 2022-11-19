import styled from 'styled-components';

const Button = styled.button`
  padding: 0px 15px 0px 15px;
  width: ${(props) => props.width ? props.width : '320px'};
  height: ${(props) => props.height ? props.height : '40px'};
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${(props) => props.fontSize ? props.fontSize : '20px'};
  margin: 2px 2px;
  cursor: pointer;
  text-transform: uppercase;
`

const ButtonYellow = styled(Button)`
background-color: ${({ theme }) => theme.colours.yellows.primary_yellow};
color: ${({ theme }) => theme.colours.black};
border: 4px solid ${({ theme }) => theme.colours.yellows.primary_yellow};
`

const ButtonDarkGrey = styled(Button)`
background-color: ${({ theme }) => theme.colours.greys.grey1};
color: ${({ theme }) => theme.colours.white};
border: 4px solid ${({ theme }) => theme.colours.greys.grey1};
`

const ButtonLightGrey = styled(Button)`
background-color: ${({ theme }) => theme.colours.greys.grey2};
color: ${({ theme }) => theme.colours.black};
border: 4px solid ${({ theme }) => theme.colours.greys.grey2};
`

export {
  ButtonYellow as ButtonYellow,
  ButtonDarkGrey as ButtonDarkGrey,
  ButtonLightGrey as ButtonLightGrey,
}