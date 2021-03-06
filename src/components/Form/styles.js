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
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  'fileInputIcon > input[type="file"]': {
    display: 'none',
  },
  fileInput: {
    width: '100%',
    margin: '20px auto',
    cursor: 'pointer',
    padding: '5px 10px',
  },
  fileInputText: {
    marginRight: '20px',
  },
  button: {
    margin: '0 20px',
  }
}));