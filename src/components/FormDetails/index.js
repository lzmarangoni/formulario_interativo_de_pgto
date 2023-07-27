
import Button from '../Button'
import DoubleInput from '../DoubleInput'
import InputForm from '../InputForm'
import './FormDetails.css'

const FormDetails = (props)=>{
    

    return(
        <form className='formDetails'>
            <InputForm 
                captureValue={props.captureHolderCard} 
                label='Titular do Cartão' 
                placeholder='insira o nome exatamente como está no cartão'
            />
            <InputForm 
                captureValue={props.captureCardNumber} 
                label='Numero do Cartão' 
                placeholder='ex: 1234 1234 1234 1234' type='text'
            />
            <div>
            <DoubleInput 
                captureMonth={props.captureMonth} 
                captureYear={props.captureYear}
            />
            <InputForm 
                captureValue={props.captureCvv} 
                label='cvv'
            />
            </div>
            <Button label="Cadastrar" to='/concluido'/>
      
        </form>
    )
}

export default FormDetails