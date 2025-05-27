import { useState } from 'react'

const Title = ({text}) => <h1><strong>{text}</strong></h1>

const Result = ({text, value}) => <div>{text} : {value}</div>

const Button = ({button}) => <button onClick={button.onClick}> {button.text} </button> 

const Statistics = ({statistics}) => {  
  return (
    <div>
      <Title text="Statistics" />
      <Result text={statistics[0].text} value={statistics[0].value} />
      <Result text={statistics[1].text} value={statistics[1].value} />
      <Result text={statistics[2].text} value={statistics[2].value} />
    </div>
  )
}

const App = () => { 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  const statisticasText = ['good', 'neutral', 'bad']

  const buttons = [
    {
      onClick : increaseGood,
      text : statisticasText[0]
    },
    {
      onClick : increaseNeutral,
      text : statisticasText[1]
    },
    {
      onClick : increaseBad,
      text : statisticasText[2]
    }
  ]

  const statistics = [
    {
      text : statisticasText[0],
      value : good
    },
    {
      text : statisticasText[1],
      value : neutral
    },
    {
      text : statisticasText[2],
      value : bad
    }    
  ]

  return (
    <div>
      <Title text="Give feedback" />
      <Button button = {buttons[0]} />
      <Button button = {buttons[1]} />
      <Button button = {buttons[2]} />
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App