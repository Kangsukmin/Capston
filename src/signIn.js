import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import LTimage from "./img/LT.png";
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const firebase = useFirebase();
  const history = useHistory();
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

  const signInWithEmail = () => {
    firebase.login({
            email: emailValue,
            password: passwordValue
        }).catch((error) => {
            alert(error.message);
            window.location.reload(false);
        }).then(() => {
            alert("Login Success");
            history.push("/main");
          });

  };

  const handleChange = ({ currentTarget: { name, value } }) => {
    if (name === "email") {
        setEmail(value);
    }
    else if (name === "password") {
        setPassword(value);
    }
  };

  const handleSubmit = () => {
      signInWithEmail();
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src={LTimage} width="150px"/>
        <Typography component="h1" variant="h5">
          Welcome, Living Together!
        </Typography>
        <form className={classes.form} onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={emailValue}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={passwordValue}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}