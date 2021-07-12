import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    padding: '10px 16px'
  },
  overlay2: {
    position: 'absolute',
    top: '15px',
    right: '0',
  },
  overlay3: {
    position: 'absolute',
    top: '15px',
    right: '40px',
  },
  grid: {
    display: 'flex',
  },
  details: {
    position: 'absolute',
    top: '45px',
    right: '20px',
  },
  tags: {
    fontWeight: 'bold' 
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 12px 8px 12px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.down("xs")]: {
    title: {
      fontSize: '1.6rem',
    },
    tags: {
      display: 'none',
    }
  },
}));