import { SummaryCard } from './SummaryCard';
import { dashboardSummaryData } from '@/lib/data';

export const Summary = () => (
	<div className="flex flex-col gap-[18px]">
		<div>
			<h1 className="text-[20px] font-bold text-[#1B2528]">
				Summary
			</h1>
		</div>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
			<SummaryCard
				title="Total Balance"
				value={dashboardSummaryData.totalBalance}
				change={dashboardSummaryData.balanceChange}
			/>
			<SummaryCard
				title="Total Credits"
				value={dashboardSummaryData.totalCredits}
				change={dashboardSummaryData.creditsChange}
			/>
			<SummaryCard
				title="Total Debits"
				value={dashboardSummaryData.totalDebits}
				change={dashboardSummaryData.debitsChange}
			/>
			<SummaryCard
				title="Transactions"
				value={dashboardSummaryData.transactionCount}
				change={dashboardSummaryData.transactionChange}
				isCurrency={false}
			/>
		</div>
	</div>
);
