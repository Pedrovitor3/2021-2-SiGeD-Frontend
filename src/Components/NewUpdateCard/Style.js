import styled from 'styled-components';
import { TextareaAutosize } from '@material-ui/core';
import colors from '../../Constants/colors';

export const ModalContainer = styled.div`
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 4px;
`;

export const ButtonsContainer = styled.div`
    margin-top: '10px'; 
    display: flex;
    width: '100%';
    button+button {
        margin-right: 0;
    }
`;
export const Card = styled.div`
    width: 100%;
    height: max-content;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    padding: 2%;
    margin-bottom: 2%;
    justify-content: center;
    @media(max-width: 750px){
        width: 100%;
    }
`;

export const TopSide = styled.div`
    height: max-content;
    display: flex;
    justify-content: space-between;
`;

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 2%;
    width: 100%;
    @media(max-width: 750px){
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const TextareaComp = styled(TextareaAutosize)`
    width: 100%;
    border-radius: 15px;
    border: 2px solid black;
    resize: none;
    outline: none;
    text-indent: 5px;
`;

export const CheckboxContainer = styled.div`
    width: '100%';
    height: max-content;
    display: flex;

`;

export const CheckboxDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const ButtomDiv = styled.div`
    width: 100%;
    height: max-height;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;
