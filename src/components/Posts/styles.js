import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  topButtonLeft: {
    margin: "0 0 20px",
  },
  topButtonRight: {
    margin: "0 10px 20px",
  }
}));