import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "../../../components/BankCard";

import { getAllBanks } from "../../../fakeData";

const PrivateBanks = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto">
				<h2>Private Banks in Bangladesh</h2>

				<p>
					There are total 50 private banks found in our database while 9 foreign
					banks are currently operating in Bangladesh beside of 41 local private
					banks. Those foreign banks are now operating as the branches of the
					banks which are incorporated in abroad.
				</p>

				<p>
					You will get all private bank details, such as, bank information,
					branches and ATM booth informaion and location map in Bangladesh,
					various loans and cards, accounts and bank career information of all
					banks. Find your nearest bank branch or ATM location from the page 1of
					5 of the entire listings of private banks in Bangladesh. To reach the
					relevant information, we set different colorful buttons below each
					banks with links connected to the information pages. Its an easy and
					single click step to reach the relevant information.
				</p>

				<div className="flex flex-col w-2/3 mx-auto gap-10 py-10">
					{getAllBanks()
						.filter((bank) => bank.bankType === "private")
						.map((bank, index) => {
							return <BankCard key={index} bank={bank} />;
						})}
				</div>
			</div>
		</div>
	);
};

export default PrivateBanks;
