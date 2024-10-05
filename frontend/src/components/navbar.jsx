import React, {useState} from "react";
import logo_img from "../assets/logo_bg_remove.png";
import {useNavigate} from "react-router-dom";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-black ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isOpen ? "true" : "false"}>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							)}
						</button>
					</div>
					<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
						<div className="flex-shrink-0">
							<img
								className="h-12 w-auto p-2"
								src={logo_img}
								alt="Workflow"
								onClick={() => {
									navigate("/");
								}}
							/>
						</div>
						<div className="hidden sm:block sm:ml-6 flex-1 mt-1">
							<div className="flex justify-center space-x-4">
								<button
									onClick={() => {
										navigate("/");
									}}
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Home
								</button>
								<button
									onClick={() => {
										navigate("/team");
									}}
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Team
								</button>
								<button
									onClick={() => {
										navigate("/events");
									}}
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Events
								</button>
								<button
									onClick={() => {
										navigate("/achievements");
									}}
									className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
									Achievements
								</button>
							</div>
						</div>
						<div className="hidden sm:block">
							<button
								onClick={() => {
									navigate("/contact");
								}}
								className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 mt-1 rounded-md text-sm font-medium">
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={`${isOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
				<div className="px-2 pt-2 pb-3 space-y-1 ">
					<button
						onClick={() => {
							navigate("/");
							setIsOpen(false);
						}}
						className="text-gray-300 hover:bg-gray-700 hover:text-white block m-auto px-3 py-2 rounded-md text-base font-medium">
						Home
					</button>
					<button
						onClick={() => {
							navigate("/team");
							setIsOpen(false);
						}}
						className="text-gray-300 hover:bg-gray-700 hover:text-white block m-auto px-3 py-2 rounded-md text-base font-medium">
						Team
					</button>
					<button
						onClick={() => {
							navigate("/events");
							setIsOpen(false);
						}}
						className="text-gray-300 hover:bg-gray-700 hover:text-white block m-auto px-3 py-2 rounded-md text-base font-medium">
						Events
					</button>
					<button
						onClick={() => {
							navigate("/achievements");
							setIsOpen(false);
						}}
						className="text-gray-300 hover:bg-gray-700 hover:text-white block m-auto px-3 py-2 rounded-md text-base font-medium">
						Achievements
					</button>
					<button
						onClick={() => {
							navigate("/contact");
							setIsOpen(false);
						}}
						className="text-white bg-orange-500 hover:bg-orange-600 block m-auto px-3 py-2 rounded-md text-base font-medium text-center">
						Contact Us
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
