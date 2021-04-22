import styled from 'styled-components';

export const Container = styled.div`
    height: 250px;
    margin: 0 330px;
    position: relative;
    background-color: ${(props) => props.theme.colors.darkBlue};
    text-align: center;
    >svg{
        width: 100%;
        height: 100%;
        position: relative;
    }
`;

export const TextDiv = styled.div`
    position: absolute;
    top: 50px;    
    left: 34%;
    >h1{    
        color: white;
    }
`;
export const GetStartedButton = styled.button`
    height: 45px;
    top: 100px;
    width: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 25px;
    padding: 10px;
    border: none;
    font-size: 18px;
    color: white;
    font-weight: ${(props) => props.theme.fonts.darkBold};
    :hover{
        opacity: 0.8
    }
`;

