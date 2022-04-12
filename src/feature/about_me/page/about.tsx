import React, { Suspense, useState } from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change';
import ResumeBtn from '../../about_me/components/resume';

export default function about() {
    
    return (
        <div className="pl-28 mb-20">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('about.title')} />
            <div className='flex pl-16'>
                <div className='basis-4/5 mr-40'>
                    <div className='text-xl font-light font-atma text-white'>
                        {FormatMessage('about.story.1')} <b className='font-semibold'>{FormatMessage('about.story.2')}</b> {FormatMessage('about.story.3')} <b className='font-semibold'>{FormatMessage('about.story.4')}</b> {FormatMessage('about.story.5')}
                        <div className='flex pt-12 gap-8' >
                            <ResumeBtn />
                            {/* <Alert severity="warning">This is a warning alert — check it out!</Alert> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
