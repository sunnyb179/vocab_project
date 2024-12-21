"use client";
import { useEffect, useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/hello')
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mt-10">Vocab Project</h1>
            <p className="text-lg mt-5">{message || 'Loading...'}</p>
        </div>
    );
}

