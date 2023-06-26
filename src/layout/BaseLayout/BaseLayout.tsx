import { Outlet } from "react-router-dom";

import { AppHeader } from "@/components/AppHeader";

import style from "./BaseLayout.module.scss";

export const BaseLayout: React.FC = () => {
	return (
		<div>
			<AppHeader />
			<div className={style.content}>
				<Outlet />
			</div>
		</div>
	);
};
