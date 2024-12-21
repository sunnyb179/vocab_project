import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:3001")
            .then((response) => response.text())
            .then((data) => setMessage(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <p>{message || "Loading..."}</p>
            </header>
        </div>
    );
}

export default App;

