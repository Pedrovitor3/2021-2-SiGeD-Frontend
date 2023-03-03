import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 0 0 0 1px;
    align-content: center;
    justify-content: center;
    @media(max-width: 750px){
        width: 100%;
        height: 40%;
        padding: 2% 0 0 0;
        margin: 4% 0 0 0;
    }

`;

export const styles = {
  tableContent: {
    color: colors.text,
    textDecorationLine: 'none',
    marginRight: '1.5vw',
  },
};
