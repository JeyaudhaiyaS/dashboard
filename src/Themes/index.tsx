import { ThemeProvider, createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#03C9D7",
        },
        secondary: {
            main: "#FB9678"
        }
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(''),
        h4: {
            fontSize: 24,
            fontWeight: 600
        },
        h5: {
            fontSize: 21,
            color: "#000",
            fontWeight: 700
        },
        subtitle1: {
            fontSize: 16,
            color: "#000",
            fontWeight: 600
        },
        subtitle2: {
            fontSize: 18,
            fontWeight: 600,
            color: '#000'
        },
        caption: {
            fontSize: 14,
            color: "#8D7E89"
        },
        body1: {
            fontSize: 14,
            color: "#000"
        },
        body2:{
            fontSize:12,
            color:"#fff"
        }
       
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
              },
            styleOverrides: {
               containedPrimary: {
                    backgroundColor: "#03C9D7",
                    '&:hover': {
                        backgroundColor: "#03C9D7",
                    }
                },
                containedSecondary: {
                    backgroundColor: "#FB9678",
                    '&:hover': {
                        backgroundColor: "#FB9678",
                    }
                }
            },
        }
    }});