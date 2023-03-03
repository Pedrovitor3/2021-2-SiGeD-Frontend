import styled from 'styled-components';

export const Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: auto;
    @media(max-width: 750px){
        flex-direction: column;
    }
`;

export const CardsContainer = styled.div`
    margin-top: 15vh;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media(max-width: 750px){
        width: 100%;
        height: min-content;
    }
    overflow: auto;

    ::-webkit-scrollbar {
        width: 10px;
    }
      
    ::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
       
    ::-webkit-scrollbar-thumb {
        background: #888; 
    }
      
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 5%;
    padding-bottom: 5%;
    @media(max-width: 750px){
        width: 90%;
        display: none;
    }
`;

export const MobileButtonDiv = styled.div`
    display: none;
    @media(max-width: 750px){
        width: 90%;
        margin: 5%;
        display: flex;
    }
`;

export const TimelineDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    @media(max-width: 750px){
        display: none;
    }
`;

export const MobileTimeline = styled.div`
    display: none;
    @media(max-width: 750px){
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-bottom: 5%;
    }
`;

export const ForwardedDemandDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media(max-width: 750px){
        flex-direction: column;
    }
`;
