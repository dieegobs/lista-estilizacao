import styled from 'styled-components';

const Container = styled.div`
    background-color: blue;
    color: white;

`;

const Botao = styled.button`
    font-size:40px;
`;

const App = () => {
    return (
        <Container >
           Texto do component
           <Botao>Clique Aqui</Botao>  
        </Container>
    )
}

export default App;

