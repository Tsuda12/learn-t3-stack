import type { Todo } from "../types"


type TodoProps = {
    todo: Todo
}

export default function Todo({ todo }:TodoProps) {
    const { id, text, done } = todo

    return(
        <>
            <div className="flex flex-row justify-center items-center">
                <input className="mr-2" type="checkbox" name="done" id="done" checked={done} />

                <label className="mr-5" htmlFor="done">{text}</label>

                <button className="bg-red-600 p-1 rounded">Delete</button>
            </div>
        </>
    )
}