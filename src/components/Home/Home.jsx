import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import useStyles from "./styles";
import CustomPagination from "../CustomPagination/CustomPagination";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={4}>
            <div style={{'position': 'sticky', 'top': '10px'}}>
            <Form
              className={classes.form}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
            <Paper className={classes.pagination} elevation={6}>
              <CustomPagination />
            </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
