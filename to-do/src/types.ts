import { z } from "zod"


export const todoInput = z.string({
    required_error: "Digite sua tarefa..."
}).min(1).max(50);