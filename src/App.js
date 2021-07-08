import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>APPLICATION</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>PLUS</button>
            <button onClick={() => setCount(count - 1)}>MINUS</button>
        </>
    )
}

export default App;