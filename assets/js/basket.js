
 function GetItemsfromBasket() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    console.log(basket);    
    let item = '';

    basket.forEach(x => {
        item += `
        <div class="col-lg-12 ado">
        <img src="${x.Image}" alt="">
        <h2>${x.Name}</h2>
        <input type="number" value=${x.Count}>
        <h3>$ ${x.Price}</h3>
        </div>
        `
    })
    document.getElementById('basket-list').innerHTML = item

}

GetItemsfromBasket();

// function CountBasket() {
//     let basket = JSON.parse(localStorage.getItem('basket'));
//     if(basket.length === 0 ) {
//         document.getElementById('count').style.display = 'none'
//     }
//     else{
//         document.getElementById('count').style.display = 'block'
//     }
//     document.getElementById('count').innerHTML = basket.length
// }

// CountBasket()

function ToplaItem(){
    let toplama = JSON.parse(localStorage.getItem("basket"));
    let toplamQiymet = 0;
    let toplamcount = 0;
    
    toplama.forEach(a => {
        toplamcount += a.Count;
        let Price = parseFloat(a.Price);
        let fullPrice = a.Count*Price;
        toplamQiymet += fullPrice;
        console.log(toplamQiymet);   
        console.log(toplamcount);   
    })
    let itemss = " "
    itemss=`
    <div class="basket-box">
    <h1 >Toplam Eded:${toplamcount}</h1>
    <h1>Toplam Mebleg:${toplamQiymet}</h1>
    
    </div>
    `
    document.getElementById('calc').innerHTML = itemss
    
   
    
   
}
ToplaItem()