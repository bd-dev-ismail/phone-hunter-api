const loadData = async(search, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit);
    
}

const displayPhone = (phones, dataLimit) =>{
    // console.log(phones)
  const phonesContainer = document.getElementById("phones-container");
  phonesContainer.textContent = "";
  //Display 10 Phones Only
  const showMore = document.getElementById('show-more');
  if(dataLimit && phones.length > 10){
      phones = phones.slice(0, 10);
      showMore.classList.remove('d-none');
    }
    else{
        showMore.classList.add('d-none');
    };
  //Display No phone found
  const noPhone = document.getElementById("no-phone-found");
  if(phones.length === 0) {
    noPhone.classList.remove("d-none");
  } 
  else {
    noPhone.classList.add("d-none");
  };
  //Display Phones
  phones.forEach(phone => {
    console.log(phone);
    const phonesDiv = document.createElement("div");
    phonesDiv.classList.add("col");
    phonesDiv.innerHTML = `
        <div class="card p-5">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">${phone.slug}</p>
             <!-- Button trigger modal -->
            <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Detalis</button>
           
            
            </div>
        </div>
        `;
    phonesContainer.appendChild(phonesDiv);
  });
  //End spinner
  toggleSpinner(false);
};
const processSearch = dataLimit =>{
  // Start Spinner
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  loadData(searchText, dataLimit);
}
//handle Search Button
document.getElementById("btn-search").addEventListener('click', function(){
    processSearch(10);
});
//Search field enter key wrok
document.getElementById("search-field").addEventListener('keypress', function(event){
    // console.log(event.key)
    if(event.key == "Enter"){
        processSearch(10);
    }
})

//Function for spinner 
const toggleSpinner = isLoading =>{
    const loadSpinner = document.getElementById('spinner');
    if(isLoading){
        loadSpinner.classList.remove('d-none')
    }
    else{
        loadSpinner.classList.add('d-none');
    }
};
//Not the best way to show all
document.getElementById("btn-show-more").addEventListener('click', function(){
    processSearch();
});

//Load phn detalis
const loadPhoneDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhoneDetails(data.data);
};

const displayPhoneDetails = phone =>{
  console.log(phone)
  const modalTitle = document.getElementById("phoneDetailModalLabel");
  modalTitle.innerText = phone.name;
  const phoneDetails = document.getElementById("phone-details");
  phoneDetails.innerHTML = `
  <p>Relase Date: ${
    phone.releaseDate ? phone.releaseDate : "No Relase Date"
  }</p>
  <p>WLAN: ${phone.others ? phone.others.WLAN : "No WLAN THIS PHONE"}</p>
  <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Details'}</p>
  <p>Bluetooth ${
    phone.others ? phone.others.Bluetooth : "No Bluetooth Supported"
  }</p>
  `;

}

loadData('a');