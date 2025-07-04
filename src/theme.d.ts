import "@mui/joy/styles";


declare module '@mui/joy/styles' {
    interface CssVarsThemeOptions {
        maxPostWidth: number;
    }
    interface Theme {
        maxPostWidth: number;
    }
}