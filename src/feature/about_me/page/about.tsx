import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import {onEnter} from '../container/withHoverImage'
import ProfileImg from '../../../images/profile.jpg'
import {FormatMessage} from '../../change_lang/change'
export default function about() {
    return (
        <div className="mt-20 pl-28">
            <Title noUseLeave={false}  noUseEnter={true} text={FormatMessage('about.title')} />
            <div className='flex'>
                <div className='basis-3/5 mr-40'>
                    <p className='text-xl font-light font-atma text-white'>
                        {FormatMessage('about.story.1')} <b className='font-semibold'>{FormatMessage('about.story.2')}</b> {FormatMessage('about.story.3')} <b className='font-semibold'>{FormatMessage('about.story.4')}</b> {FormatMessage('about.story.5')}
                        <br />
                        <br />
                        <br />
                        <b className='font-semibold'>{FormatMessage('about.story.title.1')}</b> : {FormatMessage('about.story.title.1.substory')}
                        <br />
                        <b className='font-semibold'>{FormatMessage('about.story.title.2')}</b> : {FormatMessage('about.story.title.2.substory')}
                        <br />
                        <b className='font-semibold'>{FormatMessage('about.story.title.3')}</b> : {FormatMessage('about.story.title.3.substory')}
                        <br />
                        <b className='font-semibold'>{FormatMessage('about.story.title.4')}</b> : {FormatMessage('about.story.title.4.substory')}
                        <br />
                        <b className='font-semibold'>{FormatMessage('about.story.title.5')}</b> : {FormatMessage('about.story.title.5.substory')}
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
