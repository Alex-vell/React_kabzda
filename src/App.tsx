import React, {useState} from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App(props: any) {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    return (
    <div>
        <OnOff on={switchOn} onClick={setSwitchOn} />
        <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}

        <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}
                   onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}
                   items={[{title: 'Alex', value: 1}, {title: 'Natali', value: 2}, {title: 'Anna', value: 3}]}
        onClick={() => {}}/>
        <UncontrolledAccordion titleValue={"Users"}/>

        <Rating value={ratingValue} onClick={setRatingValue}/>
        <UncontrolledRating onChange={setRatingValue}/>




        {/*<UncontrolledOnOff on={false}/>*/}
        {/*<PageTitle title={"This is APP component"}/>
        <PageTitle title={"My friends"}/>
        Article 1
        <Rating value={3}/>*/}
        {/*<Accordion titleValue={"Menu"} collapsed={true}/>
        <Accordion titleValue={"Users"} collapsed={false}/>
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />*/}
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitlePropsType")
    return <h1>{props.title}</h1>
}



export default App;
