import connection from "..";
import { Request, Response } from "express";
import { EXTERNAL_API } from "../../routes/requests/urls";
import axios from "axios";
interface product {
    id: string,
    grupo: string,
    codInterno: string,
    descricao: string,
    precoCusto: string,
    precoVenda: string,
    custoTotal?: string,
    imagem: any,
}

class ProductModel {

    async updateProduct(product: product, idCloud: number) {

        var imageHeaderCleaned;
        var startPosition;
        var imageExtension;
        var imageContent;
        var params = {
            idCloud: idCloud,
            Produto: [{
                Grupo: product.grupo,
                CodInterno: product.codInterno,
                descricao: product.descricao,
                PrecoCusto: product.precoCusto,
                PrecoVenda: product.precoVenda,
                CustoTotal: product.custoTotal ? product.custoTotal : "",
                imagemnome: "",
                imagem: imageContent ? imageContent : "",
            }]
        }

        if (product.imagem) {
            imageHeaderCleaned = product.imagem.replace('data:image/', '').replace(';base64', '');
            startPosition = imageHeaderCleaned.search(',');
            imageExtension = imageHeaderCleaned.substring(0, startPosition);
            imageContent = imageHeaderCleaned.substring(startPosition + 1, imageHeaderCleaned.length);
            params.Produto[0].imagemnome = `prod-${product.codInterno}.${imageExtension}`;
            params.Produto[0].imagem = imageContent;
        }


        // idCloud.map(async (idCloud) => {
        //     params.idCloud = idCloud
        // console.log(params)
        // const response = await axios.get(`${EXTERNAL_API}/UpdateProduct`, {
        //     headers: {
        //         "socket_client": `@${idCloud}`
        //     },
        //     data: params,
        // }).then(response => {
        //     // results.push({idCloud: response.data}) 
        //     return response.data
        // })
        //     .catch(error => {
        //         console.log("Erro: " + error.errno + ' - ' + error.code)
        //         var response = { "message": "Timeout! API fora do ar!", "error": error.errno + ' - ' + error.code, };
        //         return response;
        //     })
    // })

        // console.log(params)
        // setTimeout(() => {
        //     console.log("Atualizando: ", idCloud)
        // }, 3000);

        return params;

        
    }

}

export default new ProductModel();