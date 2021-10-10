import React, {useMemo, useState} from "react";

export default {
    title: 'useMemo'
}

export const DifficultCountingExampel = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const CityOrigin = (props: { city: Array<string> }) => {
    console.log("City")
    return <div>{
        props.city.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const City = React.memo(CityOrigin)

export const HelpsToRreactMemo = () => {
    console.log('Helps')
    const [counter, setCounter] = useState(0)
    const [city, setCity] = useState(['Minsk', 'Moscow', 'London'])

    const newArray = useMemo(() => {
        const newArray = city.filter(c => c.toLowerCase().indexOf('a') > -1)
    }, [city])

    const addCity = () => {
        setCity([...city, 'Paris' + new Date().getDate()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addCity}>add city</button>
        {counter}
        <City city={city}/>

    </>
}
