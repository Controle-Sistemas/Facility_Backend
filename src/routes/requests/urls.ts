import dotenv from 'dotenv'
import { env } from 'process';
dotenv.config()

export const EXTERNAL_API_URL = `https://apilicenca.controleautomacao.com.br/api/`;
export const EXTERNAL_API = `${process.env.FACILITY_SOCKET_URL}:${process.env.FACILITY_SOCKET_PORT}/socket`;

export const API_PRODUCT_URL = 'http://167.114.135.197:9000/socket'