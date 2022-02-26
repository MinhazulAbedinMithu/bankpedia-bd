import Image from "next/image";
import React from "react";

import bannerDemo from "../public/images/banner-demo.png";

const Banner = () => {
	return (
		<div className="w-full py-20 bg-gradient-to-t from-sky-800 via-cyan-800 to-teal-600">
			<div className="container mx-auto flex items-center justify-center">
				{slideItems.map((item) => (
					<Slider key={item.title} item={item} />
				))}
			</div>
		</div>
	);
};

export default Banner;

const Slider = ({ item }) => {
	const { subtitle, title, description } = item;
	return (
		<div className="w-full flex items-center justify-between">
			<div className="w-7/12 flex flex-col gap-4">
				<h4 className="text-2xl font-thin">{subtitle}</h4>
				<h2 className="text-4xl font-bold">{title}</h2>
				<p className="text-lg">{description}</p>
			</div>
			<div className="w-5/12">
				<Image src={bannerDemo} alt="Banner" />
			</div>
		</div>
	);
};

const slideItems = [
	{
		subtitle: "subtitle",
		title: "Title Goes Here",
		description:
			"dolor sit amet consectetur adipisicing elit. Quia rerum nihil iure nesciunt nemo odit. Recusandae qui perferendis cumque molestiae animi dolor rerum natus corrupti sunt earum iure reprehenderit molestias in, nulla iusto eligendi excepturi",
	},
];
