import { SlArrowLeft } from "react-icons/sl"; // importando icone
import { useNavigate } from "react-router-dom"; // importando o hook useNavigate

function Login() {
    const navigate = useNavigate(); // criando a função navigate
    return (
        



        



            <div className="card">

                <div className="container">

                <div className="home-container">
                    <button className="button-home" onClick={() => navigate(-1)}>
                            <SlArrowLeft className="home-icon" />
                            {/* Ícone de seta para voltar */}
                    </button>

                </div>

                <h2>Login</h2>
                <form action="#" method="POST">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" name="password" required />


                    <button type="submit">Logar</button>
                </form>
            </div>
        </div>
    )
}

export default Login