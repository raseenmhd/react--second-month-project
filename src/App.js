import './App.css';
import { styled } from 'styled-components';
import NavBar from './components/screens/includes/NavBar';
import RightBar from './components/screens/includes/RightBar';
import Summary from './components/screens/Summary';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Products from './components/screens/Products';
import Hotselling from './components/screens/Hotselling';
import ManageOrder from './components/screens/ManageOrder';
import Payments from './components/screens/Payments';
import Settings from './components/screens/Settings';
function App() {
  return (
    <>
    <Container>
      <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Summary />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/hotselling" element={<Hotselling />}/>
        <Route path="/ManageOrder" element={<ManageOrder/>}/>
        <Route path="/Payments" element={<Payments/>}/>
        <Route path="/Settings" element={<Settings/>}/>
      </Routes>
        
        <RightBar/>
      </Router> 
    </Container>
    </>
  );
}

export default App;
const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;