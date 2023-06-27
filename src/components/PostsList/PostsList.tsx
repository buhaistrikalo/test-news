import React from "react";
import QueueAnim from "rc-queue-anim";
import { useStore } from "effector-react";
import { List, Row } from "antd";

import { Post } from "./Post";

import { $savedPostsId, deletePostId, savePostId } from "@/store/savedPosts";
import { PostData } from "@/types";
import style from "./PostsList.module.scss";

interface PostsListProps {
	posts?: PostData[];
	title?: string;
	button?: React.ReactNode;
}

export const PostsList: React.FC<PostsListProps> = ({
	posts,
	title,
	button,
}) => {
	const [animationDone, setAnimationDone] = React.useState(false);
	const handleAnimationDone = () => {
		setAnimationDone(true);
	};

	const showButton = posts && posts.length > 0 && animationDone && button;
	const loadMoreButton = showButton ? (
		<Row justify={"center"} className={style.loadMoreButton}>
			{button}
		</Row>
	) : null;

	// Ideally, it is necessary to refactor and extract all the logic and the List.Item into a separate component.
	// But Ant Design doesn't allow doing it without consequences and workarounds.
	const savedPostsId = useStore($savedPostsId);
	const saveButton = React.useCallback(
		(postId: number) =>
			savedPostsId.find((id) => id === postId) ? (
				<a>Удалить</a>
			) : (
				<a>Сохранить</a>
			),
		[savedPostsId]
	);

	return (
		<List
			bordered
			className={style.listContainer}
			header={<b>{title}</b>}
			loadMore={loadMoreButton}
			locale={{ emptyText: "" }}
		>
			{posts && posts?.length > 0 && (
				<QueueAnim
					type={["right", "left"]}
					leaveReverse
					onEnd={handleAnimationDone}
				>
					{posts?.map((post) => (
						<List.Item
							key={`post-${post.id}`}
							actions={[saveButton(post.id)]}
						>
							<Post post={post} />
						</List.Item>
					))}
				</QueueAnim>
			)}
		</List>
	);
};
