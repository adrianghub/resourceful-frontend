import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  heading: {
    color: '#3A4454',
    fontFamily: "'Pangolin', cursive",
  },
  image: {
    marginLeft: '15px',
  },
}));