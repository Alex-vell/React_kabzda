import React, {useEffect, useState} from "react";

type PropsType = {

}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState<Date>(new Date())

    useEffect(() => {

        const intervalClockId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => clearInterval(intervalClockId)

    }, [])



    return <div>
        Clock: {date?.toLocaleTimeString()}
    </div>
}