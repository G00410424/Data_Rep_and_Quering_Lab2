import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="create">Create</Nav.Link>
          <Nav.Link href="read">Read</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  
      <Header></Header>
      <h2>Hello World!</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Footer></Footer>
      <Routes>
        <Route path='/' element={<content></content>}></Route>
        <Route path='read' element={<Header></Header>}></Route>
        <Route path='create' element={<Footer></Footer>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
