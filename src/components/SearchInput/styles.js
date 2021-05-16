import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  searchBox: {
    display: 'flex',
    justifyContent: 'center',
  
    '@media (min-width:600px)': {
      justifyContent: 'flex-end',
    }
  },
  searchInput: {
    width: '90%',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    margin: '20px 0',
    fontSize: '1.2rem',
    outline: 'none',
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '&:focus': {
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.44)',
    },
    '@media (min-width:600px)': {
      width: '100%',
      fontSize: '1.3rem',
    }
  }
}));

