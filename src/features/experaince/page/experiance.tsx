import React,{useState,useEffect} from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../lang/change'
import Container from '@mui/material/Container';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperConent from '../../../shared/components/SwiperContent'
import CardConent from '../../../shared/components/CardJob'
import SanityClient from '../../../config/client'
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

export default function experiance() {
    const [listProject, setListProject] = useState([])
    const [done, setDone] = useState(false)
    useEffect(() => {
        async function fetchData() {
            let response = await SanityClient.fetch(`
            *[_type == "experiance"]{
                id,
                detailJob,
                location,
                role,
                url{
                    asset->{
                        _id,
                        url
                    },
                }
            }
            `);
            let data = await response;
            let sortedList = data.sort((a: any, b: any) => a.id - b.id);
            setListProject(sortedList)
            setDone(true)
        }
            fetchData()
    }, [])
    return (
        <Container maxWidth="xl" className="xl:pl-28 lg:pl-28 md:pl-20 sm:pl-8 ss:pl-6 xl:mb-12 bg-main">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('experiance.title')} />
            <div className='xl:hidden lg:hidden md:hidden sm:flex'>
                <Swiper
                    autoplay
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    // color='red'
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    // pagination={true}
                    className="mySwiper max-w-full rounded-md"
                >
                    {listProject.map((items:any) => {
                        return (
                            <SwiperSlide key={items.id}>
                                <SwiperConent id={items.id} image={items.url?.asset?.url} role={items.role} location={items.location} detailJob={items.detailJob}/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            {listProject.map((items:any) => {
                return (
                    <CardConent key={items.id} id={items.id} image={items.url?.asset?.url} role={items.role} location={items.location} detailJob={items.detailJob}/>
                )
            })}
        </Container>
    )
}
