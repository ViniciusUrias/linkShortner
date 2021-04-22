import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 70px;
    background-color: "#FFF";
    border: 1px solid red;
    justify-content: space-between;
`;

export const LeftContent = styled.div`
    display:flex;
    align-items:center;
    padding-left: 510px;
    >h1{
        padding-right: 10px;
    }
    >h3{
        color: ${(props) => props.theme.colors.darkGray};
        font-weight: ${(props) => props.theme.fonts.darkBold};
        font-size: ${(props) => props.theme.fonts.size};
        padding: 20px;
    }
`;

export const MiddleContent = styled.div`
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    
`;

export const RightContent = styled.div`
    display: flex;
    margin-right: 500px;
    align-items: center;
`;

export const LoginButton = styled.button`
    outline: none;
    color: ${(props) => props.theme.colors.darkGray};
    background-color: white;
    border: none;
    text-align: center;
    text-decoration: none;
    font-weight: ${(props) => props.theme.fonts.darkBold};
    padding-right: 2em;
    font-size: 1em;

    
`;

export const RegisterButton = styled.button`
    outline: none;
    color: #FFF;
    background-color: ${(props) => props.theme.colors.primary};
    width: 7em;
    height: 3em;
    border: none;
    border-radius: 20px;
    text-align: center;
    text-decoration: none;
    font-weight: ${(props) => props.theme.fonts.darkBold};
    :hover{
        opacity: 0.8
    }

`;