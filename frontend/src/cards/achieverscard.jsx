import React from "react";
import Linkedin from "../assets/Socials/Linkedin.svg";

function Achieverscard({ name, image, batch, role, exrole, achieve, LinkedInLink }) {
    return (
        <div className="max-w-sm rounded-lg shadow-2xl shadow-zinc-700 hover:shadow-lg hover:shadow-zinc-600 transition-shadow duration-300 transform hover:scale-105 group bg-[#303030]">
            <div className="flex flex-col h-full">
                <img
                    className="w-80 h-64 object-cover rounded-t-lg p-2"
                    src={image}
                    alt={`${name}'s photo`}
                />

                <div className="px-6 py-2 flex-grow">
                    <h3 className="text-2xl font-semibold text-white">{name}</h3>
                    <p className="mt-2 text-lg text-white">{batch}</p>
                    <p className=" max-w-64 mt-2 text-lg text-white">{role}</p>
                    {exrole && (
                        <p className=" max-w-64 mt-2 text-lg text-white">{`Ex- ${exrole}`}</p>
                    )}
                    {achieve && <p className="max-w-64 mt-2 text-lg text-white">{achieve}</p>}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4 text-white flex justify-around ">
                    {LinkedInLink && (
                        <a href={LinkedInLink} target="_blank">
                            <img
                                src={Linkedin}
                                alt="Linkedin"
                                className="h-7 w-auto hover:opacity-50 transition-opacity"
                            />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Achieverscard;
