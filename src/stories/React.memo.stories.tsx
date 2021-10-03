import React, {useState} from "react";

export default {
    title: 'React.memo',
}

const Counter = (props: any) => {
    console.log('Counter')
    return <div>{props.count}</div>
}

const CityOrigin = (props: { city: Array<string> }) => {
    console.log("City")
    return <div>{
        props.city.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const City = React.memo(CityOrigin)

export const Example = () => {
    const [counter, setCounter] = useState(0)
    const [city, setCity] = useState(['Minsk', 'Moscow', 'London'])

    const addCity = () => {
        setCity([...city, 'Paris' + new Date().getDate()])
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addCity}>add city</button>
        <Counter count={counter}/>
        <City city={city}/>

    </>
}