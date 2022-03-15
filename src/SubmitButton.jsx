function SubmitButton(props) {
return(
    <div>
        <input type="button" value="Submit" onClick={props.handleSubmit}/>
    </div>

);
}

export default SubmitButton;