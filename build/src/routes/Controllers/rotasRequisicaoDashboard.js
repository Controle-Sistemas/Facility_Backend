"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dashboard_1 = __importDefault(require("../requests/dashboard"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
});
routes.patch('/daily-evolution/:idCloud', function (req, res) {
    var idCloud = parseInt(req.params.idCloud);
    var range = req.body;
    var dashboardRequest = new dashboard_1.default(idCloud);
    var dataPromise = dashboardRequest.getDailyEvolution(range);
    Promise.resolve(dataPromise).then(function (response) {
        if (response.error || response.Error) {
            res.status(400).json({
                message: response.message,
                error: response.error,
            });
        }
        else {
            return res.status(200).json({ message: "Evolu\u00E7\u00E3o di\u00E1ria da empresa de idcloud ".concat(idCloud, " recuperada com sucesso"), data: response });
        }
    });
});
routes.post('/real-time/:idCloud', function (req, res) {
    var idCloud = parseInt(req.params.idCloud);
    var dashboardRequest = new dashboard_1.default(idCloud);
    var DateInit = req.body.DateInit;
    var TimeInit = req.body.TimeInit;
    var dataPromise = dashboardRequest.getRealTimeByIdCloud(DateInit, TimeInit);
    Promise.resolve(dataPromise).then(function (response) {
        if (response.error) {
            res.status(400).json({
                message: response.message,
                data: response.error,
            });
        }
        else {
            return res.status(200).json({ message: "Dados em tempo real da empresa de idcloud ".concat(idCloud, " recuperados com sucesso"), data: response });
        }
    });
});
routes.post('/registradoras/:idCloud', function (req, res) {
    var idCloud = parseInt(req.params.idCloud);
    var dashboardRequest = new dashboard_1.default(idCloud);
    var DateInit = req.body.DateInit;
    var DateFinal = req.body.DateFinal;
    var dataPromise = dashboardRequest.getViewPeriodoClosed(DateInit, DateFinal, req.params.id);
    var finalData = { closed: {}, open: {} };
    Promise.resolve(dataPromise).then(function (response) {
        if (response.ERROR_getValuesFromUsers) {
            res.status(400).json({
                error: true,
                message: response.ERROR_getValuesFromUsers,
            });
        }
        else {
            finalData.closed = response;
            dataPromise = dashboardRequest.getViewPeriodoOpen(DateInit, DateFinal, req.params.id);
            Promise.resolve(dataPromise).then(function (response) {
                if (response.ERROR_getValuesFromUsers) {
                    res.status(400).json({
                        error: true,
                        message: response.ERROR_getValuesFromUsers,
                    });
                }
                else {
                    finalData.open = response;
                    return res.status(200).json({ message: "Dados da empresa de idcloud ".concat(idCloud, " recuperados com sucesso"), data: finalData });
                }
            });
        }
    });
});
routes.get('/registradoras/:idCloud/:id', function (req, res) {
    var idCloud = parseInt(req.params.idCloud);
    var dashboardRequest = new dashboard_1.default(idCloud);
    var DateInit = req.body.DateInit;
    var DateFinal = req.body.DateFinal;
    var dataPromise = dashboardRequest.getViewPeriodoClosed(DateInit, DateFinal, req.params.id);
    Promise.resolve(dataPromise).then(function (response) {
        if (response.cabec.length < 1) {
            res.status(400).json({
                error: true,
                data: "Não foram encontrados registros no período",
            });
        }
        else {
            return res.status(200).json({ message: "Dados da empresa de idcloud ".concat(idCloud, " recuperados com sucesso"), data: response });
        }
    });
});
routes.post('/list-products/:idCloud', function (req, res) {
    var idCloud = parseInt(req.params.idCloud);
    var dashboardRequest = new dashboard_1.default(idCloud);
    var groupID = req.body.groupID;
    var dataPromise = dashboardRequest.getProductsByGroupID(groupID);
    Promise.resolve(dataPromise).then(function (response) {
        if (response) {
            if (response.error) {
                res.status(400).json({
                    message: response.message,
                    data: response.error,
                });
            }
            else {
                return res.status(200).json({ message: "Dados em tempo real da empresa de idcloud ".concat(idCloud, " recuperados com sucesso"), data: response });
            }
        }
        else {
            return res.status(500).json({ message: "Timeout!" });
        }
    });
    routes.post('/curvaABC/:idCloud', function (req, res) {
        var idCloud = parseInt(req.params.idCloud);
        var dashboardRequest = new dashboard_1.default(idCloud);
        var DateInit = req.body.DateInit;
        var DateFinal = req.body.DateFinal;
        var dataPromise = dashboardRequest.getCurveABC(DateInit, DateFinal);
        Promise.resolve(dataPromise).then(function (response) {
            if (response.cabec.length < 1) {
                res.status(400).json({
                    error: true,
                    data: "Não foram encontrados registros",
                });
            }
            else {
                return res.status(200).json({ message: "Dados da empresa de idcloud ".concat(idCloud, " recuperados com sucesso"), data: response });
            }
        });
    });
});
exports.default = routes;
//# sourceMappingURL=rotasRequisicaoDashboard.js.map