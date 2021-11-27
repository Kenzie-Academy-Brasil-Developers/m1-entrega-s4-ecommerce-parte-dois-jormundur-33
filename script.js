let add = document.querySelectorAll('.add');
let removeButton = document.getElementsByClassName('remove-item')
const underbarDisplay = document.getElementById('cartAdd')
underbarDisplay.style.display = 'none'
const emptyCart = document.getElementById('cart-empty')

let cartItemsRemove = document.getElementsByClassName('containter-items')
let cartAll = document.getElementById('cartItems')
cartAll.style.justifyContent = 'center'

let count = 0;
let priceCount = 0;
let fixed = priceCount;
let total;
let finalPrice;

function cartElements(e) {
    console.log(count)
    let cart = document.getElementById('cartItems');
    // let itemInfo = document.getElementsByClassName('add')
    let item = e.target
    let title = item.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    // console.log(title)
    let price = item.previousElementSibling.innerText;
    console.log(price)
    let image = item.parentElement.parentElement.childNodes[1].childNodes[1].src;
    // console.log(image)
    // let testing = item.closest('h3')
    // console.log(testing)
    let amoutItemsId = document.getElementById('items-quantity')
    let finalPriceText = document.getElementById('price-total');

    let strToNumber = parseFloat((price.replace('R$', '')))
        // let priceSum = removeSymbol += priceCount
    if (strToNumber > 0) {
        for (let i = 0; i < 1; i++) {
            count += 1
            priceCount += strToNumber
            fixed = Math.floor(priceCount * 100) / 100;
            total = fixed.toFixed(2)
        }

        finalPrice = 'R$ ' + total;
        finalPriceText.innerText = finalPrice
        amoutItemsId.innerText = +count
    }

    // console.log(priceSum)

    if (count >= 0) {

        underbarDisplay.style.display = 'flex'
        emptyCart.style.display = 'none'
        cartAll.style.flexDirection = 'column'
        cartAll.style.justifyContent = 'normal'

    }





    let containerItems = document.createElement('div');

    containerItems.classList.add('containter-items');

    let itemImg = document.createElement('img');

    itemImg.classList.add('img-container');

    let cartContainer = document.createElement('div');

    cartContainer.classList.add('cart-container')

    let cartH3 = document.createElement('h3');

    let cartH4 = document.createElement('h4');

    cartH4.classList.add('price');

    let cartSmall = document.createElement('small');

    cartSmall.classList.add('remove-item');
    cartSmall.setAttribute('onclick', 'countMinus()')

    cartSmall.innerHTML = "Remover Item";

    itemImg.src = image

    cartH4.innerText = price

    cartH3.innerText = title

    cart.appendChild(containerItems)

    containerItems.appendChild(itemImg)

    containerItems.appendChild(cartContainer)

    cartContainer.appendChild(cartH3)

    cartContainer.appendChild(cartH4)

    cartContainer.appendChild(cartSmall)

    // console.log(removeButton)

    removeButton = document.querySelectorAll('.remove-item')


    removeButton.forEach(id => {

        id.addEventListener('click', removeCartItem)

    })


    function removeCartItem(e) {

        // let removeButton2 = document.querySelectorAll('.remove-item')
        let eventTarget = e.target
        let b = eventTarget.previousSibling.innerText
        console.log(b)
        let a = parseFloat((b.replace('R$', '')))
        total -= b
        console.log(a)
        eventTarget.parentElement.parentElement.remove()
            // let index = removeButton.indexOf(eventTarget);
            // removeButton.splice(index, 1)




        // count = removeButton.length
        // console.log(count)
        finalPrice = 'R$ ' + total;
        finalPriceText.innerText = finalPrice
        amoutItemsId.innerText = count

        if (count <= 0) {
            underbarDisplay.style.display = 'none'
            emptyCart.style.display = 'flex'
            cartAll.style.flexDirection = 'row'
            cartAll.style.justifyContent = 'center'
            count = 0
        }
        // eventTarget.Element.closest().removeChild(Element.closest())
        // console.log(eventTarget)
        // console.log(eventTarget.parentElement)
        console.log(count)
        console.log(removeButton)


    }




    console.log(removeButton)
    console.log(count)
    console.log(total)

}


function countMinus() {

    count -= 1
}

add.forEach(id => {

    id.addEventListener('click', cartElements)
})

// function addItemsClick(listenerEvent) {
//     let items = listenerEvent.target;

//     let addItem = items.parentElement.parentElement;

//     let title = addItem.getElementsByTagName('h3')[0].innerText

//     let price = addItem.getElementsByClassName('captionPrice')[0].innerText

//     let image = addItem.getElementsByClassName('product-img')[0].src
// }





// console.log(add)

// cartAll.addEventListener('click', removeCartItem)
// console.log('Nome: ', removeButton)
// console.log(cartItemsRemove)

// console.log(cartAll.children)

// const addItems = document.querySelectorAll('.add');
// for (let i = 0; i < addItems.length; i++); {
//     let items = addItems[i];
//     items.addEventListener('click', addItemsClick)
//     console.log(items)
// }



// function price() {
//     const itemPrice = document.getElementsByClassName('captionPrice');
//     for (let i = 0; i < itemPrice.length; i++) {
//         let removeSymbol = parseFloat(itemPrice[i].innerText.replace('R$', ''))
//         console.log(removeSymbol)
//     }

// }
// price()