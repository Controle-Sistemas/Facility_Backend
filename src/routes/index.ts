import express from 'express'
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
import rotasOcorrencias from './Controllers/rotasOcorrencias'
import rotasUsuarioInterno from './Controllers/rotasUsuarioInterno'
import rotasSetores from './Controllers/rotasSetores'
import rotasChamados from './Controllers/rotasChamados'

routes.use('/tabelas', rotasUserTableCustom)
routes.use('/empresas', rotasEmpresas)
routes.use('/terminais', rotasTerminais)
routes.use('/clientes',rotasClientes)
routes.use('/api-config',rotasApis)
routes.use('/menu',rotasMenu)
routes.use('/ramos',rotasRamos)
routes.use('/card',rotasUserCard)
routes.use('/documentos',rotasDocumentos)
routes.use('/tutoriais',rotasTutoriais)
routes.use('/categorias',rotasTutoriaisCategorias)
routes.use('/emails',rotasEmails)
routes.use('/setores',rotasSetores)
routes.use('/internos',rotasUsuarioInterno)
routes.use('/chamados',rotasChamados)
routes.use('/status-chamado',rotasStatusChamado)
routes.use('/ocorrencias',rotasOcorrencias)

export default routes;
