import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

function App() {
    const query = gql`
        query getAllTodos {
            getTodos {
                title
                completed
                user {
                    name
                    email
                    username
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(query);

    console.log({ loading, error, data });
    console.log(
        data?.getTodos.forEach((todo) => console.log(todo.user.username))
    );
    return (
        <div className="min-h-screen bg-neutral-900 w-full flex justify-center items-center">
            {loading && <div className="text-green-600"> Loading... </div>}
            {data && (
                <div className="text-green-600 flex flex-col gap-4 py-4">
                    {data.getTodos.map((todo) => (
                        <div className="border-1 border-green-600 w-xl px-6 py-4 flex flex-col justify-center items-center">
                            <div className="text-green-100">
                                Title: {todo.title}
                            </div>
                            <div className="text-green-100">ID: {todo.id}</div>
                            <div className="text-green-100">
                                Completed: {todo.completed}
                            </div>
                            <div className="text-green-100">
                                User: name: {todo.user.name}, username:{" "}
                                {todo.user.username}, email: {todo.user.email}
                            </div>
                        </div>
                    ) )}
                </div>
            )}
            {error && <div className="text-red-500">Error: {error}</div>}
        </div>
    );
}

export default App;
