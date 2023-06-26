import { Divider, Typography } from "antd";

const { Title } = Typography;

interface PageHeaderProps {
	title: string;
	children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
	return (
		<>
			<Title level={1} style={{ marginTop: 0 }}>
				{title}
			</Title>
			{children}
			<Divider />
		</>
	);
};
