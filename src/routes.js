"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ArticlesCreateController_1 = __importDefault(require("./controllers/ArticlesCreateController"));
const articlesCreateController = new ArticlesCreateController_1.default();
const ArticleSearchAllController_1 = __importDefault(require("./controllers/ArticleSearchAllController"));
const articleSearchAllController = new ArticleSearchAllController_1.default();
const ArticleSearchSingleController_1 = __importDefault(require("./controllers/ArticleSearchSingleController"));
const articleSearchSingleController = new ArticleSearchSingleController_1.default();
const AuthorCreatorController_1 = __importDefault(require("./controllers/AuthorCreatorController"));
const authorCreatorController = new AuthorCreatorController_1.default();
const AuthorSearchAllController_1 = __importDefault(require("./controllers/AuthorSearchAllController"));
const authorSearchAllController = new AuthorSearchAllController_1.default();
const AuthorSearchSingleController_1 = __importDefault(require("./controllers/AuthorSearchSingleController"));
const authorSearchSingleController = new AuthorSearchSingleController_1.default();
const routes = express_1.default.Router();
// 01:40:57
routes.post('/infarto', articlesCreateController.createInfarto);
routes.post('/alimentacao', articlesCreateController.createAlimentacao);
routes.post('/exercicio', articlesCreateController.createExercicio);
routes.post('/tratamento', articlesCreateController.createTratamento);
routes.post('/authorAdmLeoLeo', authorCreatorController.create);
routes.get('/', (request, response) => {
    return response.json({ ok: 'ok' });
});
routes.get('/infarto', articleSearchAllController.showInfarto);
routes.get('/alimentacao', articleSearchAllController.showAlimentacao);
routes.get('/exercicio', articleSearchAllController.showExercicio);
routes.get('/tratamento', articleSearchAllController.showTratamento);
routes.get('/authorAdmLeoLeo', authorSearchAllController.search);
routes.get('/infarto/:id', articleSearchSingleController.indexInfarto);
routes.get('/alimentacao/:id', articleSearchSingleController.indexAlimentacao);
routes.get('/exercicio/:id', articleSearchSingleController.indexExercicio);
routes.get('/tratamento/:id', articleSearchSingleController.indexTratamento);
routes.get('/authorAdmLeoLeo/:id', authorSearchSingleController.search);
exports.default = routes;
