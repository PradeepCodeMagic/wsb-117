let allCat=document.querySelector(".left ul")
let allProduct=document.querySelector(".parentBox")


// display category
let showCat=()=>{
    fetch('https://dummyjson.com/products/categories')
    .then((ress)=> ress.json() )
    .then((finalRess)=>{
       
        allCat.innerHTML="";
        finalRess.map((v,i)=>{
            allCat.innerHTML+=`
                <li onclick="filterCat('${v.url}')" > ${v.name} </li>
            `
        })
       
    })
    .catch((error)=>console.log(error))
}
showCat()

// display Product
let showProduct=(myUrl)=>{

    let Api;
    if(myUrl==undefined){
        Api='https://dummyjson.com/products?limit=200'
    }
    else{
        Api=myUrl
    }
    
    fetch(Api)
    .then((ress)=> ress.json() )
    .then((finalRess)=>{
       let finalProduct=finalRess.products;
       allProduct.innerHTML=""
       finalProduct.map((v,i)=>{
        
        allProduct.innerHTML+=`
                <div class="box">
                    <img src=${v.thumbnail} alt=""/>
                    <h3>${v.category}</h3>
                    <p> price:- ${v.price} $ </p>
                    <h5> Id ${v.id} </h5>
                    <button> Add To Cart </button>
                </div>
        `
       })


    })
    .catch((error)=>console.log(error))
}
showProduct()


// filterCat work
let filterCat=(myUrl)=>{
    showProduct(myUrl)
}