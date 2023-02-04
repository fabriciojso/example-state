import Part1 from "./Part1";
import Part2 from "./Part2";
import { Buttons, Container, Lists } from "./styles";

function App() {
  return (
    <Container>
      <Lists>
        <Part1 />
        <Part2 />
      </Lists>

      <Buttons>
        <button>Add Proteina +</button>
        <button>Add Fruta +</button>
      </Buttons>
    </Container>
  );
}

export default App;
