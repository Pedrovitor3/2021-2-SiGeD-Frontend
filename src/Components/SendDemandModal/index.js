import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { forwardDemand } from '../../Services/Axios/demandsServices';
import colors from '../../Constants/colors';
import TinyButton from '../TinyButton';
import { ForwardDiv, ForwardIcon } from './Style';
import { useProfileUser } from '../../Context';

const SendDemandModal = ({
  sectorOption, demand, getDemandApi, sectorsResponse, changeState, setChangeState,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { startModal } = useProfileUser();

  const styles = {
    forwardDivText: {
      marginRight: '5px',
      marginBottom: '0px',
    },
    forwardIcon: {
      color: `${colors.secondary}`,
      backgroundColor: `${colors.navHeaders}`,
      marginRight: '3%',
    },
    modalFooter: {
      display: 'flex',
      justifyContent: 'center',
    },
    tinyButtonCancelar: {
      backgroundColor: colors.alertMessages,
      borderColor: colors.alertMessages,
    },
    tinyButtonConfirmar: {
      backgroundColor: colors.primary,
    },
  };

  const sectorOptionByID = sectorsResponse?.filter(
    (sectorByID) => sectorByID.name === sectorOption,
  );

  const forwardDemandFunct = () => {
    if (demand.sectorHistory[demand.sectorHistory.length - 1].sectorID
      === sectorOptionByID[0]?._id) {
      startModal('A demanda não pode ser encaminhada para o setor atual dela.');
    } else {
      handleShow();
    }
  };

  const submit = () => {
    forwardDemand(sectorOptionByID[0]?._id, demand._id, startModal);
    getDemandApi();
    setChangeState(!changeState);
  };

  return (
    <>
      <ForwardDiv onClick={forwardDemandFunct}>
        <p style={styles.forwardDivText}>
          Encaminhar
        </p>
        <ForwardIcon
          style={styles.forwardIcon}
        />
      </ForwardDiv>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alerta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Você tem certeza que deseja encaminhar essa demanda pra o setor
          {' '}
          {sectorOption}
          ?
        </Modal.Body>
        <Modal.Footer style={styles.modalFooter}>
          <TinyButton
            type="primary"
            title="Cancelar"
            click={handleClose}
            style={styles.tinyButtonCancelar}
          />
          <TinyButton
            type="primary"
            title="Confirmar"
            click={() => { submit(); handleClose(); }}
            style={styles.tinyButtonConfirmar}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SendDemandModal;
