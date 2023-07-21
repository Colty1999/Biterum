import { createTheme } from "@mui/material";
import { createContext } from "react";

export const MUItheme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    }
});

export const Context = createContext<{theme: string, setTheme:React.Dispatch<React.SetStateAction<string>> | Function}>({theme:"", setTheme:() => { }});