import React from "react";
import { useState, useEffect, useRef } from "react";
import {
  createSmartappDebugger,
  createAssistant,
} from "@sberdevices/assistant-client";
import { H2, Button } from '@sberdevices/plasma-ui';

import card1  from "./images/Card1.png"
import card2  from "./images/Card2.png"
import card3  from "./images/Card3.png"
import card_0 from "./images/card_0.png"
import card_1 from "./images/card_1.png"
import card_2 from "./images/card_2.png"
import card_3 from "./images/card_3.png"
import card_4 from "./images/card_4.png"
import card_5 from "./images/card_5.png"
import card_6 from "./images/card_6.png"
import card_7 from "./images/card_7.png"
import card_8 from "./images/card_8.png"
import card_9 from "./images/card_9.png"
import card_10 from "./images/card_10.png"
import card_11 from "./images/card_11.png"
import card_12 from "./images/card_12.png"
import card_13 from "./images/card_13.png"
import card_14 from "./images/card_14.png"
import card_15 from "./images/card_15.png"
import card_16 from "./images/card_16.png"
import card_17 from "./images/card_17.png"
import card_18 from "./images/card_18.png"
import card_19 from "./images/card_19.png"
import card_20 from "./images/card_20.png"
import card_21 from "./images/card_21.png"
import transcript_0  from "./images/transcript_0.png"
import transcript_1  from "./images/transcript_1.png"
import transcript_2  from "./images/transcript_2.png"
import transcript_3  from "./images/transcript_3.png"
import transcript_4  from "./images/transcript_4.png"
import transcript_5  from "./images/transcript_5.png"
import transcript_6  from "./images/transcript_6.png"
import transcript_7  from "./images/transcript_7.png"
import transcript_8  from "./images/transcript_8.png"
import transcript_9  from "./images/transcript_9.png"
import transcript_10  from "./images/transcript_10.png"
import transcript_11  from "./images/transcript_11.png"
import transcript_12  from "./images/transcript_12.png"
import transcript_13  from "./images/transcript_13.png"
import transcript_14  from "./images/transcript_14.png"
import transcript_15  from "./images/transcript_15.png"
import transcript_16  from "./images/transcript_16.png"
import transcript_17  from "./images/transcript_17.png"
import transcript_18  from "./images/transcript_18.png"
import transcript_19  from "./images/transcript_19.png"
import transcript_20  from "./images/transcript_20.png"
import transcript_21  from "./images/transcript_21.png"

import './App.css';
import styled from "styled-components";


const initializeAssistant = (getState/*: any*/) => {
  if (process.env.NODE_ENV === "development") {
    return createSmartappDebugger({
      token: process.env.REACT_APP_TOKEN ?? "",
      initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
      getState,
    });
  }
  return createAssistant({ getState });
};

function App() {
  const [side, setSide] = useState(true);
  const [side2, setSide2] = useState(true);
  const [side3, setSide3] = useState(true);
  const [num, setNum] = useState(1);
  const [num2, setNum2] = useState(1);
  const [num3, setNum3] = useState(1);
  const [newCards, setNewCards] = useState(false)

  const transcript = [
    transcript_0,
    transcript_1,
    transcript_2,
    transcript_3,
    transcript_4,
    transcript_5,
    transcript_6,
    transcript_7,
    transcript_8,
    transcript_9,
    transcript_10,
    transcript_11,
    transcript_12,
    transcript_13,
    transcript_14,
    transcript_15,
    transcript_16,
    transcript_17,
    transcript_18,
    transcript_19,
    transcript_20,
    transcript_21,
  ]
    
  const cards = [
    card_0,
    card_1,
    card_2,
    card_3,
    card_4,
    card_5,
    card_6,
    card_7,
    card_8,
    card_9,
    card_10,
    card_11,
    card_12,
    card_13,
    card_14,
    card_15,
    card_16,
    card_17,
    card_18,
    card_19,
    card_20,
    card_21
  ];
  
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  var assistant = useRef();

  var state = {
    notes: [],
    };

  const Header = styled(H2)`
    color: #D2D2D2;
    text-shadow: 1px 1px 2px grey, 0 0 2em #fffafaf6;
    text-align: center;
    padding-top: 1rem
  `
  const getStateForAssistant = () => {
    console.log("getStateForAssistant: this.state:", state);
    const state_ = {
    item_selector: {
    items: state.notes.map(({ id, title }, index) => ({
    number: index + 1,
    id,
    title,
    })),
    },
    };
    console.log("getStateForAssistant: state:", state);
    return state_;
    };

    useEffect(() => {
      assistant.current = initializeAssistant(() => getStateForAssistant());
      assistant.current.on("start", (event) => {
      console.log(`assistant.on(start)`, event);
      });
      assistant.current.on("data", (event /*: any*/) => {
        if (event.type == "smart_app_data") {
          console.log(event);
          if (event.sub != undefined) {
            console.log("Sub", event.sub);
            
          } else if (event.user_id != undefined) {
            console.log("UserId", event.user_id);
          }
        }
        console.log(`assistant.on(data)`, event);
        const { action } = event;
  
        dispatchAssistantAction(action);
  });
    },
    []);
    
    const dispatchAssistantAction = async (action) => {
      console.log("dispatchAssistantAction", action);
      if (action) {
        switch (action.type) {
          case "flip_card":
            console.log(action.data)
            switch (action.data){
              case "1":
                setSide(false)
                break;
              case "2":
                setSide2(false)
                break;
              case "3":
                setSide3(false)
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
      }
    };

    useEffect(() => {
      setNum(getRandomInt(21));
      setNum2(getRandomInt(21));
      setNum3(getRandomInt(21));
    },
    [newCards]);

    const createNewCards = () => {
      setNewCards(!newCards);
      setSide(true)
      setSide2(true)
      setSide3(true)
    }

  const ButtonCard = styled(Button)`
    position: fixed;
    bottom: 10rem;
    right: 2rem
  `
  return (
  <React.Fragment>

  <Header>Расклад "Три карты"</Header>
  <div class="card__container"> 
    


    {side ? 
        <div class="card" onClick={()=>{setSide(false)}}>
          <img src={card1} class="card_photo" alt="Рубашка" />
        </div>
      :
      <div class="layer">
          <div class="card">
            <img src={cards[num]} class="card_photo" alt="Карта" />
          </div>
          <div class="card">
            <img src={transcript[num]} class="card_photo" alt="Расшифровка" />
          </div>
      </div> 
  }
   

  {side2 ? 
        <div class="card" onClick={()=>{setSide2(false)}}>
          <img src={card2} class="card_photo" alt="Рубашка" />
      </div>
   : (<div class="layer2">
   <div class="card">
   <img src={cards[num2]} class="card_photo" alt="Карта" />
   </div>
   <div class="card">
    <img src={transcript[num2]} class="card_photo" alt="Расшифровка" />
   </div>
 </div>)
  }
  

  {side3 ? 
        <div class="card card--right" onClick={()=>{setSide3(false)}}>
          <img src={card3} class="card_photo" alt="Рубашка" />
        </div>
   : (<div class="layer3">
   <div class="card card--right">
   <img src={cards[num3]} class="card_photo" alt="Карта" />
   </div>
   <div class="card card--right">
     <img src={transcript[num3]} class="card_photo" alt="Расшифровка" />
   </div>
 </div>)
  }
  </div>

  <ButtonCard onClick={createNewCards} text="Обновить"/>
  </React.Fragment>
  )
}

export default App;
