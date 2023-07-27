import './InputForm.css'

const InputForm = (props)=>{
    return(
        <div className='inputForm'>
            <label >{props.label}</label>
            <input 
                type={props.type} 
                onChange={props.captureValue} 
                style={props.style} 
                placeholder={props.placeholder} 
                pattern={props.pattern} required>
            </input>
        </div>
    )
}

export default InputForm