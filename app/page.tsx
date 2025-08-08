import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Summary } from '@/components/Summary';
import { TransactionTable } from '@/components/TransactionTable';

export default function Dashboard() {
	return (
		<div className="flex min-h-screen w-full flex-col bg-[#FCFDFD]">
			<Header />
			<div className="flex-1 flex max-w-[1344px] mx-auto w-full flex-row gap-[48px]">
				<Sidebar />
				<main className="flex-1 w-[976px]">
					<DashboardHeader />
					<Summary />
					<TransactionTable />
				</main>
			</div>
		</div>
	);
}
