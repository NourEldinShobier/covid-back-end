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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const auth0_1 = require("auth0");
class UsersService {
    constructor() {
        this.client = new auth0_1.ManagementClient({
            domain: process.env.AUTH0_DOMAIN,
            audience: process.env.AUTH0_AUDIENCE,
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
        });
    }
    updateUser(userId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const params = { id: userId };
                yield this.client.updateUser(params, data);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map