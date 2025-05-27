import {useState} from 'react'

const Title = ({text}) => <h1><strong>{text}</strong></h1>

const StatisticLine = ({text, value}) => <tr>
    <td>{text}</td>
    <td>{value}</td>
</tr>

const Button = ({button}) => <button onClick={button.onClick}> {button.text} </button>

const Statistics = ({statistics}) => {
    const total = statistics[3].value

    return (
        <div>
            <Title text="Statistics"/>
            {total === 0 ? (
                <p>No feedback given</p>
            ) : (
                <>
                    <table>
                        <tbody>
                        <StatisticLine text={statistics[0].text} value={statistics[0].value}/>
                        <StatisticLine text={statistics[1].text} value={statistics[1].value}/>
                        <StatisticLine text={statistics[2].text} value={statistics[2].value}/>
                        <StatisticLine text={statistics[3].text} value={statistics[3].value}/>
                        <StatisticLine text={statistics[4].text} value={statistics[4].value}/>
                        <StatisticLine text={statistics[5].text} value={statistics[5].value}/>
                        </tbody>
                    </table>
                </>
            )}
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
    const statisticalText = ['Good', 'Neutral', 'Bad', 'All', 'Average', 'Positive']
    const total = good + neutral + bad
    const average = (good + bad * -1) / total
    const positivePercentage = (good / total) * 100

    const buttons = [
        {
            onClick: increaseGood,
            text: statisticalText[0]
        },
        {
            onClick: increaseNeutral,
            text: statisticalText[1]
        },
        {
            onClick: increaseBad,
            text: statisticalText[2]
        }
    ]

    const statistics = [
        {
            text: statisticalText[0],
            value: good
        },
        {
            text: statisticalText[1],
            value: neutral
        },
        {
            text: statisticalText[2],
            value: bad
        },
        {
            text: statisticalText[3],
            value: total
        },
        {
            text: statisticalText[4],
            value: average.toFixed(2)
        },
        {
            text: statisticalText[5],
            value: positivePercentage.toFixed(2) + '%'
        }
    ]

    return (
        <div>
            <Title text="Give feedback"/>
            <Button button={buttons[0]}/>
            <Button button={buttons[1]}/>
            <Button button={buttons[2]}/>
            <Statistics statistics={statistics}/>
        </div>
    )
}

export default App