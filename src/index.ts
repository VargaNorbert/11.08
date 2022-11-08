document.addEventListener('DOMContentLoaded',()=>{

    let eredmeny;
    

    async function adatBetoltes() {
        let response = await fetch('/users.json');
        eredmeny = await response.json();

       
    };

    function torol(){
        let termekLista = document.getElementById('list');
        termekLista.textContent = '';
    };

    adatBetoltes();

    function adatMegjelenites(usersLista){
        let szulo = document.getElementById('list');

        usersLista = usersLista.sort((a, b) => { return a.lastName>b.lastName ? 1:-1});


        for(let e of usersLista){
                let li = document.createElement('li');
                li.textContent =e.lastName.toUpperCase() + " " + e.firstName;
                szulo.appendChild(li);
    }
    };

    function adatMegjelenites2(usersLista){
        let szulo = document.getElementById('tabla');

        usersLista = usersLista.sort((a, b) => { return a.username>b.username ? 1:-1});


        for(let e of usersLista){
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
    };

    document.getElementById('feladat1')?.addEventListener('click',()=>{
        adatMegjelenites(eredmeny.users);
    })

    document.getElementById('feladat2')?.addEventListener('click',()=>{
        adatMegjelenites2(eredmeny.users);
    })

    

})