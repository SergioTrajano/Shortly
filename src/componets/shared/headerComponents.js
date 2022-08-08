import { Link } from "react-router-dom";

export function welcomeUser(token) {
    if (token) {
        return <div>
            <span>Seja bem-vindo(a), {token.name}! </span>
        </div>
    }
    return <div>

    </div>
}

function loggOut(setToken) {
    setToken("");
}

export function navBar(token, setToken) {
    if (token) {
        return <div>
            <Link to="/">
                Home
            </Link>
            <Link to="/ranking">
                Ranking
            </Link>
            <Link to="/" onClick={() => loggOut(setToken)}>
                Sair
            </Link>
        </div>
    }
    return <div>
        <Link to="/signIn">
            Entrar
        </Link>
        <Link to="/signUp">
            <p>Cadastrar-se</p>
        </Link>
    </div>
}