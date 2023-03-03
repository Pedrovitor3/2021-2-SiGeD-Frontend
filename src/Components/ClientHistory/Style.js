import styled from 'styled-components';
import colors from '../../Constants/colors';

export const TimeDiv = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: row;

    @media(max-width: 750px){

    }
`;
export const styles = {
  margin: {
    marginLeft: '8%',
  },
  display: {
    display: 'none',
  },
  width: {
    width: '100%',
  },
  borderStyle: {
    border: '0',
  },
};

export const UpdateDiv = styled.div`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    font-weight: bold;

    @media(max-width: 750px){

    }
`;

export const P = styled.p`
    color: 'red';
`;

export const Pblue = styled.p`
    color: '#5289B5';
`;

export const UserName = styled.p`
    font-weight: bold;
    color: ${colors.primary};
    cursor: pointer;
    width: max-content;
    margin-left: 5px;

    @media(max-width: 750px){

    }
`;
