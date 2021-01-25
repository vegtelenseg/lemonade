import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Toast(props) {
  /**
   *         message="Successfully deleted user"
        open={openToast}
        setOpenToast={setOpenToast}
        severity="success"
   */
  const { message, severity, openToast, setOpenToast } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      open={openToast}
      autoHideDuration={4000}
      onClose={setOpenToast}
      message={message}
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={setOpenToast}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
}
