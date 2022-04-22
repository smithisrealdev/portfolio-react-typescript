import React, { useState, useRef } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Title from '../../../shared/components/animation/withAnimationHoveText';
import { FormatMessage } from '../../lang/change';
import InputField from '../components/InputField'
import TextField from '../components/TextField'
import { gsap } from "gsap";
import Container from '@mui/material/Container';
import Map from '../components/Map'
import Text from '../../../shared/components/Text'
import emailjs from '@emailjs/browser';
import Alert from '../components/AlertDialogSlide'
type MutableRefObject = React.MutableRefObject<HTMLInputElement>
type EventProps = any
type ValuesSetData = any
type EventFormProps = any
type Status = string
export default function contact() {
    const [status, setStatus] = useState<Status>('FAILED')
    const [value, setValue] = useState<ValuesSetData>({
        fullName: '',
        email: '',
        subject: '',
        messages: ''
    })
    const handleChangeValue = (event: EventProps) => {
        setValue((values: ValuesSetData) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }
    const el = useRef() as MutableRefObject;
    const q = gsap.utils.selector(el);
    const onEnter = () => {
        gsap.to(q(".boxBg"), {
            x: 6,
            y: -7
        });
        gsap.to(q(".box2"), {
            x: 17,
            y: -18
        });
    };
    const onLeave = () => {
        gsap.to(q(".boxBg"), {
            x: 0,
            y: 0
        });
        gsap.to(q(".box2"), {
            x: 0,
            y: 0
        });
    };

    const sendEmail = (e: EventFormProps) => {
        e.preventDefault();
        console.log("sendEmail ", sendEmail);
        emailjs.sendForm('gmail', 'template_v2q1nod', e.target, 'KdQvwJL6yLP2Ry7L-')
            .then((result) => {
                console.log(result.text);
                setValue({
                    fullName: '',
                    email: '',
                    subject: '',
                    messages: ''
                })
                setStatus('SUCCESS')
                const timer = setInterval(() => {
                    setStatus('')
                }, 5000);
                return () => {
                    clearInterval(timer);
                };
            }, (error) => {
                setStatus('FAILED')
                console.log(error.text);
            });
    };

    return (
        <Container maxWidth="xl" className=" mb-12 pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('contact.title')} />
            <Alert status={status} setStatus={(value:any) => setStatus(value)} />
            <Grid container className='pl-8 font-atma text-white' >
                <Grid item xs={12} className='grid grid-cols-2 sm:grid-cols-1 gap-14'>

                    <form onSubmit={sendEmail}>
                        <span className='flex'>
                            <Text text=' I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.' className='' />
                        </span>
                        <Box className='flex text-white gap-4 pt-8'>
                            <Grid item xs={4}>
                                <InputField value={value.fullName} handleChangeValue={handleChangeValue} name='fullName' type='text' placeholder='Smith Isreal' />
                            </Grid>
                            <Grid item xs={8}>
                                <InputField value={value.email} handleChangeValue={handleChangeValue} name='email' type='email' placeholder='Smith@examble.com' />
                            </Grid>
                        </Box>
                        <Box className='pt-4'>
                            <Grid item xs={12}>
                                <InputField value={value.subject} handleChangeValue={handleChangeValue} name='subject' type='text' placeholder='Subject' />
                            </Grid>
                        </Box>
                        <Box className='pt-4'>
                            <Grid item xs={12} className='h-52'>
                                <TextField value={value.messages} handleChangeValue={handleChangeValue} name='messages' type='text' placeholder='Messages' />
                            </Grid>
                        </Box>
                        <Box className='pt-2 flex justify-end'>
                            <div className='z-20 ' ref={el}>
                                <div className=' w-36 shadow-2xl bg-orange-100  h-12 resume-custom -z-0 ' />
                                <div className='boxBg -mt-12 w-36 bg-orange-400 h-12 ' />
                                <button type='submit' onMouseEnter={onEnter} onMouseLeave={onLeave} className='box2 -mt-12 w-36 bg-resume h-12 items-center justify-center flex cursor-pointer ' >
                                    <Text text={FormatMessage('contact.send')} className=' text-white font-medium' />
                                </button>
                            </div>
                        </Box>
                    </form>
                    <Map />
                </Grid>
            </Grid>

        </Container>
    )
}


