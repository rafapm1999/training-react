import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: AliceBlue;
  margin-bottom: 1rem;
`
const Wrapper = styled.section`
font-size: 1.5em;
padding: 4em;
background: DarkOliveGreen;
text-align: center;
`

function App() {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <p>Lorem Ipsum dolor si tamet consectetur adipisicing elit.</p>
    </Wrapper>
  );
}

export default App;
