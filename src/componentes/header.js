import { login } from "../vistas/login"
import { panel } from "../vistas/panel"
import { registro } from "../vistas/registro"

export const header = {
    template: // html
    `
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Gestión de incidencias FPLLEFIA</a>
        <div>
          <button id="panel" class="btn btn-secondary ms-2">PANEL</button>
          <button id="login" class="btn btn-secondary ms-2">LOGIN</button>
          <button id="registro" class="btn btn-secondary ms-2">REGISTRO</button>
        </div>
        <div>
          <span>administrador@fpllefia.com</span>
        </div>
      </div>
    </nav>
    `,
    script: () => {
        document.querySelector('#panel').addEventListener('click', () => {
            document.querySelector('main').innerHTML = panel.template
        })

        document.querySelector('#login').addEventListener('click', () => {
            document.querySelector('main').innerHTML = login.template
            login.script()
        })

        document.querySelector('#registro').addEventListener('click', () => {
            document.querySelector('main').innerHTML = registro.template
            registro.script()
        })
    }
}