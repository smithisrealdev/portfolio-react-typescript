import React from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import FrontEndList from '../container/withFrontEndList'
import BackEndList from '../container/withBackEndList'
import OtherList from '../container/withOtherList'
import Box from '@mui/material/Box'
export default function skill() {
    return (
        <Box className="pl-28 w-full h-full bg-black">
            <Title noUseLeave={false} noUseEnter={true} text='S|k|i|l|l' />
            <div className='flex justify-between pl-16'>
                <div className='w-3/4 border-r-2'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Fron End
                        </h1>
                    </div>
                    <FrontEndList />

                </div>
                <div className='w-3/4 border-r-2'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Back End
                        </h1>
                    </div>
                   <BackEndList />
                </div>
                <div className='w-3/4'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Other
                        </h1>
                    </div>
                   <OtherList />
                </div>


            </div>
        </Box>
    )
}
