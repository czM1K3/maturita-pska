import React, { FC, useState } from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { getPostsForSort, PostsForSort } from "../lib/posts";
import Layout from "../Components/Layout";

type HomeProps = {
	allPostsData: PostsForSort[];
};

const Home: FC<HomeProps> = ({ allPostsData }) => {
	return (
		<div>
			<Layout>
				<div className="container border p-4 pt-5">
					<h1 className="text-center">PSKA</h1>

					<div className="list-group">
						{allPostsData.map((item) => (
							<Link key={item.id}  href={`/${item.id}`}>
								<a className="list-group-item list-group-item-action">
									{item.title}
								</a>
							</Link>
						))}
					</div>
				</div>
			</Layout>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getPostsForSort().map(x => ({
		id: x.id,
		title: x.title,
	}));
	return {
		props: {
			allPostsData,
		},
	};
};

export default Home;
