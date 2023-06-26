import { createEvent, createStore, createEffect, sample } from "effector";
import { getPosts } from "@/api/posts";
import { PostData } from "@/types";

export const resetPosts = createEvent();
export const fetchPosts = createEvent();

const getPostsFx = createEffect(getPosts);

export const $posts = createStore<PostData[]>([])
	.on(getPostsFx.doneData, (prev, result) => [...prev, ...result])
	.reset(resetPosts);

// page number
const $pageNumber = createStore<number>(1)
	.on(getPostsFx.doneData, (nextPage: number) => nextPage + 1)
	.reset(resetPosts);

// samples
sample({
	source: $pageNumber,
	clock: fetchPosts,
	target: getPostsFx,
});
