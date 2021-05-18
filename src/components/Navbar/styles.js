import { makeStyles } from '@material-ui/core/styles';
import { amber, blueGrey, deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  },
  heading: {
    color: '#3A4454',
    fontFamily: "'Pangolin', cursive",
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  grey: {
    color: theme.palette.getContrastText(blueGrey[300]),
    backgroundColor: blueGrey[300],
  },
  amber: {
    color: theme.palette.getContrastText(amber[500]),
    backgroundColor: amber[300],
  },
}));