import { makeStyles, AppBar, Container, MenuItem, Select, Toolbar, Typography, createTheme, ThemeProvider } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import logo from "../images/logo.png";

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    }
}))
const Header = () => {
    const classes = useStyles();
    const history = useHistory();

    const { currency, setCurrency } = CryptoState() || {};
    console.log(currency);
    const darkTheme = createTheme({
        palette: {
           primary: {
            main: "#fff",
           },
           type: "dark",
        },
    });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
        <Container>
            <Toolbar>
                <Typography 
                onClick={() => history.push(process.env.PUBLIC_URL + '/')} 
                className={classes.title}
                variant='h6'
                >
                    <img 
                    src={logo}
                    alt="logo"
                    height= "40"
                    width="auto" />
                    </Typography>
                <Select 
                variant='outlined'
                style={{
                    width: 100,
                    height: 40,
                    marginRight: 15,
                }}
                defaultValue={"INR"}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                >
                    <MenuItem value={"USD"}>USD</MenuItem>
                    <MenuItem value={"INR"}>INR</MenuItem>
                </Select>
            </Toolbar>
        </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header