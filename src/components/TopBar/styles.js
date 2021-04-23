import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 70px;
    background-color: "#FFF";
    justify-content: space-between;
    @media(max-width: 375px){
        width: 100vw;
        padding-left: 0;
    }
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
    @media(max-width: 375px){
        padding-left: 0;
        >h3{
            display: none;
        }
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
    @media(max-width: 375px){

    }
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