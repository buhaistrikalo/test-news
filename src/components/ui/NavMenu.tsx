import { useLocation, useNavigate } from "react-router-dom";
import { Menu, MenuProps } from "antd";

export const NavManu: React.FC<MenuProps> = (props) => {
	const { pathname } = useLocation();
	const correctPath = pathname.split("/").join("");
	const navigate = useNavigate();

	const handleClick: MenuProps["onClick"] = (item) => {
		const { keyPath } = item;
		const path = keyPath.join("/");
		navigate(`/${path}`);
	};

	return (
		<Menu
			{...props}
			selectedKeys={[correctPath]}
			onClick={handleClick}
			mode="horizontal"
			disabledOverflow
		/>
	);
};
