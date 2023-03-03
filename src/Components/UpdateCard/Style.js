import styled from 'styled-components';
import colors from '../../Constants/colors';

export const Card = styled.div`
    width: 90%;
    height: max-content;
    background-color: ${colors.secondary};
    border-radius: 15px;
    border: 1.5px solid black;
    padding: 2%;
    margin-bottom: 2%;
    justify-content: center;
    @media(max-width: 750px){
        width: 100%;
        padding: 0;
    }
`;

export const PDFViwerContainer = styled.div`
    z-index: 100;
    width: 100%;
    height: 90%;
    display: flex;
    position: fixed;
    top: 10%;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media(max-width: 750px){
        width: 100%;
        padding: 0;
        z-index: 100;
    }
`;

export const PDFViwer = styled.iframe`
    height: 90%;
    width: 90%;
`;

export const PDFViwerCloseButton = styled.div`
  float: right;
  font-size: 100%;
  display: flex;
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 10px;
  margin-bottom: 10px;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const TopSide = styled.div`
    height: max-content;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Img = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin: 0 0 0 1px;
    align-content: center;
    justify-content: center;
    @media(max-width: 750px){
        width: 40px;
        height: 40px;
    }

`;

export const DemandName = styled.div`
    height: max-content;
    margin-left: 5%;
    text-align: left;
    font-size: 100%;
    font-weight: bold;
    margin-top: 4%;
    align-text: left;
    align-content: left;
    @media(max-width: 750px){
        font-size: 100%;
        width: 80%;
        white-space: normal;

    }
`;

export const IconsContainer = styled.div`
  float: right;
  width: max-content;
  display: flex;
  justify-content: space-between;
  @media(max-width: 750px){
    margin-right: 2%;
    margin-top: 2%;
}
`;

export const HighPriorityIcon = styled.div`
    float: left;
    font-size: 100%;
    width: 20%;
    margin-left: 5%;
    margin-right: 5%;
    @media(max-width: 750px){
    font-size: 100%;
    }
`;

export const EditIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 20%;
  margin-left: 5%;
  margin-right: 5%;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const LockIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 20%;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const TrashIcon = styled.div`
  float: right;
  font-size: 100%;
  width: 20%;
  cursor: pointer;
  @media(max-width: 750px){
    font-size: 100%;
}
`;

export const DemandDescription = styled.div`
    font-size: 20px;
    width: 70%;
    text-align: left;
    margin-top: 2%;
    padding-left: 8%;
    padding-right: 5%;
    word-wrap: break-word;
    @media(max-width: 750px){
        font-size: 18px;
        width:100%;
    }
`;

export const BottomSide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    @media(max-width: 750px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`;

export const CreatedAt = styled.div`
    display: flex;
    text-align: right;
    font-size: 20px;
    height: min-content;
    @media(max-width: 750px){
        font-size: 18px;
        margin-right: 2%;
    }
`;
