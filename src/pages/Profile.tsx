import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";
import { Row } from "antd";

import { ProfileCard } from "@/components/ProfileCard";

import { $loginUserStatus } from "@/store/auth";
import { ProfileData } from "@/types";

const profileData: ProfileData = {
	name: "Иван Иванов",
	email: "ivan.ivanov@example.com",
	bio: "Привет, я Иван, я люблю программировать на JavaScript и TypeScript.",
	avatarUrl: "",
};

export const Profile: React.FC = () => {
	const loginUserStatus = useStore($loginUserStatus);

	const navigate = useNavigate();
    React.useEffect(() => {
		if (!loginUserStatus) {
			navigate("/login");
		}
	}, [loginUserStatus, navigate]);

	return (
		<Row justify="center" align="middle">
			<ProfileCard data={profileData} />
		</Row>
	);
};
