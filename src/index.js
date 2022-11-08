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
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    let eredmeny;
    function adatBetoltes() {
        return __awaiter(this, void 0, void 0, function* () {
            let response = yield fetch('/users.json');
            eredmeny = yield response.json();
        });
    }
    ;
    function torol() {
        let termekLista = document.getElementById('list');
        termekLista.textContent = '';
    }
    ;
    adatBetoltes();
    function adatMegjelenites(usersLista) {
        let szulo = document.getElementById('list');
        for (let e of usersLista) {
            let li = document.createElement('li');
            li.textContent = e.lastName.toUpperCase() + " " + e.firstName;
            szulo.appendChild(li);
        }
    }
    ;
    (_a = document.getElementById('feladat1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        adatMegjelenites(eredmeny.users);
    });
});
//# sourceMappingURL=index.js.map