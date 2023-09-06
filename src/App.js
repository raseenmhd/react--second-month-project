import { styled } from 'styled-components';
import './App.css';
import NavBar from './components/screens/includes/NavBar';
import RightBar from './components/screens/includes/RightBar';
function App() {
  return (
    <>
    <Container>
        <NavBar/>
        <RightBar/>
    </Container>
    </>
  );
}

export default App;
const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;