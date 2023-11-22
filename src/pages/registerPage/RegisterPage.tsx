import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form'
import Wrapper from '../../components/wrapper/Wrapper';

const RegisterPage = () => {

    const navigate = useNavigate()

    const handleRegister =() =>{
        navigate('/')
    }

  return (
    <Wrapper>
        <Form title={'Регистрация'} handle={handleRegister}/>
        <p>Уже есть аккаунт?</p>
        <Link to={"/login"} >
            Войдите
        </Link>
    </Wrapper>
  )
}

export default RegisterPage