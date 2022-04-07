import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import {onEnter} from '../container/withHoverImage'
import ProfileImg from '../../../images/profile.jpg'
export default function about() {
    return (
        <div className="mt-20 pl-28 w-full h-full bg-main">
            <Title noUseLeave={false}  noUseEnter={true} text='A|b|o|u|t' />
            <div className='flex'>
                <div className='basis-3/5 mr-40'>
                    <p className='text-xl font-light font-atma text-white'>
                        I have experience working with both websites and mobile applications using the <b className='font-semibold'>React</b> framework. I am currently working as a FullStack Developer at 3i infotech on-site True Corporation, improving website and API services in sales campaigns to company clients. And I used to work as a freelancer building a mobile learning app called <b className='font-semibold'>archiveNex</b> app. You can find and download it in the App Store and Google Play Store.
                        <br />
                        <br />
                        <br />
                        <b className='font-semibold'>Competencies</b> : ReactJs/React Native 
                        <br />
                        <b className='font-semibold'>Framework</b> : React,Redux/Mobx,GoLang
                        <br />
                        <b className='font-semibold'>Language</b> : Javascript,Typescript,Css,Python,Java
                        <br />
                        <b className='font-semibold'>Statement</b> : Higher-Order Components (Hoc),Material UI, Style -component
                        <br />
                        <b className='font-semibold'>Tool</b> : Jira,Tello,Bitbucket,GitLab,GitHub Services: Jenkins, Kibana, Kong Services
                </p>
                </div>
                <div className='basis-2/5 mr-28'>
                    <div className='h-0 pb-custom relative overflow-hidden rounded-md cursor-pointer rotate-6 ' onMouseEnter={onEnter}>
                        <img className='absolute top-0 left-0 w-full h-full object-cover '
                            src={ProfileImg}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
