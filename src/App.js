import React, { useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async () => {
        try {
            const res = await fetch('https://bfhl-backend-1-oosf.onrender.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ data: JSON.parse(input) })
            });
            const result = await res.json();
            setResponse(result);
        } catch (error) {
            alert("Invalid JSON or Server Error");
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h2>BFHL Challenge</h2>
            <textarea 
                rows="5" 
                cols="30" 
                onChange={(e) => setInput(e.target.value)} 
                placeholder='Enter JSON Data'
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
        </div>
    );
}

export default App;
