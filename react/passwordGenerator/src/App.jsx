import { useRef } from "react";
import { useState, useCallback, useEffect } from "react";

function App() {
    const [length, setlength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "",
            str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+-=[]{}~`";
        for (let i = 1; i <= length; i++) {
            let charIndex = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(charIndex);
        }

        setPassword(pass);
    }, [length, numAllowed, charAllowed, setPassword]);

    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numAllowed, charAllowed, passwordGenerator]);

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
                <h1 className="text-center text-white text-3xl my-3">
                    Password generator
                </h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-1 px-3 bg-gray-200 px-4 py-2 text-2xl"
                        placeholder="Password"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyToClipboard}
                        className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-500"
                    >
                        Copy
                    </button>
                </div>
                <div className="flex gap-x-2 text-sm">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={8}
                            max={100}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => setlength(e.target.value)}
                        />
                        <label htmlFor="">Length: {length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numAllowed}
                            id="numberInput"
                            onChange={() => setNumAllowed((prev) => !prev)}
                        />
                        <label htmlFor="">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id="characterInput"
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                        <label htmlFor="">Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;