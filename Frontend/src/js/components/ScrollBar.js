import styled from "styled-components"
const ScrollBar = styled.div`
&::-webkit-scrollbar {
  width: 30px;
  border-radius: 13px;
  color: red;
  background-color: ${({ theme }) => theme.colours.blues.dark_blue};
  padding: 5px;
}
&::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colours.greys.grey1};
  border-radius: 13px;


}
`;

export default ScrollBar