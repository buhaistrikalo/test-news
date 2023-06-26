import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "effector-react";
import { Form, Input, Button, Grid } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { $loginUserStatus, loginUserFx } from "@/store/auth";
import style from "./LoginForm.module.scss";

const { useBreakpoint } = Grid;

interface LoginFormValues {
	username: string;
	password: string;
}

export const LoginForm: React.FC = () => {
    const loginUserStatus = useStore($loginUserStatus);
	const { xs: mobile } = useBreakpoint();
    
	const onFinish = (values: LoginFormValues) => {
        loginUserFx(values);
	};
    
    const navigate = useNavigate();
	React.useEffect(() => {
		if (loginUserStatus) {
			navigate("/profile");
		}
	}, [loginUserStatus, navigate]);

	return (
		<Form
			name="login"
			initialValues={{ remember: true }}
			className={style.loginForm}
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: "Пожалуйста, введите ваше имя пользователя!",
					},
				]}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Имя пользователя"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "Пожалуйста, введите ваш пароль!",
					},
				]}
			>
				<Input.Password
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Пароль"
				/>
			</Form.Item>

			<Form.Item className={style.buttonContainer}>
				<Button
					type="primary"
					htmlType="submit"
					block={mobile}
					size={mobile ? "large" : "middle"}
				>
					Войти
				</Button>
			</Form.Item>
		</Form>
	);
};
