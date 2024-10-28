import React from 'react'
import Instagram from '../assets/Socials/Instagram.svg';
import Github from '../assets/Socials/github.svg';
import Linkedin from '../assets/Socials/Linkedin.svg';
import Twitter from '../assets/Socials/x.svg';
import Leetcode from '../assets/Socials/Leetcode.svg';
import Codechef from '../assets/Socials/Codechef.svg';
import Codeforces from '../assets/Socials/Codeforces.svg';
import Codolio from '../assets/Socials/codolio.svg';

function TeamCard({ name, position, image , LinkedInLink , GithubLink , LeetcodeLink , CodechefLink , CodeforcesLink , TwitterLink , InstagramLink , CodolioLink }) {
    return (
        <div className="w-64 rounded-lg shadow-2xl shadow-zinc-700 hover:shadow-lg hover:shadow-zinc-600 transition-shadow duration-300 transform hover:scale-105 group bg-[#303030] " 
        >
            <img
                className="w-64 h-64 object-cover rounded-t-lg p-2 "
                src={image}
                alt={`${name}'s photo`}
            />
            <div className="px-6 py-2">
                <h3 className="text-2xl font-semibold text-white">{name}</h3>
                {position && (
                    <p className="mt-2 text-lg text-gray-300">{position}</p>
                )}
            </div>
            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white flex justify-around '>
                {LinkedInLink && <a href={LinkedInLink} target='_blank'><img src={Linkedin} alt='Linkedin' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
                {GithubLink && <a href={GithubLink} target='_blank'><img src={Github} alt='Github' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
                {LeetcodeLink && <a href={LeetcodeLink} target='_blank'><img src={Leetcode} alt='Leetcode' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
                {CodolioLink && <a href={CodolioLink} target='_blank'><img src={Codolio} alt='Codolio' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
                {CodechefLink && <a href={CodechefLink} target='_blank'><img src={Codechef} alt='Codechef' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
                {CodeforcesLink && <a href={CodeforcesLink} target='_blank'><img src={Codeforces} alt='Codeforces' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
                {TwitterLink && <a href={TwitterLink} target='_blank'><img src={Twitter} alt='X' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
                {InstagramLink && <a href={InstagramLink} target='_blank'><img src={Instagram} alt='Instagram' className='h-7 w-auto hover:opacity-50 transition-opacity' /></a>}
            </div>
        </div>
    )
}

export default TeamCard