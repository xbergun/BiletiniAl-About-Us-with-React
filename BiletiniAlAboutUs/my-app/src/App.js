import DashBoard from './Component/DashBoard';
import './App.css';
import Navi from './Component/Navi';
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">

      <Navi/>
      <Container>
      <DashBoard/>
      </Container>
    </div>
  );
}

export default App;
