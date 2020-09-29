import React, { useState } from "react"
import styled from "styled-components"
/*kolla om det finns props size om inte sätt 3 rem*/

const Headeing = styled.h1`
  font-size: ${props => props.size || "3rem"};
  color: ${props => (props.warning ? "red" : "black")};
`

const Button = styled.button`
  background: white;
  color: palevioletred;
  font-size: 1.5rem;
  margin: 2em;
  padding: 0.5rem 1.5rem;
  border: 2px solid palevioletred;
  border-radius: 6px;
`

const ButtonSuccess = styled(Button)`
  color: white;
  background: blue;
  border-color: blue;
`

const ButtonFilled = styled(Button)`
  color: white;
  background: palevioletred;
`

function App() {
  const [clickCount, setClickCount] = useState(1)

  function handleOnClick() {
    setClickCount(clickCount + 1)
  }
  return (
    <div>
      <Headeing size="4rem">Hej</Headeing>
      <Headeing size={`${clickCount}rem`}>Hej då</Headeing>
      <Headeing warning>Hej igen</Headeing>

      <Button>A Button</Button>
      <ButtonSuccess>A Success Button</ButtonSuccess>
      <ButtonFilled>A Filled Button</ButtonFilled>
      <ButtonFilled onClick={handleOnClick}>
        A Filled Button med onclick
      </ButtonFilled>
    </div>
  )
}

export default App
