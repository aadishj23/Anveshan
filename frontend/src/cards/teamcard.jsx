import React from 'react'
import { FloatingDock } from "../components/ui/floating-dock";
import Instagram from '../assets/Socials/Instagram.svg';
import Github from '../assets/Socials/github.svg';
import Linkedin from '../assets/Socials/Linkedin.svg';
import Twitter from '../assets/Socials/x.svg';
import Leetcode from '../assets/Socials/Leetcode.svg';
import Codechef from '../assets/Socials/Codechef.svg';
import Codeforces from '../assets/Socials/Codeforces.svg';
import Codolio from '../assets/Socials/codolio.svg';

function TeamCard({ name, position, image , LinkedInLink , GithubLink , LeetcodeLink , CodechefLink , CodeforcesLink , TwitterLink , InstagramLink , CodolioLink }) {

    const links=[
        LinkedInLink && {
            title: 'LinkedIn',
            icon: <img src={Linkedin} alt='Linkedin' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: LinkedInLink
        },
        GithubLink && {
            title: 'Github',
            icon: <img src={Github} alt='Github' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: GithubLink
        },
        LeetcodeLink && {
            title: 'Leetcode',
            icon: <img src={Leetcode} alt='Leetcode' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: LeetcodeLink
        },
        CodolioLink && {
            title: 'Codolio',
            icon: <img src={Codolio} alt='Codolio' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: CodolioLink
        },
        CodechefLink && {
            title: 'Codechef',
            icon: <img src={Codechef} alt='Codechef' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: CodechefLink
        },
        CodeforcesLink && {
            title: 'Codeforces',
            icon: <img src={Codeforces} alt='Codeforces' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: CodeforcesLink
        },
        TwitterLink && {
            title: 'Twitter',
            icon: <img src={Twitter} alt='X' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: TwitterLink
        },
        InstagramLink && {
            title: 'Instagram',
            icon: <img src={Instagram} alt='Instagram' className='h-7 w-auto text-neutral-500 dark:text-neutral-300' />,
            href: InstagramLink
        }
    ].filter(Boolean);

    return (
        <div className="w-64 rounded-lg shadow-2xl shadow-zinc-700 hover:shadow-lg hover:shadow-zinc-600 transition-shadow duration-300 transform hover:scale-105 group bg-[#303030]" 
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
            <div className="flex items-center justify-center w-full pb-2">
                <FloatingDock items={links} />
            </div>
        </div>
    )
}

export default TeamCard