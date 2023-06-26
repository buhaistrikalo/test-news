import { RouterProvider } from "react-router-dom";
import { ConfigProvider, Empty } from "antd";

import { config } from "./constants/theme";
import router from "./routes";
import "./App.scss";
import { appStarted } from "./store/auth";
import { useLayoutEffect } from "react";

const App = () => {
	useLayoutEffect(() => {
		appStarted();
	}, []);

	return (
		<div className="App">
			<ConfigProvider
				theme={config}
				renderEmpty={() => (
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						description={"Нет данных"}
					/>
				)}
			>
				<RouterProvider router={router} />
			</ConfigProvider>
		</div>
	);
};

export default App;
