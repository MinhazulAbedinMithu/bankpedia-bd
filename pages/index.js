import Head from "next/head";
import Image from "next/image";
import { About, Banner, Header } from "../components";
import { allBanks } from "../fakeData";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className="w-full">
			<Head>
				<title>BankPediaBD</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Banner />
				<div className="w-1/2 mx-auto flex flex-col gap-5 items-center mt-5">
					<h2 className="text-5xl font-bold ">About Us</h2>
					<p>
						Largest online bank portal, providing one-stop information operating
						in Bangladesh. Search your desired banks nearby to get up-to-date by
						easiest steps from leading online resource covering all
						local-foreign, private-public and commercial-specialized banks
						information those are operating their services in Bangladesh.
					</p>
				</div>
				<div className="container mx-auto">
					<h2 className="text-5xl font-bold "> Popular Banks</h2>
					<div className="flex flex-wrap">
						{allBanks.map((bank, index) => {
							return (
								<div key={index}>
									<Image
										src={bank.details.logo.src}
										height={bank.details.logo.height}
										width={bank.details.logo.width}
										alt="Bank Logo"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
}
