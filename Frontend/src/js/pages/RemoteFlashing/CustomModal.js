import Modal from 'react-modal';
import { Oval } from 'react-loader-spinner'
import ExitIconWhite from '../../../../../img/svg/exit_white.svg';

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  right: 20px;
  top: 20px;
  position: absolute;
`;

const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalTitle = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  line-height: 56px;
  color: ${({ theme }) => theme.colours.white};
`

const StatisticsSection = styled.div`
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

export default function CustomModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onAfterOpen={props.onAfterOpen}
      onRequestClose={props.onRequestClose}
      style={props.style}
      contentLabel="Example Modal"
    >
      <ModalContent>
        <ModalHeader>
          <button onClick={props.onCancel} style={{backgroundColor:"transparent", border: "none", cursor: "pointer"}}>
            <ExitIconWhite/>
          </button>
        </ModalHeader>
        <ModalBody>
          <ModalTitle>{props.title}</ModalTitle>
          <Oval
            height={104}
            width={104}
            color="#ffffff"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#91939a"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
