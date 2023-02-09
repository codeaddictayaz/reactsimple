import { Box, createTheme, Stack, styled, ThemeProvider } from "@mui/material";
// import Test from "./components/feed/Test";
import Feed from "./components/feed/Feed";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rightbar/Rightbar";
import Sidebar from "./components/sidebar/Sidebar";
import Add from "./components/Add"
import { useState } from "react";
function App() {
  const [mode,setMode]=useState("dark")
  const darkTheme =createTheme({
    palette:{
mode:mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>

    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar mode={mode} setmode={setMode}/>
        <Feed />
        <Rightbar />
      </Stack>
     <Add/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
