import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect every render')
        //document.title = 'counter.toString()'
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        //document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and change counter')
        if(counter !== 1){
            document.title = counter.toString();
        }

    }, [counter])

    return <>
        {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>

    </>
}

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetTimeoutExample')

    useEffect(() => {

        setTimeout(() => {
            document.title = counter.toString()
        }, 1000)

    }, [counter])




    return <>
        {counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>

    </>
}

export const SetIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('SetIntervalExample')

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)

    }, [])


    return <>
        counter: {counter}- fake: {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button>*/}

    </>
}