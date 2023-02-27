const res = 'db';
const cardsRestaurants = document.querySelector('.cards-restaurants')
const renderItems = (data) => {
    data.forEach(({image, kitchen, name, price, products, stars, time_of_delivery }) => {
        const a = document.createElement('a')
        a.setAttribute('href', '/restaurant.html')
        a.classList.add('card')
        a.classList.add('card-restaurant')

        a.dataset.products = products

        a.innerHTML = `
        <img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${name}</h3>
								<span class="card-tag tag">${time_of_delivery} min</span>
							</div>
							<div class="card-info">
								<div class="rating">
									${stars}
								</div>
								<div class="price">От ${price}</div>
								<div class="category">${kitchen}</div>
							</div>
						</div>
        `
         console.log(a)
        cardsRestaurants.append(a)
        a.addEventListener('click', (e) => {
            e.preventDefault()
            const link = a.dataset.products

            localStorage.setItem('restaurant', link)
             window.location.href = '/restaurant.html'
        })
    });
}
fetch('./db/partners.json')
 .then((response)=> response.json())
 .then((data)=>{
   renderItems(data);
 })
.catch((mis)=>{
    console.log(mis)
})

//let li = 'https://test-ffe67-default-rtdb.firebaseio.com/db/partners.json'