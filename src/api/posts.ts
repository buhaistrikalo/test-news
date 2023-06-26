import axios from "axios";

import { BASE_URL } from "@/constants";

export const getPosts = async (page = 1) => {
	const url = `${BASE_URL}/posts`;
	const params = {
		_limit: 4,
		_page: page,
	};
	const response = await axios.get(url, { params });
	return response.data;
};

export const getPostsById = async (idArray: number[]) => {
	const query = idArray.join("&id=");
	const url = `${BASE_URL}/posts?id=${query}`;
	const response = await axios.get(url);
	return response.data;
};
