import { BASE_URL } from "@/constants";
import axios from "axios";

export const postLogin = async (params: {
	username: string;
	password: string;
}) => {
	const { username, password } = params;
	// const url = `${BASE_URL}/login`;
	// const body = {
	//     username,
	//     password,
	// };
	// const response = await axios.post(url, body);
	// return response.data;
	if (username.toLowerCase() === "admin" && password === "12345") {
		return { accessToken: "12345", refreshToken: "12345" };
	}
	throw new Error("Имя пользователя или пароль введены не верно");
};

export const refreshToken = async () => {
	// const url = `${BASE_URL}/refresh`;
	// const response = await axios.get(url);
	// return response.data;
	return { accessToken: "12345", refreshToken: "12345" };
};
