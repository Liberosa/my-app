import PropTypes from "prop-types";
<<<<<<< HEAD


function CurrencyInput(props) {
    return (
        <div>
            <input type="text" value={props.amount} onChange={event => props.onAmountChange(event.target.value)} />
            <select value={props.currency} onChange={event => props.onCurrencyChange(event.target.value)}>
                {props.currencies.map((currency => (
                    <option value={currency} key={currency}>{currency}</option>
                )))}
            </select>
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
=======
import { Form, Row, Col, Container } from "react-bootstrap";

function CurrencyInput(props) {
  return (
    <div>
      <Container>
        <Form className="m-0">
          <Row className="align-items-center">
            <Col xs="auto" className="p-0">
              <Form.Control
                className="m-0"
                size="sm"
                value={props.amount}
                onChange={(event) => props.onAmountChange(event.target.value)}
              />
               </Col>
               <Col xs="auto" className="col-xs-3 p-0">
              <Form.Select
                className="m-0"
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
      </Container>
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
>>>>>>> b06ac7cfe898e30ddd2bc9fa6ae74e4e9f30bde1
