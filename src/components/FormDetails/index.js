
import DoubleInput from '../DoubleInput'
import InputForm from '../InputForm'
import './FormDetails.css'

const FormDetails = (props)=>{
   

    return(
        <form className='formDetails'>
            <InputForm captureValue={props.captureCardNumber} label='Titular do Cartão' placeholder='insira o nome exatamente como está no cartão'/>
            <InputForm captureValue={props.captureHolderCard} label='Numero do Cartão' placeholder='ex: 1234 1234 1234 1234'/>
            <div>
            <DoubleInput/>
            <InputForm label='cvv'/>
            </div>
            
      
        </form>
    )
}

export default FormDetails