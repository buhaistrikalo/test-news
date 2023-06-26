import React from "react";
import { Card, Avatar, Col, Row, Typography, Space, Skeleton } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ProfileData } from "@/types";
import style from "./ProfileCard.module.scss";
const { Title, Text, Paragraph } = Typography;

interface ProfileCardProps {
	data: ProfileData;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ data }) => {
	const loading = false;
	return (
		<>
			<Card className={style.cardContainer}>
				<Row>
					<Col xs={24} sm={8}>
						<Skeleton
							loading={loading}
							avatar={{ size: 128 }}
							active
							paragraph={false}
							title={false}
							className={style.avatarContainer}
						>
							<div className={style.avatarContainer}>
								<Avatar
									size={128}
									icon={<UserOutlined />}
									src={data.avatarUrl}
								/>
							</div>
						</Skeleton>
					</Col>

					<Col xs={24} sm={16}>
						<div>
							<Skeleton loading={loading} active>
								<Title level={1} className={style.nameLabel}>
									{data.name}
								</Title>
								<Space direction="vertical">
									<Text type="secondary" copyable>
										{data.email}
									</Text>
									<Paragraph
										ellipsis={{
											rows: 2,
											expandable: true,
											symbol: "ещё",
										}}
									>
										{data.bio}
									</Paragraph>
								</Space>
							</Skeleton>
						</div>
					</Col>
				</Row>
			</Card>
		</>
	);
};
