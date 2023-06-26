import React from "react";
import { Button, Row } from "antd";

import { PageHeader } from "@/components/ui/PageHeader";
import { PostsList } from "@/components/PostsList";

import { useStore } from "effector-react";
import { $posts, fetchPosts, resetPosts } from "@/store/posts";

export const News = () => {
	const posts = useStore($posts);

	React.useEffect(() => {
		fetchPosts();
		return () => {
			resetPosts();
		};
	}, []);

	const fetchMore = () => {
		fetchPosts();
	};

	return (
		<div>
			<PageHeader title="Новости" />
			<Row justify="center">
				<PostsList
					posts={posts}
					button={
						<Button type="primary" onClick={fetchMore}>
							Загрузить еще
						</Button>
					}
				/>
			</Row>
		</div>
	);
};
