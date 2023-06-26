import React from "react";
import { List, Typography } from "antd";

import { PostData } from "@/types";

const { Paragraph } = Typography;

interface PostProps {
	post: PostData;
}

export const Post: React.FC<PostProps> = ({ post }) => {
	return (
		<List.Item.Meta
			title={post.title}
			description={
				<Paragraph
					ellipsis={{
						rows: 2,
						expandable: true,
						symbol: <>ещё</>,
					}}
				>
					{post.body}
				</Paragraph>
			}
		/>
	);
};
