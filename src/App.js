import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import About from './sections/About';
import Features from './sections/Features';
import Header from './sections/Header';
import Navbar from './sections/Navbar';
import data from "./data/db.json"
import Services from './sections/Services';
import Contact from './sections/Contact';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
  typography: {
    fontFamily: "Josefin Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Header />
        <About data={data.about} />
        <Features data={data.features} />
        <Services data={data.services} />
        <Contact/>
      </div>
    </ThemeProvider>
  );
}

export default App;
