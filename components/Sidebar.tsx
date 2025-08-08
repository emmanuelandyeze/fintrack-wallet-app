'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Assume FinTrackLogo is an SVG component

const navItems = [
	{ name: 'Dashboard', href: '/' },
	{ name: 'Transactions', href: '/transactions' },
	{ name: 'Reports', href: '/reports' },
	{ name: 'Settings', href: '/settings' },
];

export const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className="w-[320px] bg-[#FCFDFD] py-[28px] min-h-screen">
			<nav className="space-y-2">
				{navItems.map((item) => (
					<Link
						key={item.name}
						href={item.href}
						className={`flex items-center py-[8px] px-[16px] w-[320px] h-[36px] text-[15px] font-medium rounded-[16px] text-[#1B2528] hover:bg-[#dde5e7] transition-colors ${
							pathname === item.href
								? 'bg-[#dde5e7] text-[#3A6C7B]'
								: ''
						}`}
					>
						{item.name}
					</Link>
				))}
			</nav>
		</aside>
	);
};
