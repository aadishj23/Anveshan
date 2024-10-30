import React from 'react'
import TeamCard from '../cards/teamcard'
import SeniorCouncilData from '../data/SeniorCouncilData'
import JuniorCouncilData from '../data/JuniorCouncilData'
import common from '../assets/bg.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../custom css/corousel.css'

function TeamMain() {
    const seniorCouncil = SeniorCouncilData.map((member) => {
        return (
            <TeamCard
                key={member.id}
                name={member.name}
                position={member.position}
                image={member.image}
                LinkedInLink={member.LinkedinLink}
                GithubLink={member.GithubLink}
                LeetcodeLink={member.LeetcodeLink}
                CodechefLink={member.CodechefLink}
                CodeforcesLink={member.CodeforcesLink}
                TwitterLink={member.TwitterLink}
                InstagramLink={member.InstagramLink}
                CodolioLink={member.CodolioLink}
            />
        )
    })

    const juniorCouncil = JuniorCouncilData.map((member) => {
        return (
            <TeamCard
                key={member.id}
                name={member.name}
                image={member.image}
                LinkedInLink={member.LinkedinLink}
                GithubLink={member.GithubLink}
                LeetcodeLink={member.LeetcodeLink}
                CodechefLink={member.CodechefLink}
                CodeforcesLink={member.CodeforcesLink}
                TwitterLink={member.TwitterLink}
                InstagramLink={member.InstagramLink}
                CodolioLink={member.CodolioLink}
            />
        )
    })

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true, 
                    centerPadding: '10px',
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className='bg-gray-100 min-h-screen bg-cover'
        style={{ backgroundImage: `url(${common})` }}>
            <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className="pt-20 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">MEET THE TEAM</h1>
                <div className='py-16'>
                    <h1 className='text-5xl font-bold text-center mb-4 text-white'>Senior Council</h1>
                    <p className='text-lg text-white text-center mb-10'>
                        Meet the esteemed members of our Senior Council.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center text-center'>
                        {seniorCouncil}
                    </div>
                </div>
                <div className='py-16'>
                    <h1 className='text-5xl font-bold text-center mb-4 text-white'>Junior Council</h1>
                    <p className='text-lg text-white text-center mb-10'>
                        Introducing the talented members of our Junior Council.
                    </p>
                    <Slider {...settings} className='text-center gap-10 lg:pl-20'>
                        {juniorCouncil}
                    </Slider>                
                </div>
            </div>
        </div>
    )
}

export default TeamMain;
