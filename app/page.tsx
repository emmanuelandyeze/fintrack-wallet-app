import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Summary } from '@/components/Summary';
import { TransactionTable } from '@/components/TransactionTable';

export default function Dashboard() {
	return (
		<div className="flex min-h-screen w-full flex-col bg-[#FCFDFD]">
			<div className="fixed top-0 left-0 right-0 z-20">
				<Header />
			</div>

			<div className="flex flex-1 w-full max-w-7xl mx-auto pt-[80px] px-4 md:px-6 lg:px-8">
				<div className="hidden lg:block fixed left-30 top-[80px] h-[calc(100vh-80px)] w-[280px] z-10">
					<Sidebar />
				</div>

				<main className="flex-1 w-full lg:ml-[300px]">
					<DashboardHeader />
					<Summary />
					<TransactionTable />
				</main>
			</div>
		</div>
	);
}
