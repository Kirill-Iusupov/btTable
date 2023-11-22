import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form'
import Wrapper from '../../components/wrapper/Wrapper';

const LoginPage = () => {

    const navigate = useNavigate()

    const handkeLogin =() =>{
        return navigate('/')
    }

  return (
    <Wrapper>
        <Form title={'Войти'} handle={handkeLogin}/>
        <p>Еще нет аккаунта?</p>
        <Link to={"/register"} >
            Создайте аккаунт
        </Link>

    </Wrapper>
  )
}

export default LoginPage