import * as React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import {S} from 'react-router'
import "index.css";
import Home from "pages/Home/home";
import Header from "components/Header/header";
import Footer from "components/Footer/footer";
import OurTeam from "pages/OurTeam/our_team";
import Article from "pages/article/article";
import Contact from "pages/contact";
export default function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: "#FCE61D",
      },
      secondary: {
        main: "#111111",
      },
      text: {
        main: "rgba(255, 255, 255, 0.7)",
      },
    },
  });
  return (
    <Box>
      <ThemeProvider {...{ theme }}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/our_team" component={OurTeam} />
            <Route path="/article" component={Article} />
            <Route path="/" exact component={Home}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
