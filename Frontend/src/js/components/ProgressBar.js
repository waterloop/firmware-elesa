import styled from 'styled-components';


const ProgressBar = styled.div`
  border-bottom: 8px solid ${({ theme }) => theme.colours.blues.dark_blue};
  width: 800px;
  height: 40px;
  display: flex;
  padding-bottom: 5px ;
  align-items: flex-end;
`;


import ProgressBarLogo from '../../../../img/svg/icons/icon_operations_progressbar.svg';

export { 
  ProgressBarLogo,
  ProgressBar,
}