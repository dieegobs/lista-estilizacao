import styled from 'styled-components';

export const Container = styled.div`
    background-color: blue;
    color: white;
    padding: 20px;


    span {
        font-weight: bold;
        color: #000;
    }

    .link {
        color: #FFF;
    }
`;

export const Botao = styled.button`
    font-size: ${props=> props.small ? '15px' : '30px'  };
    background-color: ${props => props.bg};
`;