import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Title from '../../../shared/components/animation/withAnimationHoveText';
import { FormatMessage } from '../../lang/change';
import Input from '../components/Input'
import { gsap } from "gsap";
import Container from '@mui/material/Container';
import Map from '../components/Map'
import Text from '../../../shared/components/Text'
import emailjs from '@emailjs/browser';
type MutableRefObject = React.MutableRefObject<HTMLInputElement>
export default function contact() {
    const el = React.useRef() as MutableRefObject;
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

    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_v2q1nod', el.current, 'KdQvwJL6yLP2Ry7L-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <Container maxWidth="xl" className=" mb-12 pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('contact.title')} />
            <Box ref={el}>
                <Grid container className='pl-8 font-atma text-white' >
                    <Grid item xs={12} className='grid grid-cols-2 sm:grid-cols-1 gap-14'>
                        <div>
                            <span className='flex'>
                                <Text text=' I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.' className='' />
                            </span>
                            <Box className='flex text-white gap-4 pt-8'>
                                <Grid item xs={4}>
                                    <Input placeholder='Name' multiline={false} />
                                </Grid>
                                <Grid item xs={8}>
                                    <Input placeholder='Email' multiline={false} />
                                </Grid>
                            </Box>
                            <Box className='pt-4'>
                                <Grid item xs={12}>
                                    <Input placeholder='Subject' multiline={false} />
                                </Grid>
                            </Box>
                            <Box className='pt-4'>
                                <Grid item xs={12} className='h-52'>
                                    <Input placeholder='Message' multiline={true} />
                                </Grid>
                            </Box>
                            <Box className='pt-2 flex justify-end'>
                                <div className='z-20 ' ref={el}>
                                    <div className=' w-36 shadow-2xl bg-orange-100  h-12 resume-custom -z-0 ' />
                                    <div className='boxBg -mt-12 w-36 bg-orange-400 h-12 ' />
                                    <div onMouseEnter={onEnter} onMouseLeave={onLeave} className='box2 -mt-12 w-36 bg-resume h-12 items-center justify-center flex cursor-pointer ' >
                                        <Text text={FormatMessage('contact.send')} className=' text-white font-medium'/>
                                    </div>
                                </div>
                            </Box>
                        </div>
                       <Map />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}


