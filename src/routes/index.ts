import express,{Request,Response} from 'express'
const routes = express.Router()
import rotasClientes from './Controllers/rotasClientes'
import rotasApis from './Controllers/rotasConfApi'
import rotasMenu from './Controllers/rotasMenu'
import rotasRamos from './Controllers/rotasRamos'
import rotasEmpresas from './Controllers/rotasEmpresas'
import rotasTerminais from './Controllers/rotasTerminais'
import rotasUserTableCustom from './Controllers/rotasUserTableCustom'
import rotasUserCard from './Controllers/rotasUserCard'
import rotasDocumentos from './Controllers/rotasDocumentos'
import rotasTutoriais from './Controllers/rotasTutoriais'
import rotasTutoriaisCategorias from './Controllers/rotasCategoriasTutorial'
import rotasEmails from './Controllers/rotasEmails'
import rotasStatusChamado from './Controllers/rotasStatusChamado'
import rotasTiposChamado from './Controllers/rotasTiposChamado'
import rotasOcorrencias from './Controllers/rotasOcorrencias'
import rotasUsuarioInterno from './Controllers/rotasUsuarioInterno'
import rotasSetores from './Controllers/rotasSetores'
import rotasChamados from './Controllers/rotasChamados'
import rotasRequisicaoProdutos from './Controllers/rotasRequisicaoProdutos'
import rotasRequisicaoDashboard from './Controllers/rotasRequisicaoDashboard'
import rotasGrupos from './Controllers/rotasGrupos'
import rotasRelatorios from './Controllers/rotasRelatorios';

routes.use('/tabelas', rotasUserTableCustom)
routes.use('/empresas', rotasEmpresas)
routes.use('/terminais', rotasTerminais)
routes.use('/clientes', rotasClientes)
routes.use('/api-config', rotasApis)
routes.use('/menu', rotasMenu)
routes.use('/ramos', rotasRamos)
routes.use('/card', rotasUserCard)
routes.use('/documentos', rotasDocumentos)
routes.use('/tutoriais', rotasTutoriais)
routes.use('/categorias', rotasTutoriaisCategorias)
routes.use('/emails', rotasEmails)
routes.use('/setores', rotasSetores)
routes.use('/internos', rotasUsuarioInterno)
routes.use('/chamados', rotasChamados)
routes.use('/status-chamado', rotasStatusChamado)
routes.use('/tipos-chamado', rotasTiposChamado)
routes.use('/ocorrencias', rotasOcorrencias)
routes.use('/produtos', rotasRequisicaoProdutos)
routes.use('/dashboard', rotasRequisicaoDashboard)
routes.use('/grupos', rotasGrupos)
routes.use('/relatorios', rotasRelatorios)

routes.get('/', (req: Request, res: Response) => {
    res.send(`
        <h1>API Facility</h1>
        <ul>
            <li>
                <a href="/clientes/">Clientes</a>
            </li>
            <li>
                <a href="/api-config/">API Config</a>
            </li>
            <li>
                <a href="/menu/">Menu</a>
            </li>
            <li>
                <a href="/ramos/">Ramos</a>
            </li>
            <li>
                <a href="/card/">Card</a>
            </li>
            <li>
                <a href="/documentos/">Documentos</a>
            </li>
            <li>
                <a href="/tutoriais/">Tutoriais</a>
            </li>
            <li>
                <a href="/categorias/">Categorias</a>
            </li>
            <li>
                <a href="/emails/">Emails</a>
            </li>
            <li>
            <a href="/grupos/">Grupos</a>
        </li>
        </ul>
        
    `)
})






export default routes;
