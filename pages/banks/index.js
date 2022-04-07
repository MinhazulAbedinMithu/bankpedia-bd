import Image from "next/image";
import Link from "next/link";
import React from "react";
import { allBanks } from "../../fakeData";

const Banks = () => {
	return (
		<div className="w-full">
			<div className="container mx-auto">
				<h2>All Bank Listings in BD</h2>
				<p>
					There are total 60 banks found in our database while 50 and 10 are
					Private and Public banks respectively. We have filed 57 banks in
					Commercial and 3 banks in Specialized category. 9 Foreign commercial
					banks are currently operating beside of 51 Local banks in Bangladesh.
					Those foreign banks are now operating as the branches of the banks
					which are incorporated in abroad.
				</p>
				<ul>
					<li>
						<Link href="/banks/private-banks">
							<a>Private Banks</a>
						</Link>
					</li>
					<li>
						<Link href="/banks/public-banks">
							<a>Public Banks</a>
						</Link>
					</li>
					<li>
						<Link href="/banks/foreign-banks">
							<a>Foreign Banks</a>
						</Link>
					</li>
					<li>
						<Link href="/banks/specialized-banks">
							<a>Specialized Banks</a>
						</Link>
					</li>
				</ul>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
					laboriosam excepturi, vitae reiciendis sint, rem aut, ab saepe
					voluptates optio earum! Iusto nemo sint, labore rerum cum inventore
					ducimus consequuntur. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Voluptatem ullam sint dicta.
				</p>

				<div className="flex flex-wrap py-16 gap-8">
					{allBanks.map((bank, index) => {
						return (
							<div key={index} className="flex items-center justify-center flex-col border-2 rounded-xl bg-gradient-to-br border-transparent bg-clip-border from-purple-500 via-pink-600 to-emerald-600">
								<Image
									src={bank.details.logo.src}
									height={bank.details.logo.height}
									width={bank.details.logo.width}
									alt="Bank Logo"
								/>
								<h4 className="text-yellow-400 font-bold text-2xl py-2">{bank.title}</h4>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Banks;
