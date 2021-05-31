import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CustomInput from "./CustomInput";
import { signin, signup } from '../../actions/auth';

import useStyles from "./styles";
import Icon from "./icon";

const initialState = { firstName: '', lastName: '', password: '', confirmPassword: '' }

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  };

  const handleSwitchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleGoogleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }

  }

  const handleGoogleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again...")
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <CustomInput
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <CustomInput
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <CustomInput
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <CustomInput
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <CustomInput
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin 
            clientId="102014470382-chu87mifedvd7bh1ivuc1vhnnhahgmur.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button 
                className={classes.goggleButton} 
                color="primary" 
                fullWidth 
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled}
                startIcon={<Icon />} 
                variant="contained"
              >Sign In with Goggle</Button>
            )}
            onSuccess={handleGoogleSuccess}
            onFailure={handleGoogleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={handleSwitchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
