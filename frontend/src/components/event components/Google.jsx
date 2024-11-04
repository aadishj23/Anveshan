import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import YouTubeCard from "../../cards/youtubecard";
import NehaBedi from "../../assets/event-photos/Placements @Google/Nehadidi.png";
import Chayan from "../../assets/event-photos/Placements @Google/chayanbhaiya.png";

function Google() {
    return (
        <div className="min-h-screen bg-black">
            <h1 className="mt-16 pt-6 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
                PLACEMTS @GOOGLE
            </h1>
            <p className="text-white text-center mx-auto w-4/5 md:w-3/5">
                Anveshan hosted an inspiring session on Placements, featuring our distinguished
                alumni, Neha Bedi and Chayan, both Engineers at Google. They shared their journeys
                from BPIT to landing positions at one of the world's leading tech companies,
                offering valuable advice on building a strong profile, excelling in technical
                interviews, and navigating the competitive placement process.Through candid
                discussions and practical tips, Neha and Chayan highlighted key strategies for
                securing top-tier roles, emphasizing the importance of continuous learning,
                problem-solving skills, and resilience. Their insights gave students a realistic
                view of the industry and actionable steps to follow in their own career paths.
            </p>
            <p className="text-gray-300 text-sm text-center mt-4">19-06-2022</p>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center px-5 pt-5 md:px-10 md:pt-10 lg:px-16 lg:pt-16 space-y-4">
                <img src={NehaBedi} alt="Neha Bedi" className="w-96 rounded-lg" />
                <img src={Chayan} alt="Chayan" className="w-96 rounded-lg" />
            </div>
            <div className="flex justify-center pb-10 items-center">
                <YouTubeCard videoId="ojZ-xDHp3fI" />
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}

export default Google;
