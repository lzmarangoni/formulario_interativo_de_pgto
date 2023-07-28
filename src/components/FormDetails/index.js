
import Button from '../Button'
import DoubleInput from '../DoubleInput'
import InputForm from '../InputForm'
import './FormDetails.css'
import { useNavigate } from 'react-router-dom'

const FormDetails = (props) => {
    const navigate = useNavigate()

    const formSubmit = (e) => {
        e.preventDefault()
        console.log("tudo ok")
        navigate('/concluido')
    }

    return (
        <form onSubmit={formSubmit} className='formDetails'>
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
            <Button label="Cadastrar" />

        </form>
    )
}

export default FormDetails