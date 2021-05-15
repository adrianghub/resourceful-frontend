import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import LOGO_IMG from '../src/images/logo.png'
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={LOGO_IMG} alt="logo" height="120"/>
        <Typography className={classes.heading} variant="h2" align="center">Snippet</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
