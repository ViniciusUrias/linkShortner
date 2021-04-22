import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    margin: 0 330px;
    height: 650px;
    justify-content: space-between;
    overflow-x: hidden;
    overflow-y: hidden;
    
`;
export const Svg = styled.div`
    position: relative;
    top: 30px;
    right: -100px;
    
`;

export const SpaceContent = styled.div`
    flex: 1;
`;
export const Title = styled.div`
    width: 400px;
    height: 400px;
    margin: 5em 10em;
    position: absolute;
    padding-left: 20px;
    >h1{
        font-weight: ${(props) => props.theme.fonts.darkBold};
        font-size: 3em;
        line-height: 1em;
    };
    >p{
        font-weight: ${(props) => props.theme.fonts.bold};
        color: ${(props) => props.theme.colors.gray};
        margin-top: -30px;
        
    }
`;
export const GetStartedButton = styled.button`
    outline: none;
    color: #FFF;
    background-color: ${(props) => props.theme.colors.primary};
    width: 12em;
    height: 3em;
    border: none;
    border-radius: 100px;
    text-align: center;
    text-decoration: none;
    font-weight: ${(props) => props.theme.fonts.darkBold};
    font-size: 1em;
    margin-top: 1em;
    :hover{
        opacity: 0.8
    }
`;