import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Lottie from 'react-lottie';
import animationData from '../../../assets/order-placed.json'
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
  const [open, setOpen] = useState(false);
  const [isStopped, setIsStopped] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  React.useEffect(() => {
    if (status === 'SUCCESS') {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [status])

  const handleClose = () => {
    setOpen(false);
    setStatus('FAILED')
  };

  return (
    <div  className='relative'>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Lottie options={defaultOptions}
            height='50%'
            width='50%'
            isStopped={isStopped}
            isPaused={isPaused} />
        </DialogTitle>
   
        <DialogContent className='absolute pb-14'>
          <DialogContentText id="alert-dialog-slide-description">
            <h1 className='font-atma'>
            <br />
              You successfully sent the message and I received your message I will reply you soon.
            </h1>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
