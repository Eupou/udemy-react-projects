import InputGroupItem from "./InputGroupItem"

export default function InputGroup({ onValueChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <InputGroupItem
          labelText="Initial investiment"
          investmentArea={(value) => onValueChange(value, "initialInvestment")}
        />
        <InputGroupItem
          labelText="Annual investiment"
          investmentArea={(value) => onValueChange(value, "annualInvestment")}
        />
      </div>
      <div className="input-group">
        <InputGroupItem
          labelText="Expected return"
          investmentArea={(value) => onValueChange(value, "expectedReturn")}
        />
        <InputGroupItem
          labelText="Duration"
          investmentArea={(value) => onValueChange(value, "duration")}
        />
      </div>
    </div>
  )
}
