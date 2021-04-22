import GlobalStyle, { theme } from './globalStyles'
import { ThemeProvider } from 'styled-components'
import TopBar from './components/TopBar'
import MainContent from './components/MainContent'
import LinkContent from './components/LinkContent'
import BottomContent from './components/BottomContent'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TopBar />
        <MainContent />
        <LinkContent />
        <BottomContent />
        <Footer />
      </ThemeProvider>

    </div>
  );
}

export default App;
