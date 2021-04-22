import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    height: 250px;
    background-color: ${(props) => props.theme.colors.darkViolet};
    justify-content: space-between;
`;


export const LeftContent = styled.div`
    display: flex;
    color: white;
    margin: 30px;
    width: 33%;
    justify-content: center;
    
`;
export const MiddleContent = styled.div`
    padding-top: 15px;
    display: flex;
    width: auto;
    >ul>h1{
        color: white;
        font-size: 28px;
    }
    >ul>li{
        color: ${(props) => props.theme.colors.gray};
        list-style: none;
        line-height: 35px;
        
    }

`;
export const RightContent = styled.div`
    width:33%;
    padding: 30px;
    margin: 30px;
    justify-content: center;
    text-align: center;
    >svg{
        margin:     0px 10px;
        padding: 5px;
        :hover{
            color: ${(props) => props.theme.colors.primary}
        }
        
    }
`;
