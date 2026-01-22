import { useState } from "react";
import Button from "./components/Button.jsx";

function App() {
    const [color, setColor] = useState("#242424");

    return (
        <>
            <div
                className="w-full h-screen duration-200 flex justify-center items-center"
                style={{ backgroundColor: color }}
            >
                <div className="mx-auto my-auto w-auto h-auto bg-gray-300 flex gap-5 p-5 rounded-2xl flex-wrap">
                    <Button
                        color="bg-red-500"
                        textColor="text-gray-300"
                        title="Red"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-green-500"
                        textColor="text-gray-300"
                        title="Green"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-blue-500"
                        textColor="text-gray-300"
                        title="Blue"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-green-800"
                        textColor="text-gray-300"
                        title="Olive"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-gray-500"
                        textColor="text-gray-300"
                        title="Gray"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-yellow-500"
                        textColor="text-black"
                        title="Yellow"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-pink-500"
                        textColor="text-black"
                        title="Pink"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-purple-500"
                        textColor="text-gray-300"
                        title="Purple"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-purple-200"
                        textColor="text-black"
                        title="Lavender"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-white"
                        textColor="text-black"
                        title="White"
                        setColor={setColor}
                    />
                    <Button
                        color="bg-black"
                        textColor="text-gray-300"
                        title="Black"
                        setColor={setColor}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
