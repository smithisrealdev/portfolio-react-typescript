import React, { useState, useEffect } from 'react'
import MergeIcon from '../../../assets/images/networking.png'
import LikeIcon from '../../../assets/images/like.png'
import TelescopeIcon from '../../../assets/images/telescope.png'
import Text from '../../../shared/components/Text'
export default function footer() {
    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
        watch: null,
    });
    useEffect(() => {
        fetch('https://api.github.com/repos/smithisreal/porfolio')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count, watchers_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                    watch: watchers_count
                });
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <div  className='bg-main text-white font-atma flex-col flex items-center justify-center h-36 bottom-0 shadow-xl '>
                <a href="https://github.com/smithisreal/porfolio" target='_blank'  className='cursor-pointer hover:text-orange-600'>
                    <Text text='Design By Apichet Nuamtun' className='font-semibold' />
                    <div className='flex gap-4 pt-2'>
                        <div className='flex gap-3 items-center'>
                            <img src={LikeIcon} className='max-h-8' />
                            <Text text={`${githubInfo.stars}`} className=' box1 font-semibold' />
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={MergeIcon} className='max-h-8' />
                            <Text text={`${githubInfo.forks}`} className=' box2 font-semibold' />
                        </div>
                        <div className='flex gap-3 items-center'>
                            <img src={TelescopeIcon} className='max-h-8' />
                            <Text text={`${githubInfo.watch}`} className=' box3 font-semibold' />
                        </div>
                    </div>
                </a>

        </div>
    )
}
