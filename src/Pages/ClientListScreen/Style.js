import styled from 'styled-components';
import colors from '../../Constants/colors';

export const TableHeader = styled.div`
  background-color: ${colors.navHeaders};
  color: ${colors.secondary};
  height: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media(max-width: 750px){
    visibility: hidden;
  }
`;

export const P = styled.div`
  color: ${colors.secondary};
  font-size: 2vh;

  @media(max-width: 750px){
    font-size: 1.6vh;
  }
`;

export const Bar = styled.div`
  width: 0.05%;
  height: 35%;
  border-radius: 3px;
  background-color: ${colors.secondary};
`;

export const TableTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props) => `${props.width}%`}
`;

export const Dropdown = styled.div`
width: 200px;
height: 50px;
border-radius: 15px;
margin: 0 5px;

@media(max-width: 750px){
  width: 60%;
  height: 50px;
  float: none;
  justify-self: center;
  margin-left: 5%;
}
`;

export const styles = {
  headerStyle: {
    fontSize: '1.5rem',
    font: 'Montserrat',
  },
  dropdownComponentStyle: {
    display: 'flex',
    color: `${colors.text}`,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderRadius: '8px',
    border: '1px solid black',
    justifyContent: 'center',
  },
};
