import Link from "next/link";

const items = [
	{
		title: "Home",
		slug: "/",
	},
	{
		title: "Banks",
		slug: "/banks",
	},
	{
		title: "Loans",
		slug: "/loans",
	},
	{
		title: "Cards",
		slug: "/cards",
	},
	{
		title: "Compare",
		slug: "/compare",
	},
	{
		title: "More",
		slug: "/more",
	},
	{
		title: "About Us",
		slug: "/about-us",
	},
];

const InternalLink = ({ title, slug }) => {
	return (
		<Link href={slug}>
			<a className="text-xl font-bold text">{title}</a>
		</Link>
	);
};

const Header = () => {
	return (
		<div className="w-full bg-cyan-900 text-white">
			<div className="container mx-auto">
				<div className="flex  items-center justify-between">
					<div className="logo">
						<Link href="/">
							<a className="font-bold text-3xl">
								<span className="tracking-wider font-sans">BankPedia</span>
								<span className="text-4xl text-green-500">BD</span>
							</a>
						</Link>
					</div>
					<div className="menu flex items-center justify-center gap-5">
						{items.map((item) => (
							<InternalLink
								key={item.title}
								title={item.title}
								slug={item.slug}
							/>
						))}
					</div>
					<div className="profile">
						<button className="font-bold text-xl px-5 py-2 bg-indigo-800 my-2 rounded-lg">
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
