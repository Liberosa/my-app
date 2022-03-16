import PropTypes from "prop-types";
import { Dropdown, DropdownButton } from "react-bootstrap";


function CurrencyInput(props) {
    return (
        <div>
            <input type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)} />
            <select value={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency} key={currency}>{currency}</option>
                )))}
            </select>
            
                <DropdownButton title={props.currency} variant="success" onSelect={event => props.onCurrencyChange(event.target.value)}>
                {props.currencies.map((currency => (
                    <Dropdown.Item value={currency} key={currency}>{currency}</Dropdown.Item>
                )))}
                
                </DropdownButton>
            

        </div>

    );
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func,
}

export default CurrencyInput;