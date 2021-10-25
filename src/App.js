import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import About from "./sections/About";
import Features from "./sections/Features";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import data from "./data/db.json";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Quote from "./sections/Quote";

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
        <Quote />
        <Features data={data.features} />
        <About data={data.about} />
        <Projects data={data.projects} />
        <Services data={data.services} />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
