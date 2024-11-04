import React from "react";

function ProjectCard2({ image, work, description }) {
    return (
        <div className="relative text-white rounded-lg h-96 w-fit mb-10 hidden sm:block overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,138,0,0.5)]">
            <div className="relative w-full h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${image})`,
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-transparent to-transparent opacity-65"></div>
                <div className="relative z-10 flex items-end h-full text-left">
                    <div className="text-white px-4">
                        <h1 className="font-bold mb-2">{work}</h1>
                        <p className="mb-5 sm:w-[300px] md:w-[500px] lg:w-[700px] xl:w-[1000px]">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard2;
