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