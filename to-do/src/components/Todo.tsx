import type { Todo } from "../types"
import { api } from "~/utils/api"


type TodoProps = {
    todo: Todo
}

export default function Todo({ todo }:TodoProps) {
    const { id, text, done } = todo 
    const trpc = api.useContext()
    const { mutate: doneMutation } = api.todo.update.useMutation({
        onSettled: async () => {
            await trpc.todo.readAll.invalidate()
        }
    })
    const { mutate: deleteMutation } = api.todo.delete.useMutation({
        onSettled: async () => {
            await trpc.todo.readAll.invalidate()
        }
    })

    return(
        <>
            <div className="flex flex-row items-center justify-between mb-2">
                <input 
                    className="mr-2" type="checkbox" name="done" id="done" checked={done} 
                    onChange={(e) => {
                        doneMutation({ id, done: e.target.checked })
                    }}
                />

                <label className="mr-5 text-base" htmlFor="done">{text}</label>

                <button 
                    className="bg-red-600 p-1 rounded"
                    onClick={() => {
                        deleteMutation(id)
                    }}
                >Delete</button>
            </div>
        </>
    )
}