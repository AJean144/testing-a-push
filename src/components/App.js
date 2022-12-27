import Container from './styles/Container';
import Header from './Header';
import Footer from './styles/Footer/Footer';
import Signup from './Signup/';
import { ThemeProvider } from 'styled-components';

const theme = {
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Signup />
      </Container>
      <Footer>
        <p>&copy; Thierry Valbrun Enterprises. All Rights Reserved</p>
      </Footer>
    </ThemeProvider>
  );
}

export default App;

