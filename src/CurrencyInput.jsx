import PropTypes from "prop-types";
import { Form, Row,Col } from "react-bootstrap";

function CurrencyInput(props) {
  return (
    <div>
      <Form>
        <Row className="align-items-center">
          <Col xs="2">
            <Form.Control
              className="mb-2"
              value={props.amount}
              onChange={(event) => props.onAmountChange(event.target.value)}
            />

            <Form.Select
              size="sm"
              value={props.currency}
              onChange={(event) => props.onCurrencyChange(event.target.value)}
            >
              {props.currencies.map((currency) => (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
