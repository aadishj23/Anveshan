import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import YouTubeCard from "../../cards/youtubecard";

function Fraz() {
    return (
        <div className="min-h-screen bg-black">
            <h1 className="mt-16 pt-6 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
                SUCCESSFUL ENGINEER FT. FRAZ
            </h1>
            <p className="text-white text-center mx-auto w-4/5 md:w-3/5">
                Anveshan had the pleasure of hosting Mohammad Fraz, a Software Engineer at Google
                and a popular YouTuber known for his tech content. This engaging session was filled
                with engineering tips that ranged from optimizing study habits and managing time
                effectively to enhancing technical skills and preparing for the tech industry.Fraz
                shared practical advice on succeeding as an engineering student and offered insights
                from his journey into the tech field. With his background as both a Google engineer
                and content creator, he provided students with a unique perspective on building a
                career, balancing personal projects, and developing a solid foundation for long-term
                success in tech.
            </p>
            <p className="text-gray-300 text-sm text-center mt-4">12-03-2022</p>
            <div className="flex justify-center items-center pb-8 sm:pb-0">
                <YouTubeCard videoId="Hn_RUl1GOaM" />
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}

export default Fraz;
