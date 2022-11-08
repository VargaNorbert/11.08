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
    var _a, _b;
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
        usersLista = usersLista.sort((a, b) => { return a.lastName > b.lastName ? 1 : -1; });
        for (let e of usersLista) {
            let li = document.createElement('li');
            li.textContent = e.lastName.toUpperCase() + " " + e.firstName;
            szulo.appendChild(li);
        }
    }
    ;
    function adatMegjelenites2(usersLista) {
        let szulo = document.getElementById('tabla');
        usersLista = usersLista.sort((a, b) => { return a.username > b.username ? 1 : -1; });
        for (let e of usersLista) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            td1.textContent = e.username;
            td2.textContent = e.email;
            td3.textContent = e.phone;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            szulo.appendChild(tr);
        }
    }
    ;
    (_a = document.getElementById('feladat1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        adatMegjelenites(eredmeny.users);
    });
    (_b = document.getElementById('feladat2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        adatMegjelenites2(eredmeny.users);
    });
});
//# sourceMappingURL=index.js.map