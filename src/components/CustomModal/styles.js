import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  modalImage: {
    width: '85%',
    display: 'block',
    margin: '0 auto',
    boxShadow: '0 10px 30px 0 rgba(127, 127, 127, 0.3)',
  },
  modalButton: {
    position: 'absolute',
    top: '30px',
    right: '30px',
  }
}));