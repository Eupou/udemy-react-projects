import { formatter } from "../util/investment"

export default function Results({ calculatedInvestment, rawInvestment }) {
  console.log(calculatedInvestment)
  const initialInvestment = rawInvestment.initialInvestment

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Insvestment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedInvestment.map((value) => {
          const totalInterest =
            value.valueEndOfYear -
            value.annualInvestment * value.year -
            initialInvestment
          const totalInvested =
            initialInvestment + value.annualInvestment * value.year
          return (
            <tr key={value.year}>
              <td>{value.year}</td>
              <td>{formatter.format(value.valueEndOfYear)}</td>
              <td>{formatter.format(value.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
