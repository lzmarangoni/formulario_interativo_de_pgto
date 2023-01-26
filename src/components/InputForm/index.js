import './InputForm.css'

const InputForm = (props)=>{
    return(
        <div className='inputForm'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}></input>
        </div>
    )
}

export default InputForm