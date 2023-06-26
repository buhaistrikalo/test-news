import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "effector-react";
import { Typography, Button, Row, Col } from "antd";

import { PageHeader } from "@/components/ui/PageHeader";
import { PostsList } from "@/components/PostsList";

import { $posts, fetchPosts, resetPosts } from "@/store/posts";
import { $savedPosts, fetchSavedPosts } from "@/store/savedPosts";

const { Paragraph } = Typography;

export const Home = () => {
	const posts = useStore($posts);
	const savedPosts = useStore($savedPosts);

	React.useEffect(() => {
		fetchSavedPosts();
		fetchPosts();
		return () => {
			resetPosts();
		};
	}, []);

	return (
		<>
			<PageHeader title="Добро пожаловать на наш новостной сайт!">
				<Paragraph>
					Здесь вы найдете самые актуальные новости на любую тему.
				</Paragraph>
			</PageHeader>
			<Row gutter={[16, 16]} justify="center">
				<Col xs={24} lg={16}>
					<PostsList
						title="Последние новости"
						posts={posts}
						button={
							<Button type="primary">
								<Link to="/news">Просмотреть все новости</Link>
							</Button>
						}
					/>
				</Col>

				<Col xs={24} lg={8}>
					<PostsList title="Сохраненные новости" posts={savedPosts} />
				</Col>
			</Row>
		</>
	);
};
