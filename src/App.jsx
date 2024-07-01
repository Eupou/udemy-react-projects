import { useEffect, useState } from "react"
import Header from "./components/Header"
import InputGroup from "./components/InputGroup"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment"

const investment = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {
  const [investmentResults, setInvestmentResults] = useState(investment)

  function handleInvestmentValues(value, key) {
    setInvestmentResults((prevInvestments) => {
      return {
        ...prevInvestments,
        [key]: value,
      }
    })
  }

  const calculatedInvestment = calculateInvestmentResults(investmentResults)

  return (
    <>
      <Header />
      <InputGroup onValueChange={handleInvestmentValues} />
      {calculatedInvestment.length > 0 ? (
        <Results
          calculatedInvestment={calculatedInvestment}
          rawInvestment={investmentResults}
        />
      ) : (
        <p className="center">Enter a duration greater than zero</p>
      )}
    </>
  )
}

export default App
