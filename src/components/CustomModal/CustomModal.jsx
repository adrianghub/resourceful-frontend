import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const CustomModal = ({ show, hide, content }) => {
  const classes = useStyles();

  return (
    <>
      {show && (
        <Dialog
          maxWidth="md"
          onClose={hide}
          aria-labelledby="customized-dialog-title"
          open={show}
        >
          <DialogTitle id="customized-dialog-title" onClose={hide}>
            {content.title}
          </DialogTitle>

          {content.selectedFile && (
            <DialogContent dividers>
              <img
                src={content.selectedFile}
                className={classes.modalImage}
                alt={content.title}
              />
            </DialogContent>
          )}
          {content.snippetUrl.startsWith('https') && content.snippetUrl.includes('wikipedia') && content.snippetUrl && (
            <DialogContent dividers>
              <Typography gutterBottom>
                <iframe
                  width="100%"
                  height="500"
                  src={content.snippetUrl}
                  allowFullScreen={true}
                  frameBorder="0"
                  title={content.title}
                ></iframe>
              </Typography>
            </DialogContent>
          )}
          <DialogContent dividers>
              <Typography gutterBottom>
                {content.message}
              </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={hide} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default CustomModal;
