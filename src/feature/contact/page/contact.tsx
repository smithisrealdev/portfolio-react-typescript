import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Title from '../../../shared/components/animation/withAnimationHoveText';
import { FormatMessage } from '../../change_lang/change';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Input from '../../../shared/components/Input'
import { gsap } from "gsap";
import Container from '@mui/material/Container';
const containerStyle = {
    width: '100%',
    height: '700px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function contact() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD8xbeuxhhDzdXwpMS9QlXUW5pyWaUYYuw"
    })
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const el = React.useRef() as React.MutableRefObject<HTMLInputElement>;
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

    return (
        <Container maxWidth="xl" className=" mb-12 pb-12">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('contact.title')} />
            <Box sx={{ flexGrow: 1  }}>
                <Grid container className='pl-8 gap-14 font-atma text-white' >
                    <Grid item xs={5}>
                        <span className='flex'>
                            <h1 >
                                I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.
                       </h1>
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
                            <div className='z-20 bg-yellow-500' ref={el}>
                                <div className=' w-36 shadow-2xl bg-indigo-100  h-12 resume-custom -z-0 ' />
                                <div className='boxBg -mt-12 w-36 bg-indigo-400 h-12 ' />
                                <div onMouseEnter={onEnter} onMouseLeave={onLeave} className='box2 -mt-12 w-36 bg-indigo-600 h-12 items-center justify-center flex cursor-pointer ' >
                                    {/* <Link href={ResumePDF} download underline="none"> */}
                                    <h1 className='font-atma text-white font-medium'>
                                        {FormatMessage('contact.send')}
                                    </h1>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </Box>
                    </Grid>

                    <Grid item xs={6} >
                        {isLoaded ? (
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}
                                onLoad={onLoad}
                                onUnmount={onUnmount}
                            >
                                <></>
                            </GoogleMap>
                        ) : <></>}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}


export default React.memo(contact)

