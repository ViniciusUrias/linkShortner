import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 330px;
    height: 1200px;
    background-color: ${(props) => props.theme.colors.grayBg};
 `;

export const LSDiv = styled.div`
    position: absolute;
    margin: 0 12.5%;
    display: flex;
    width: 75%;
    height: 170px;
    top: -85px;
    background-color: ${(props) => props.theme.colors.primary2};
    border-radius: 10px;
    align-items: center;
    >p{
        color:${(props) => props.theme.colors.secondary};
        display: block;
        text-align: start;
        position: absolute;
        bottom: 20px;
        left: 10%;
    }
    >svg{
      
        width: 100%;
        z-index: 0;
        position: absolute;
        border-radius: 20px;
        }
`;

export const LSInput = styled.input`
    display: flex;
    width: 74%;
    margin-right: 50px;
    height: 30%;
    background-color: white;
    margin-left: 30px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.secondary};
    border-color: ${(props) => props.theme.colors.secondary};
    z-index: 9;
    color: ${(props) => props.theme.colors.secondary};
    font-weight:${(props) => props.theme.fonts.darkBold};
    font-size: 18px;
    padding-left: 20px;
    box-shadow: -3px -3px  1px   ${(props) => props.theme.colors.secondary}; ;
    :focus{
        outline: none;
    };
    ::placeholder{
        color: ${(props) => props.theme.colors.secondary};
        font-size: 18px;
        
    }
    
`;

export const LSButton = styled.button`
    width: 26%;
    height: 60px;
    margin-right: 50px;
    background-color: ${(props) => props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    z-index: 999;
    font-size: 18px;
    color: white;
    font-weight: ${(props) => props.theme.fonts.darkBold};
    :hover{
        opacity: 0.9
    }
    
`;

export const LinkList = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 10%;
    align-content: center;
    justify-content: center;
    margin: 20% 12.5%;
    
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    margin-top: 20px;
    >h4{
        padding-left: 20px;
        flex: 1;
        >a{
            color: unset;
            text-decoration: none;
        }
    }

    >p{
        margin-right: 20px;
        color: ${(props) => props.theme.colors.primary};
        font-size: 20px;
        font-weight: ${(props) => props.theme.fonts.bold};
        
        >a{
            color: unset;
            text-decoration: none;  

        }
    }
    


`;

export const CopyButton = styled.button`
    width: 12%;
    height: 40px;
    background-color: ${(props) => props.theme.colors.primary};
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    margin-right: 10px;
    font-size: 18px;
    color: white;
    font-weight: ${(props) => props.theme.fonts.darkBold};
    :hover{
        opacity: 0.8
    }
`;

export const AdvancedS = styled.div`
    align-self: center;
    text-align: center;
    width: 670px;
    >h1{
        font-weight: ${(props) => props.theme.fonts.darkBold};
    }
    >p{
        color: ${(props) => props.theme.colors.gray};
        font-size: 20px;
        font-weight: ${(props) => props.theme.fonts.bold}
    }
`;

export const Cards = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    height: 290px;
    margin-top: 60px;
    align-self: center;
    position: relative;
    >:nth-child(3){
        margin-top: 40px;
    }
    >:nth-child(5){
        margin-top: 70px;
    }
    
`;

export const Line = styled.div`
    width: 20px;
    height: 6px;
    background-color: ${(props) => props.theme.colors.primary};
    align-self: center;
    z-index:1;
    
`;

export const SvgDiv = styled.div`
    background-color: ${(props) => props.theme.colors.darkBlue};
    width: 80px;
    height: 80px;
    position: relative;
    top: -40px;
    border-radius: 50px;    
    margin-left: 20px;
    align-items: center;
    justify-items: center;
   
    >svg{
    margin: 20px 20px        
    } 
`;

export const Card = styled.div`
    background-color: white;
    width: 32%;
    height: 90%;
    border-radius: 4px;
    align-content: center;
    justify-content: center;
    z-index: 999;
   
    >h1{
        font-size: 18px;
        text-align: center;
        font-weight: ${(props) => props.theme.fonts.darkBold};

    }
    >p{
        color:${(props) => props.theme.colors.gray};
        text-align: start;
        padding:  0px 20px;

    }

`;





