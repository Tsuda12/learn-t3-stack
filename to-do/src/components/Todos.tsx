import { api } from "~/utils/api";
import Todo from "./Todo";


export default function Todos() {
    const { data: todos, isLoading, isError } = api.todo.readAll.useQuery()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error!</div>

    return(
        <>
            <div className="bg-slate-800 p-5 text-white rounded mt-10 mb-10">
                {todos.length ? todos.map(todo => {
                        return <Todo key={todo.id} todo={todo} />
                }): "Create your first To Do"}
            </div>
        </>
    )
}