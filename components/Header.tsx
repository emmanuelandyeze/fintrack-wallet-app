
import Image from 'next/image';
import MenuIcon from '@/components/icons/MenuIcon';
import Logo from '@/components/icons/Logo';
import SearchIcon from '@/components/icons/SearchIcon';
import AppGridIcon from '@/components/icons/AppGridIcon';

interface HeaderProps {
	toggleSidebar: () => void;
}

export const Header = () => (
	<header className="flex justify-between max-w-[1344px] mx-auto w-full items-center px-0 h-[64px] bg-[#FCFDFD] ">
		<div className="flex items-center space-x-4">
			<div className="flex flex-row gap-5 items-center">
				<MenuIcon />
                <Logo />
			</div>
			
		</div>
		<div className="flex items-center justify-end gap-[28px]">
			<SearchIcon />
			<AppGridIcon />
			<Image
				src="/images/profile.png"
				alt="User Avatar"
				width={40}
				height={40}
				className="rounded-full"
			/>
		</div>
	</header>
);
