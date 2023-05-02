import styled from "styled-components";

//Damos estilo al h1, el cual va a llamarse Title
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: AliceBlue;
  margin-bottom: 1rem;
`;

//De esta forma decimos que herede los estilos de Title, y le añadimos color especifico para Paragraph
const Paragraph = styled(Title)`
color: YellowGreen;
`;
//En attrs indicamos atributos escritos en forma de objeto
//Background recibe el color de forma dinamica, si darkTheme es true pone DarkSlateGrey, si es false entonces pone DarkOliveGreen
//& hace referencia al elemento, en este caso secction, (section:hover h1{}), pero de esta forma queda más abreviado.
const Wrapper = styled.section.attrs(props => ({
  id: "headers",
  size: props.size || "1.5em",
}))`
font-size: ${props=>props.size};
padding: 4em;
background: ${(props) => 
  props.darkTheme ? "DarkSlateGrey" : "DarkOliveGreen"};
text-align: center;
&:hover h1{
  color: SkyBlue;
}
h1{
  font-size: 1.5em;
  text-align: center;
  color: AliceBlue;
  margin-bottom: 1rem;
}
p {
  color: YellowGreen;
}
`;



function App() {
  return (
    <Wrapper darkTheme size="1.7em">
      <Title>Hello World!</Title>
      <p>Lorem Ipsum dolor si tamet consectetur adipisicing elit.</p>
    </Wrapper>
  );
}

export default App;
