import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    position: 'static',
  },
  [theme.breakpoints.up('md')]: {
    paper: {
      position: 'sticky',
      top: '20px',
    }
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '100%',
    margin: '20px auto',
  },
  button: {
    margin: '0 20px',
  },
}));