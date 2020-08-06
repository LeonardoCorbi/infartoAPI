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
class ArticlesCreateController {
    createInfarto(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, image, content, summary, authorId } = request.body;
            const article = yield connection_1.default('infarto').insert({
                title,
                image,
                content,
                summary,
                authorId
            });
            return response.json(article);
        });
    }
    createAlimentacao(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, image, content, summary, authorId } = request.body;
            const article = yield connection_1.default('alimentacao').insert({
                title,
                image,
                content,
                summary,
                authorId
            });
            return response.json(article);
        });
    }
    createExercicio(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, image, content, summary, authorId } = request.body;
            const article = yield connection_1.default('exercicio').insert({
                title,
                image,
                content,
                summary,
                authorId
            });
            return response.json(article);
        });
    }
    createTratamento(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, image, content, summary, authorId } = request.body;
            const article = yield connection_1.default('tratamento').insert({
                title,
                image,
                content,
                summary,
                authorId
            });
            return response.json(article);
        });
    }
}
exports.default = ArticlesCreateController;
