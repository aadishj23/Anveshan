import React from "react";
import Github from "../../assets/Socials/github.svg";
import Link from "../../assets/Socials/icons.png";

function Projectscard({vis, name, GithubRepo, Deployment, owner, work, description}) {
	return (
		<div className="relative rounded-lg border border-slate-700 p-8 bg-black sm:h-96 w-80 mb-10 mx-5 sm:mx-0 hover:border-orange-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,138,0,0.5)]">
			<img src={vis} alt={name} className="rounded-t-lg" />
			<h1 className="text-white pt-6 pb-3 font-bold">{name}</h1>
			<span className="flex pb-3">
				{GithubRepo && (
					<a href={GithubRepo} target="_blank" className="text-white mr-3 mt-1">
						<img src={Github} alt="Github" className="h-5" />
					</a>
				)}
				{GithubRepo && Deployment && <span className="text-white"> | </span>}
				{Deployment && (
					<a href={Deployment} target="_blank" className="text-white ml-3 mt-1">
						<img src={Link} alt="Deployment" className="h-5" />
					</a>
				)}
			</span>
			<p className="text-white pb-3">By {owner}</p>
			<h1 className="text-white block sm:hidden font-bold pb-2">{work}</h1>
			<p className="text-white block sm:hidden">{description}</p>
		</div>
	);
}

export default Projectscard;
