import Image from "next/image";
import React from "react";
import { getAllSlugs, getBankInfo } from "../../fakeData";

const BankDetails = ({ bankInfo }) => {
	return (
		<div>
			<h2>{bankInfo.title}</h2>
			<Image
				src={bankInfo.details.logo.src}
				height={bankInfo.details.logo.height}
				width={bankInfo.details.logo.width}
				alt="Bank Logo"
			/>
		</div>
	);
};

export default BankDetails;

export const getStaticPaths = () => {
	const paths = getAllSlugs();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = ({ params }) => {
	const bankInfo = getBankInfo(params.slug);
	return {
		props: {
			bankInfo,
		},
	};
};
