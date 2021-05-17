import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
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
    position: 'absolute',
    top: '15px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '15px',
    right: '50px',
    color: 'white',
  },
  overlay3: {
    position: 'absolute',
    top: '15px',
    right: '10px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '20px',
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
});