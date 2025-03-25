import { useState } from "react"

interface CountProps{
    initialValue?: number
}

export function Count({initialValue = 0}: CountProps) {

    const [count, setCount] = useState<number>(initialValue)

    const handleIncrement = () => setCount((prev) => prev + 1)
    const handleDecrement = () => setCount((prev) => prev - 1)

    return (
        <>
            <p data-testid='count-value'>{count}</p>
            <button onClick={handleIncrement} data-testid='increment-button'>Increment</button>
            <button onClick={handleDecrement} data-testid='decrement-button'>Decrement</button>
        </>
    )
}