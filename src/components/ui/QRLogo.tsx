import { Link } from "react-router-dom";
import { QRCode, theme } from "antd";

import { AutorLink } from "@/constants";

const { useToken } = theme;

interface QRLogoProps {
	size?: number;
	color?: string;
}

export const QRLogo: React.FC<QRLogoProps> = ({ size, color }) => {
	const {
		token: { colorInfoText },
	} = useToken();

	return (
		<Link to={AutorLink} aria-label='Ссылка на телеграм автора'>
			<QRCode
				size={size}
				value={AutorLink}
				bordered={false}
				color={color || colorInfoText}
			/>
		</Link>
	);
};
