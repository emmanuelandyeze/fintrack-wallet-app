import Image from 'next/image';
import DropdownIcon from './icons/DropdownIcon';

const userAvatars = [
	'/images/profile.png', // Ava
	'/images/profile2.png', // Liam
	'/images/profile3.png', // Noah
	'/images/profile4.png',
];

export const DashboardHeader = () => (
	<div className="flex flex-col md:flex-col md:justify-between pt-[28px] pb-[20px] gap-[28px] mb-6">
		<div className="flex flex-row items-center justify-between w-full md:w-auto">
			<div className="flex items-center gap-[16px]">
				<div className="flex items-center space-x-2">
					<h2 className="text-[34px] font-bold tracking-[-1] text-[#1B2528]">
						Wallet Ledger
					</h2>
					<DropdownIcon />
				</div>
				<span className="flex items-center space-x-2 text-sm font-semibold text-[#087A2E] bg-[#eaeff0] px-[8px] py-[4px] rounded-[16px]">
					<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
					<span className="text-[15px] text-[#1B2528] font-medium">
						Active
					</span>
				</span>
			</div>
			<div className="flex items-center space-x-4 mt-4 md:mt-0">
				{/* Share button component */}
				<button className="flex items-center w-[78px] px-[18px] py-[8px] bg-[#4B8B9F] rounded-full text-[#020303] text-[15px] font-medium hover:bg-gray-200 transition-colors">
					{/* <ShareIcon /> */}
					<span>Share</span>
				</button>
				{/* Menu options button */}
				<button className="w-[36px] h-[36px] border-[#d8dfe0] border-[1.5px] rounded-[16px] flex items-center justify-center">
					<span className="w-1 h-1 bg-[#1B2528] rounded-full mx-0.5"></span>
					<span className="w-1 h-1 bg-[#1B2528] rounded-full mx-0.5"></span>
					<span className="w-1 h-1 bg-[#1B2528] rounded-full mx-0.5"></span>
				</button>
			</div>
		</div>
		<div className="flex flex-row items-center gap-[12px]">
			<div className="flex -space-x-2">
				{userAvatars.map((src, index) => (
					<Image
						key={index}
						src={src}
						alt={`User ${index + 1}`}
						width={32}
						height={32}
						className="w-[32px] h-[32px] rounded-full border-2 border-white"
					/>
				))}
			</div>
			<div className="flex flex-row items-center gap-[4px] text-[15px] text-[#6d797c]">
				<p>Ava, Liam, Noah</p>
				<p>+12 others</p>
			</div>
		</div>
		<div className="flex space-x-4 mb-0 border-b border-gray-200">
			<button className="py-[12px] border-b-2 cursor-pointer px-[28px] border-[#437D8E] text-[#437D8E] font-semibold">
				Overview
			</button>
			<button className="py-[12px] text-[#6d797c] px-[28px] cursor-pointer hover:text-gray-700">
				Transactions
			</button>
		</div>
	</div>
);
