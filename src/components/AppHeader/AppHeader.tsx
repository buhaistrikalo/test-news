import React from "react";
import { Layout } from "antd";

import { NavManu } from "@/components/ui/NavMenu";

import { HEADER_MENU } from "@/constants";
import style from "./AppHeader.module.scss";

const { Header } = Layout;

export const AppHeader: React.FC = () => {
	return (
		<Header className={style.header}>
			<NavManu theme="dark" mode="horizontal" items={[...HEADER_MENU]} />
		</Header>
	);
};
