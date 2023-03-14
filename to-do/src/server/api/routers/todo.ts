import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { todoInput } from "~/types";


export const todoRouter = createTRPCRouter({
  create: publicProcedure
    .input(todoInput)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.create({
        data: {
          text: input,
        }
      })
  }),

  readAll: publicProcedure
    .query(async ({ ctx }) => {
      const todos = await ctx.prisma.todo.findMany();
      return todos.map(({ id, text, done }) => (
        { id, text, done }
      ))
  }),

  update: publicProcedure
    .input(z.object({
      id: z.string(),
      done: z.boolean()
    }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          done: input.done
        }
      })
    }),

  delete: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.todo.delete({
        where: {
          id: input
        }
      })
  })
});
