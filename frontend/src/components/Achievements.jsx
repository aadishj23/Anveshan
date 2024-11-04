import React from "react";
import Achieverscard from "../cards/achieverscard";
import AchieversData from "../data/AchieversData";
import events_bg from "../assets/bg_square.png";

function Achievements() {
    const achievers = AchieversData.map((member) => {
        return (
            <Achieverscard
                key={member.id}
                name={member.name}
                batch={member.batch}
                role={member.role}
                exrole={member.exrole}
                achieve={member.achievements}
                image={member.image}
                LinkedInLink={member.linkedin}
            />
        );
    });

    return (
        <div className="bg-gray-100 min-h-screen" style={{ backgroundImage: `url(${events_bg})` }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12">
                    <h1 className="pt-7 mb-20 text-center bg-gradient-to-b from-white via-white to-[#FF8A00] bg-clip-text text-transparent text-5xl md:text-7xl font-bold ">
                        ACHIEVERS
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center text-center">
                        {achievers}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Achievements;
