import * as React from 'react';
import { useState } from 'react';

const Switch = ({ children }) => {
    return React.createElement("button", null, children);
};

const useConter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return { count, increment, decrement };
};

export { Switch, useConter };
