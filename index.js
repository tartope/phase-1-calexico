// Write your code here...
fetch('http://localhost:3000/menu')
    .then(response => response.json())
    .then(menuData => {
        // console.log(menuData)
        menuData.forEach(item =>{
            createMenuItemsDiv(item)
        })
        createDishSection(menuData[0])
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
function createDishSection(item){
    dishImage.src = item.image
    dishName.textContent = item.name
    dishDescription.textContent = item.description
    dishPrice.textContent = item.price
}