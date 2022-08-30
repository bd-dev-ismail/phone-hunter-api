const loadData = async(search) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
}

const displayPhone = phones =>{
    const phonesContainer = document.getElementById('phones-container');
    phonesContainer.innerHTML = '';
    //Display 20 Phones Only
    phones = phones.slice(0, 20);
    //Display No phone found
    const noPhone = document.getElementById("no-phone-found");
    if(phones.length === 0){
        noPhone.classList.remove('d-none');
    }
    else{
        noPhone.classList.add('d-none');
    }
    //Display Phones
    phones.forEach(phone => {
        console.log(phone);
        const phonesDiv = document.createElement('div');
        phonesDiv.classList.add('col');
        phonesDiv.innerHTML = `
        <div class="card p-5">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.slug}</p>
            </div>
        </div>
        `;
        phonesContainer.appendChild(phonesDiv);
    });
}
document.getElementById("btn-search").addEventListener('click', function(){
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = '';
    loadData(searchText)
});

// loadData('')