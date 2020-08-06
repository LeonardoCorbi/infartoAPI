"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
class ArticleSearchAllController {
    showInfarto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield connection_1.default('infarto').select('*');
            return response.json(article);
        });
    }
    showAlimentacao(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield connection_1.default('alimentacao').select('*');
            return response.json(article);
        });
    }
    showExercicio(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield connection_1.default('exercicio').select('*');
            return response.json(article);
        });
    }
    showTratamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = yield connection_1.default('tratamento').select('*');
            return response.json(article);
        });
    }
}
exports.default = ArticleSearchAllController;
