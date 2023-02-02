import DoubleInput from '../DoubleInput'
import InputForm from '../InputForm'
import './FormDetails.css'

const FormDetails = ()=>{


    return(
        <form className='formDetails'>
            <InputForm label='Titular do Cartão' placeholder='insira o nome exatamente como está no cartão'/>
            <InputForm label='Numero do Cartão' placeholder='ex: 1234 1234 1234 1234'/>
            <div>
            <DoubleInput/>
            <InputForm label='cvv'/>
            </div>
            
      
        </form>
    )
}

export default FormDetails