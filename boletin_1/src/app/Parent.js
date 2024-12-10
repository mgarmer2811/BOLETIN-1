import { useState } from "react";

export default function Parent() {
    const [message, setMessage] = useState("");

    const handleMessage = (msg) => {
        setMessage(msg);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Message from Child: {message}</p>
            <Child sendMessage={handleMessage} />
        </div>
    );
}

function Child(props) {
    return (
        <div>
            <h2>Child Component</h2>
            <button onClick={() => props.sendMessage("Hello from Child!")}>
                Send Message to Parent
            </button>
        </div>
    );
}
