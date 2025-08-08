'use client';

import { useState } from 'react';
import { transactionsData, Transaction } from '@/lib/data';
// Assume SortIcon is an SVG component

type SortKey = keyof Transaction | null;
type SortDirection = 'asc' | 'desc';

export const TransactionTable = () => {
	const [sortKey, setSortKey] = useState<SortKey>('date');
	const [sortDirection, setSortDirection] =
		useState<SortDirection>('desc');

	const sortedTransactions = [...transactionsData].sort(
		(a, b) => {
			if (!sortKey) return 0;

			let aValue = a[sortKey];
			let bValue = b[sortKey];

			// Simple sorting logic
			if (typeof aValue === 'string' && typeof bValue === 'string') {
				aValue = aValue.toLowerCase();
				bValue = bValue.toLowerCase();
			}

			if (aValue < bValue)
				return sortDirection === 'asc' ? -1 : 1;
			if (aValue > bValue)
				return sortDirection === 'asc' ? 1 : -1;
			return 0;
		},
	);

	const handleSort = (key: keyof Transaction) => {
		if (sortKey === key) {
			setSortDirection(
				sortDirection === 'asc' ? 'desc' : 'asc',
			);
		} else {
			setSortKey(key);
			setSortDirection('asc');
		}
	};

	const renderSortIcon = (key: keyof Transaction) => {
		if (sortKey !== key) return null;
		return sortDirection === 'asc' ? '▲' : '▼';
	};

	return (
		<div className="">
			<table className="w-full max-w-[976px] mx-auto text-left table-auto">
				<thead>
					<tr className="text-gray-500 space-x-6 uppercase text-xs font-semibold">
						<th
							className="p-4 cursor-pointer border-b border-gray-200"
							onClick={() => handleSort('date')}
						>
							<div className="flex items-center">
								Date {renderSortIcon('date')}
							</div>
						</th>
						<th className="p-4 border-b border-gray-200">
							Remark
						</th>
						<th
							className="p-4 cursor-pointer text-right border-b border-gray-200"
							onClick={() => handleSort('amount')}
						>
							<div className="flex items-center justify-end">
								Amount {renderSortIcon('amount')}
							</div>
						</th>
						<th className="p-4 border-b border-gray-200">
							Currency
						</th>
						<th className="p-4 border-b border-gray-200">
							Type
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedTransactions.map((transaction) => (
						<TransactionRow
							key={transaction.id}
							transaction={transaction}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

// Reusable row component
const TransactionRow = ({
	transaction,
}: {
	transaction: Transaction;
}) => {
	const { date, remark, amount, currency, type } =
		transaction;
	const isCredit = type === 'Credit';
	const dotColor = isCredit ? 'bg-green-500' : 'bg-red-500';
	
	const formattedAmount = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 0,
	}).format(Math.abs(amount));

	return (
		<tr className="border-b last:border-b-0 gap-[18px] border-gray-100 hover:bg-gray-50 transition-colors">
			<td className="p-4 w-[555px] text-gray-800 text-[15px] mr-2">
				{date}
			</td>
			<td className="p-4 w-[122px] text-gray-800 text-[15px]">
				{remark}
			</td>
			<td
				className={`p-4 w-[73px] text-right text-[15px] text-[#1B2528]`}
			>
				{isCredit ? '+' : '-'} {formattedAmount}
			</td>
			<td className="p-4 w-[80px] text-gray-500 text-[15px]">
				{currency}
			</td>
			<td className="p-4 w-[74px]">
				<span className="flex items-center space-x-2 bg-[#eaeff0] px-2 py-1 rounded-full">
					<span
						className={`w-2 h-2 rounded-full ${dotColor}`}
					></span>
					<span className="text-gray-800 text-[15px]">
						{type}
					</span>
				</span>
			</td>
		</tr>
	);
};
