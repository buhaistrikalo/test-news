import { createBrowserRouter } from "react-router-dom";

import { BaseLayout } from "@/layout/BaseLayout";
import { Home, Login, News, Profile } from "@/pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{ path: "news", element: <News /> },
			{ path: "profile", element: <Profile /> },
			{ path: "", element: <Home /> },
		],
	},
	{ path: "/login", element: <Login /> },
]);

export default router;
