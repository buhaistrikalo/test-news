import { createEffect, createEvent, createStore, sample } from "effector";
import { persist } from "effector-storage/local";
import { message } from "antd";

import { postLogin, refreshToken } from "@/api/auth";

export const appStarted = createEvent();
export const loginUserFx = createEffect(postLogin);
export const refreshTokenFx = createEffect(refreshToken);

export const validateTokensFx = createEffect((status: boolean) => status);

export const $loginUserStatus = createStore<boolean>(false)
	.on(validateTokensFx.done, (_, { result }) => result)
	.on(loginUserFx.done, () => true);

const $accessToken = createStore<string>("")
	.on(loginUserFx.done, (_, { result }) => result.accessToken)
	.on(refreshTokenFx.done, (_, { result }) => result.accessToken);
const $refreshToken = createStore<string>("")
	.on(loginUserFx.done, (_, { result }) => result.refreshToken)
	.on(refreshTokenFx.done, (_, { result }) => result.refreshToken);

// error handler
const errorFx = createEffect((msg: string) => message.error(msg));
const successFx = createEffect((msg: string) => message.success(msg));

persist({ store: $accessToken, key: "accessToken" });
persist({ store: $refreshToken, key: "refreshToken" });

sample({
	clock: appStarted,
	source: [$accessToken, $refreshToken],
	target: validateTokensFx,
	fn: ([accessToken, refreshToken]) => !!(accessToken && refreshToken),
});

sample({
	clock: loginUserFx.failData,
	target: errorFx,
	fn: (error) => error.toString(),
});

sample({
	clock: loginUserFx.done,
	target: successFx,
	fn: () => "Вы успешно вошли",
});
