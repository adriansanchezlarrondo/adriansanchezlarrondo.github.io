import { panel } from "./panel"
import { registro } from "./registro"

export const login = {
    template: // html
    `
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <h1 class="text-center mb-5 fw-light">Iniciar Sesión</h1>
                <div class="card rounded-0">
                    <div class="card-body">
                        <form action="proyecto.html">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control rounded-0" id="email">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Contraseña:</label>
                                <input type="password" class="form-control rounded-0" id="password">
                            </div>
                            <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe">
                            <label class="form-check-label" for="rememberMe">Recordar Sesión</label>
                            </div>
                            <div class="text-end mb-3">
                            <a href="#">¿Has olvidado la contraseña?</a>
                            </div>
                            <button id="sesion" type="submit" class="btn btn-primary rounded-0 w-100">Iniciar Sesión</button>
                        </form>
                    </div>
                </div>
                <div class="mt-5 text-center border border-secondary bg-secondary py-2">
                    <a id="nuevo" class="link-underline link-underline-opacity-0 text-light">¿Eres nuevo? Regístrate</a>
                </div>
            </div>
        </div>
    </div>
    `,
    script: () => {
        document.querySelector('#sesion').addEventListener('click', (event) => {
            event.preventDefault()
            document.querySelector('main').innerHTML = panel.template
        })

        document.querySelector('#nuevo').addEventListener('click', () => {
            document.querySelector('main').innerHTML = registro.template
            registro.script()
        })
    }
}