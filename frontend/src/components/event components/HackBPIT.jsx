import React from "react";
import { ShootingStars } from "../ui/shooting-stars";
import { StarsBackground } from "../ui/stars-background";
import Poster from "../../assets/event-photos/HackBPIT 2k23/Poster 1.jpg";
import Stage2 from "../../assets/event-photos/HackBPIT 2k23/Stage Photo 2.jpg";
import Judge1 from "../../assets/event-photos/HackBPIT 2k23/Swarnee Sethi.png";
import Judge2 from "../../assets/event-photos/HackBPIT 2k23/Vaibhav Parashar.png";
import Judge3 from "../../assets/event-photos/HackBPIT 2k23/Pushan Verma.png";
import Judge4 from "../../assets/event-photos/HackBPIT 2k23/Shriya Chabra.png";
import Judge5 from "../../assets/event-photos/HackBPIT 2k23/Shubham Prakash.png";
import Winner1 from "../../assets/event-photos/HackBPIT 2k23/Winner 1.jpg";
import Winner2 from "../../assets/event-photos/HackBPIT 2k23/Winner2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../custom css/hackbpitcarousel.css";

function HackBPIT() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    centerMode: false,
                    infinite: false,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                    centerMode: false,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    centerMode: true,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <div className="min-h-screen bg-black">
            <h1 className="mt-16 pt-6 mb-8 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold">
                HACKBPIT 2K23
            </h1>
            <p className="text-white text-center mx-auto md:w-3/5 p-5">
                HackBPIT, the flagship hackathon of BPIT, is where innovative ideas meet real-world
                problem-solving! Hosted by Anveshan, HackBPIT 2023 drew an impressive 100+ teams
                from across the country, all competing for a total prize pool of 1 Lakh with{" "}
                <b>50k Cash Prize</b>. This high-energy, 30-hour offline event brought together
                students, industry mentors, and tech enthusiasts to collaborate, create, and build
                impactful solutions.Participants faced challenging problem statements across
                multiple domains, encouraging them to think critically and work together under
                pressure. The event was not just about coding; it was a platform for learning,
                mentorship, and networking, offering valuable insights and connections for every
                attendee.
            </p>
            <p className="text-gray-300 text-sm text-center mt-4">29-11-2023 to 30-11-2023</p>
            <div className="flex flex-col space-y-4 md:flex-row items-center justify-around p-5 lg:p-20">
                <img
                    src={Poster}
                    alt="HackBPIT 2k23 Poster"
                    className=" h-[350px] lg:h-[500px] rounded-lg"
                />
                <img
                    src={Stage2}
                    alt="HackBPIT 2k23 Stage Photo 2"
                    className="w-4/5 md:w-3/5 h-auto rounded-lg"
                />
            </div>
            <h3 className=" pt-6 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-3xl md:text-5xl font-bold">
                JUDGES
            </h3>
            <div className="p-0 md:p-10 lg:p-20">
                <Slider {...settings}>
                    <img
                        src={Judge1}
                        alt="HackBPIT 2k23 Judge Sawarnee Sethi"
                        className="w-1/3 rounded-lg"
                    />
                    <img src={Judge4} alt="HackBPIT 2k23 Judge 4" className="w-1/3 rounded-lg" />
                    <img src={Judge2} alt="HackBPIT 2k23 Judge 2" className="w-1/3 rounded-lg" />
                    <img src={Judge3} alt="HackBPIT 2k23 Judge 3" className="w-1/3 rounded-lg" />
                    <img src={Judge5} alt="HackBPIT 2k23 Judge 5" className="w-1/3 rounded-lg" />
                </Slider>
            </div>
            <h3 className="mt-5 md:mt-0 pt-4 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-3xl md:text-5xl font-bold">
                WINNERS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 px-5 py-5 md:px-10 lg:px-16 space-y-8 justify-items-center items-center">
                <img
                    src={Winner2}
                    alt="HackBPIT 2k23 Winner 1"
                    className="w-96 lg:w-[500px] rounded-lg"
                />
                <img
                    src={Winner1}
                    alt="HackBPIT 2k23 Winner 2"
                    className="w-96 lg:w-[500px] rounded-lg"
                />
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    );
}

export default HackBPIT;
