import { Button } from 'react-bootstrap';

function SubmitButton(props) {
    return (
        <div>
            <Button type="button" variant="outline-primary" className='pl-3'  align="end" onClick={props.handleSubmit}>Submit</Button>
        </div>

    );
}

export default SubmitButton;