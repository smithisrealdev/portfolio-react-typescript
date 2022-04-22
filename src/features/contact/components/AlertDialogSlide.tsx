import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
type StatusProps = {
  status: string,
  setStatus: any
}

export default function AlertDialogSlide({ status, setStatus }: StatusProps) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (status === 'SUCCESS') {
      setOpen(true)
    }else{
      setOpen(false)
    }
  }, [status])

  const handleClose = () => {
    setOpen(false);
    setStatus('FAILED')
  };

  return (
    <div >
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle><h1 className='font-atma text-green-500'>{status}</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <h1 className='font-atma'>
              You successfully sent the message and I received your message I will reply you soon.
            </h1>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>OK</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
