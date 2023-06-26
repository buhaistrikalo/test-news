import { Card, Col, Row, Space } from "antd";

import { QRLogo } from "@/components/ui/QRLogo";
import { LoginForm } from "@/components/LoginForm";

export const Login = () => {
	return (
		<Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
			<Col>
				<Card>
					<Space direction="vertical" align="center">
						<QRLogo size={128} />
						<LoginForm />
					</Space>
				</Card>
			</Col>
		</Row>
	);
};
