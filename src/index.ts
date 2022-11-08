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

        

        for(let e of usersLista){
                let li = document.createElement('li');
                li.textContent =e.lastName.toUpperCase() + " " + e.firstName;
                szulo.appendChild(li);
    }
    };

    document.getElementById('feladat1')?.addEventListener('click',()=>{
        adatMegjelenites(eredmeny.users);
    })

    

})