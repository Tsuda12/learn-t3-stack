import { z } from "zod"
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./server/api/root";


type RouterOutputs = inferRouterOutputs<AppRouter>;
type allTodosOutput = RouterOutputs["todo"]["readAll"];
export type Todo = allTodosOutput[number];

export const todoInput = z.string({
    required_error: "Digite sua tarefa..."
}).min(1).max(50);