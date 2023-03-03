import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import GenericRegisterScreen from '../../Components/GenericRegisterScreen';
import { validateSignUp } from '../../Utils/validations';
import { postUser } from '../../Services/Axios/userServices';
import UserForms from '../../Components/UserForms';
import { useProfileUser } from '../../Context';

const RegisterCargos = () => {
  const { user, startModal } = useProfileUser();
  const history = useHistory();
  const [inputRegisterUserName, setRegisterUserInputName] = useState('');
  const [inputRegisterUserEmail, setRegisterUserInputEmail] = useState('');
  const [inputRegisterUserRole, setRegisterUserInputRole] = useState('Novo Cargo');
  const [inputRegisterUserSector, setRegisterUserInputSector] = useState('');
  const [inputRegisterUserImage, setRegisterUserInputImage] = useState('');
  const [sectors, setSectors] = useState([]);
  const [englishRole, setEnglishRole] = useState('admin');
  const [baseImage, setBaseImage] = useState('');

  const submit = async () => {
    if (validateSignUp(inputRegisterUserEmail,
      inputRegisterUserName)) {
      const userSectorID = sectors?.find((sector) => sector.name === inputRegisterUserSector)._id;
      await postUser(inputRegisterUserName,
        inputRegisterUserEmail,
        englishRole,
        userSectorID,
        baseImage,
        startModal);
      return history.push({ pathname: '/usuarios', state: { newUser: 'new' } });
    }
    startModal("Nome deve ser completo, sem números e o email deve conter o formato 'nome@email.com'.");
    return undefined;
  };

  useEffect(() => {
    if (inputRegisterUserRole === 'Administrador(a)') {
      setEnglishRole('admin');
    } else if (inputRegisterUserRole === 'Recepcionista') {
      setEnglishRole('receptionist');
    } else if (inputRegisterUserRole === 'Profissional') {
      setEnglishRole('professional');
    }
  }, [inputRegisterUserRole]);

  const cancel = () => {
    setRegisterUserInputName('');
    setRegisterUserInputEmail('');
    setRegisterUserInputRole('');
    setRegisterUserInputSector('');
    setBaseImage('');
  };

  if (!localStorage.getItem('@App:token')) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {user ? (
        <>
          {user.role === 'admin'
            ? (
              <GenericRegisterScreen
                sidebarList={[inputRegisterUserName,
                  inputRegisterUserEmail,
                  inputRegisterUserRole,
                  inputRegisterUserSector]}
                cancel={cancel}
                submit={submit}
                buttonTitle="Cadastrar"
                inputImage={inputRegisterUserImage}
                setInputImage={setRegisterUserInputImage}
                baseImage={baseImage}
                setBaseImage={setBaseImage}
              >
                <UserForms
                  setInputName={setRegisterUserInputName}
                  inputName={inputRegisterUserName}
                  setInputEmail={setRegisterUserInputEmail}
                  inputEmail={inputRegisterUserEmail}
                  setInputRole={setRegisterUserInputRole}
                  inputRole={inputRegisterUserRole}
                  setInputSector={setRegisterUserInputSector}
                  sectors={sectors}
                  setSectors={setSectors}
                  inputSector={inputRegisterUserSector}
                  baseImage={baseImage}
                  setBaseImage={setBaseImage}
                />
              </GenericRegisterScreen>
            )
            : <Redirect to="/nao-autorizado" />}
        </>
      )
        : <h1>Carregando...</h1>}
    </>
  );
};

export default RegisterCargos;
