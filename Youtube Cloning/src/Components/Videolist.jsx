import React from 'react'
import Videocard from './Videocard'
import { useEffect } from 'react'
import { useState } from 'react'

function Videolist({searchText}) {
    const video = [
        {
            id: "U5HvuKEjH6g",
            head: 'How to Spend Your Time Wisely for Success | Life-Changing Advice | Jack Ma',
            channel: 'Thrivefy',
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '1.5M views . 3 Months ago',
            history:"false"
        },
        {
            id:"okmscYcWIu4",
            head: '5 Steps To Improve Your Focus in 7 Days | Master Your Focus in a Week',
            channel: 'Alternate Brain',
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '81K views . 5 Weeks ago',
            history:"false" 
        },
        {
            id: "22wpwgpy7fY",
            head: 'How To Control Your Mind | Buddhism In English',
            channel: 'Buddhism',
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '2.3M views . 2 Years ago',
            history:"false"
        },
        {
            id: "Hu4Yvq-g7_Y",
            head: 'How to Get Your Brain to Focus | Chris Bailey | TEDxManchester',
            channel: 'TEDx Talks',
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '18M views . 2 Days ago',
            history:"false" 
        },
        {
            id: "P6FORpg0KVo",
            head: `How to Make Learning as Addictive as Social Media | Duolingo's Luis Von Ahn | TED`,
            channel: 'TED',
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '12M views . 2 Months ago',
            history:"false" 
        },
        {
            id: "ZVO8Wt_PCgE",
            head: `Mastery: How to Learn Anything Fast | Nishant Kasibhatla`,
            channel: 'Ideas & Inspiration',
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '16M views . 6 Years ago',
            history:"false" 
        },
        {
            id: "UhvVxMl3OHg",
            head: `3 Things That Are Silently Blocking Your Focus (And How to Fix Them)`,
            channel: `Abhasa - Rehab & Wellness`,
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '498K views . 7 Months ago',
            history:"false" 
        },
        {
            id: "vxwhgKWTLkM",
            head: `⁠9 Daily Habits That Sharpen Your Brain, Focus, and Memory | Dr Pal`,
            channel: `Dr Pal`,
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '1M views . 6 Months ago',
            history:"false"
        },
        {
            id: "9Vt4x-OydxI",
            head: `Give Me 10 Minutes, to Detox Your Brain Rot Tamil | Quit Instagram Improve Focus`,
            channel: `Almost Everything`,
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '247K views . 7 Days ago',
            history:"false"
        },
        {
            id: "k-wYhof-1mY",
            head: `Dopamine Detox - How I Reset My Brain in 7 Days | Tamil`,
            channel: `Tharun Kumar`,
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '761K views . 7 Months ago',
            history:"false"
        },
        {
            id: "8EM2XJ_jRvs",
            head: `How To Be So Productive That It Feels ILLEGAL`,
            channel: `Mindset in Minutes`,
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '8.1K views . 4 Months ago',
            history:"false"
        },
        {
            id: "SuRQKst9b6E",
            head: `KILL YOUR LAZINESS Inspired By Jack Ma`,
            channel: `LORE BALOS MOTIVATIONS`,
            img: 'Youtube Cloning//src//channels4_profile.jpg',
            views: '639K views  7 months ago',
            history:"false"
        },
        ]
    // const [video, setvideo] = useState(null)

    // useEffect(() =>
    //     fetch('http://localhost:3000/videos')
    //         .then(Response => { return Response.json })
    //         .then( data => {setvideo(data)})
    //         .catch(err), []
    //     )

    //     if(!video){
    //         return(
    //             <></>
    //         )
    //     }

    const filteredVideos = video.filter(v =>
        v.head.toLowerCase().includes(searchText.toLowerCase())
    );

    // const videolist = video.map((vdo) =>
    //     <Videocard
    //         id={vdo.id}
    //         head={vdo.head}
    //         views={vdo.views}
    //         img={vdo.img}
    //         channel={vdo.channel}
    //         time={vdo.time}
    //     />
    // )
    
    return (
        <div className='videolist-container' >
            {filteredVideos.map(vdo => (
                <Videocard
                    key={vdo.id}
                    id={vdo.id}
                    head={vdo.head}
                    views={vdo.views}
                    img={vdo.img}
                    channel={vdo.channel}
                    time={vdo.time}
                />
            ))}
        </div>
    )
}

export default Videolist