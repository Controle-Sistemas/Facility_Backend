"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var urls_1 = require("./urls");
var ProductRequest = /** @class */ (function () {
    function ProductRequest(clientId) {
        this.clientId = clientId;
    }
    ProductRequest.prototype.getOne = function (id) {
        return axios_1.default.get("".concat(urls_1.API_PRODUCT_URL, "/CadProductId"), {
            headers: {
                "socket_client": this.clientId
            },
            data: {
                "ClientId": this.clientId, "id": id
            }
        }).then(function (response) {
            return { res: response, error: false };
        }).catch(function (err) {
            return { res: err, error: true };
        });
    };
    ProductRequest.prototype.getList = function (description) {
        return axios_1.default.get("".concat(urls_1.API_PRODUCT_URL, "/ListProduct"), {
            headers: {
                "socket_client": this.clientId
            },
            data: {
                "ClientId": this.clientId, "description": description
            }
        }).then(function (response) {
            return { res: response, error: false };
        }).catch(function (err) {
            return { res: err, error: true };
        });
    };
    return ProductRequest;
}());
exports.default = ProductRequest;
//# sourceMappingURL=produtos.js.map