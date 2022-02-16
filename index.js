// Write your code here...
fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(menuData => {
        // console.log(menuData)
        menuData.forEach(item =>{
            createMenuItemsDiv(item)
            
        })
        createDishSection(menuData[0])
        createCartForm()
    })

const menuItems = document.getElementById('menu-items')
// console.log(menuItems)
function createMenuItemsDiv(item){
    const span = document.createElement('span')
    span.textContent = item.name
    menuItems.appendChild(span)
    // console.log(span)

    span.addEventListener('click', (e)=>{
        // console.log('click')
        createDishSection(item)
    })
}

const dishImage = document.getElementById('dish-image')
const dishName = document.getElementById('dish-name')
const dishDescription = document.getElementById('dish-description')
const dishPrice = document.getElementById('dish-price')
// console.log(dishImage, dishName, dishDescription, dishPrice)

let currentMenuItem;
function createDishSection(item){
    currentMenuItem = item;

    dishImage.src = item.image
    dishName.textContent = item.name
    dishDescription.textContent = item.description
    dishPrice.textContent = item.price
}

let cartForm = document.getElementById('cart-form')
let numberInCart = document.getElementById('number-in-cart')
// console.log(numberInCart)
function createCartForm(){
    cartForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        // console.log('submit')
        let addMenuItem = e.target['cart-amount'].value
        currentMenuItem.number_in_bag += parseInt(addMenuItem)
        numberInCart.textContent = currentMenuItem.number_in_bag
        e.target.reset()
    })
}