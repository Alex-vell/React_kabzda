import React, {useState} from "react";

export default {
    title: 'useState.demo',
}
function generateData() {
    console.log('generateData')
    return 1
}


export const Example = () => {
    console.log('Example1')

    //const initValue = generateData()
    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}