const products= [
    {
        id:"1",
        name:"Whiskey jhonny rojo",
        price:2000,
        category:"whiskey",
        img:"https://discouy.vtexassets.com/arquivos/ids/1516217/Whisky-Escoces-JOHNNIE-WALKER-Rojo-petaca-0.jpg?v=638339329131870000",
        stock:25,
        description:"Whiskey añejo 8 años"
    },
    {
        id:"2",
        name:"Ron bacardi",
        price:2000,
        category:"ron",
        img:"https://sitio105374.p08.mvdsimple.uy/web/image/product.template/3845/image",
        stock:25,
        description:"Ron añejo 1 año"
    },
    {
        id:"3",
        name:"Vodka smirnoff",
        price:2000,
        category:"vodka",
        img:"https://sitio105374.p08.mvdsimple.uy/web/image/product.template/4869/image",
        stock:25,
        description:"Vodka 3 destilados"
    }
]
export const getProducts=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })


}
export const getProductById=(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod=> prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
      const filteredProducts = products.filter(product => product.category === categoryId);
  
      if (filteredProducts.length > 0) {
        resolve(filteredProducts);
      } else {
        reject('No se encontraron productos en la categoría especificada');
      }
    });
  };