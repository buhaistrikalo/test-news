import { createEvent, createStore, createEffect, sample } from "effector";
import { persist } from "effector-storage/local";

import { getPostsById } from "@/api/posts";
import { PostData } from "@/types";

export const fetchSavedPosts = createEvent();

const getPostsFx = createEffect({
	handler: getPostsById,
});

export const $savedPosts = createStore<PostData[]>([]).on(
	getPostsFx.doneData,
	(_, result) => [...result]
);

export const savePostId = createEvent<number>();
export const deletePostId = createEvent<number>();
export const $savedPostsId = createStore<number[]>([1])
	.on(savePostId, (prev, id) => [...prev, id])
	.on(deletePostId, (prev, id) => prev.filter((post) => post !== id));

persist({ store: $savedPostsId, key: "postsId" });

sample({
	source: $savedPostsId,
	clock: [fetchSavedPosts, $savedPostsId],
	target: getPostsFx,
});
