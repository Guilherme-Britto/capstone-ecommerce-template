
function productList(array){
    let ulItens = document.querySelector(".ulItens")

    for(let i = 0; i < array.length; i++){
        let li = document.createElement("li")
        ulItens.appendChild(li)

        let item = document.createElement("div")
        item.classList.add("item")
        li.appendChild(item)

        let imgBack = document.createElement("div")
        imgBack.classList.add("imgBack")
        item.appendChild(imgBack)

        let itemImg = document.createElement("img")
        itemImg.classList.add("itemImg")
        itemImg.src = array[i].img
        imgBack.appendChild(itemImg)

        let tag = document.createElement("p")
        tag.classList.add("tag")
        tag.innerText = array[i].tag
        item.appendChild(tag)

        let name = document.createElement("h1")
        name.classList.add("name")
        name.innerText = array[i].nameItem
        item.appendChild(name)

        let description = document.createElement("p")
        description.classList.add("description")
        description.innerText = array[i].description
        item.appendChild(description)

        let price = document.createElement("p")
        price.classList.add("price")
        price.innerText = `R$ ${array[i].value.toFixed(2)}`
        item.appendChild(price)

        let buy = document.createElement("button")
        buy.classList.add("buy")
        buy.innerText = "Add to cart"
        item.appendChild(buy)
        
        buy.setAttribute("id",array[i].id);
    }
}
productList(data)

let quantity = 0
let totalPrice = 0

let buys = document.querySelectorAll('.buy');

for (let i = 0; i<buys.length; i++){

    buys[i].addEventListener('click', function(e){

        let id = buys[i].id
        if (verifyItem(id)){

            let item = findItem(id)
            createCartItem(item)
        }
        })
}

function findItem (id){
    for (let i = 0; i<data.length; i++){

        if(data[i].id == id){
            return data[i]
        }
    }
    return "Not Found"
}

function verifyItem(id){
    let verify = document.querySelector('#cart_'+id)

    if(verify == null){
        return true
    }
    return false
}

function createCartItem(item){

    quantity ++;
    document.querySelector('#totalQuantity').innerHTML = `${quantity}`

    totalPrice = totalPrice + item.value
    document.querySelector('#totalPrice').innerHTML = `R$ ${totalPrice.toFixed(2)}`


    let ulCart = document.querySelector(".ulCart")

    let li = document.createElement("li")
    li.id = 'cart_' + item.id
    ulCart.appendChild(li)

    let itensCart = document.createElement("div")
    itensCart.classList.add("itensCart")
    li.appendChild(itensCart)

    let cartImg = document.createElement("img")
    cartImg.classList.add("cartImg")
    cartImg.src = item.img
    itensCart.appendChild(cartImg)

    let itensCart2 = document.createElement("div")
    itensCart2.classList.add("itensCart2")
    itensCart.appendChild(itensCart2)

    let nameCart = document.createElement("h1")
    nameCart.classList.add("nameCart")
    nameCart.innerText = item.nameItem
    itensCart2.appendChild(nameCart)

    let priceCart = document.createElement("p")
    priceCart.classList.add("priceCart")
    priceCart.innerText = `R$ ${item.value.toFixed(2)}`
    itensCart2.appendChild(priceCart)

    let remove = document.createElement("button")
    remove.classList.add("remove")
    remove.innerText = "Remove"
    itensCart2.appendChild(remove)

    remove.addEventListener('click', function(e){
        let li = document.querySelector('#cart_'+item.id)
        li.remove(  )

        quantity --
        document.querySelector('#totalQuantity').innerHTML = `${quantity}`

        totalPrice = totalPrice - item.value
        document.querySelector('#totalPrice').innerHTML = `R$ ${totalPrice.toFixed(2)}`
    }
    )
}