export type SysLoginType = {
    ID: number,
    IDCLOUD: number,
    NOME: string,
    NOMEESTABELECIMENTO: string,
    EMAIL: string,
    CNPJ: string,
    STATUS: number,
    ADMIN: number,
    PASSWORD: string,
    REASONBLOCKING: string,
    ISVISIBLE: number,
    ISACTIVE: number,
    RAMODEATIVIDADE: string,
}

export type SysApiConfType = {
    apiserveraddress: string,
    apidefaultuser: string,
    apidefaultpassword: string,
    apidefaulttoken: string
}

export type SysMenuItemType = {
    id: number,
    nomeitem: string,
    iconitem: string,
    urlitem: string,
    idmenu: number
}

export type ChamadosType = {
    ID: number,
    IDINTERNO: number, 
    IDCLIENTE: number, 
    SETOR: number, 
    TITULO: string, 
    DESCRICAO: string, 
    STATUS: number, 
    DATAINCLUSAO: string, 
    PREVISAO: string, 
    PRIORIDADE: number, 
    ULTIMAATUALIZACAO: string, 
    ATIVO: number, 
    FILE: string
}

export type DashboardDataType = {    
    QtdeRegistros: number,
    DataConsulta: string,
    TotalVendasDia: number,
    TicketMedio: number,
    VendasFormaPagamento:[{Forma:string, Valor: number}],
    TotalDiaCancelamentos: number,
    TotalDiaDescontos: number,
    TotalDiaTaxaServico: number,
    TotalDiaCortesias: number,
    RankingProdutos:[{Produto:string,Qtde: number}],
    VendasPorHora:[{Hora: string,Valor: number}],
    VendasPorTipo:[{Tipo:string,Valor:number},],
    ConsumosEmAbertoQtde: number,
    ConsumosEmAbertoValor: number,            
    EvolucaoVendasMes:[{Mes: string,Valor: number}]      
}

export type MatrizDashType = {
    ID: number,
    IDCLOUDMATRIZ: number,
    CNPJMATRIZ: string,
}