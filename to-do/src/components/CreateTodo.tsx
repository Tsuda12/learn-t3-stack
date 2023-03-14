import { use, useContext, useState } from "react";
import { api } from "~/utils/api";
import { todoInput } from "~/types";
import { toast } from "react-hot-toast";


export default function CreateTodo() {
    const [newTodo, setNewTodo] = useState("")
    const trpc = api.useContext()
    const { mutate } = api.todo.create.useMutation({
        onSettled: async () => {
            await trpc.todo.readAll.invalidate()
        }
    })

    return (
        <div>
            <form 
                className="flex flex-row"
                onSubmit={(e) => {
                    e.preventDefault()
                    const result = todoInput.safeParse(newTodo)

                    if(!result.success) {
                        alert("Error at create!")
                        return
                    }
                    
                    if(result.success) {
                        alert("Sucess at create")
                    }

                    // Create todo mutation
                    mutate(newTodo)
                }}>
                    <input 
                        className="p-1 bg-slate-800 text-slate-100 mr-2 rounded"
                        type="text" name="new-todo" id="new-todo"
                        value={newTodo}
                        onChange={(e) => {
                            setNewTodo(e.target.value)
                        }}
                    />

                    <button
                        className="bg-blue-600 text-white p-2 rounded"
                    >
                        Create
                    </button>
            </form>
        </div>
    )
}