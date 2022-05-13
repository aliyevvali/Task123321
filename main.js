// let toBasketBtn = document.querySelectorAll(".add-bag");



// toBasketBtn.forEach(btn => {
//     btn.addEventListener("click", function () {

//         let item = addBasketElem(this);

//         cardTableBody.innerHTML +=
//             `<tr data-id = ${item.id}>
//         <td class="w-25">
//           <img src="${item.img}" class="img-fluid img-thumbnail" alt="Sheep">
//         </td>
//         <td>${item.model}</td>
//         <td>${item.price}</td>
//         <td class="qty">${item.count}</td>
//         <td>${parseInt(item.price) * item.count}$</td>
//         <td>
//           <i class="fa fa-times"></i>
//         </td>
//       </tr>`


//     })
// });



// function addBasketElem(elem) {
// return {
//     id: elem.parentElement.dataset.id,
//     price: elem.parentElement.previousElementSibling.children[0].innerText.substring(1, elem.parentElement.previousElementSibling.children[0].innerText.length),
//     name: elem.parentElement.previousElementSibling.previousElementSibling.innerText.toUpperCase(),
//     img: elem.parentElement.parentElement.previousElementSibling.src,
//     count: 1
// }
// }




// let toBasketbtns = document.querySelectorAll(".add-bag");

// toBasketbtns.forEach(btn => {
//     btn.addEventListener("click", function () {
//         addBasketItem(this);
//         fillBasket();
//     })
// });

// function addBasketItem(elem) {
//     checkBasket();
//     let basket = JSON.parse(localStorage.getItem("basket"));
//     let basketItem = getBasketItem(elem);
//     if (basket.find(b => b.id == basketItem.id) == undefined) {
//         basket.push(basketItem);
//     }
//     else {
//         basket.find(b => b.id == basketItem.id).count += 1;
//     }
//     localStorage.setItem("basket", JSON.stringify(basket))
// }

// function getBasketItem(elem) {
//     return {
//         id: elem.parentElement.dataset.id,
//         price: elem.parentElement.previousElementSibling.children[0].innerText.substring(1, elem.parentElement.previousElementSibling.children[0].innerText.length),
//         name: elem.parentElement.previousElementSibling.previousElementSibling.innerText.toUpperCase(),
//         img: elem.parentElement.parentElement.previousElementSibling.src,
//         count: 1
//     }
// }

// function fillBasket() {
//     checkBasket();
//     let basketItems = JSON.parse(localStorage.getItem("basket"));

//     let itemCount = 0;
//     let tbodys = document.getElementById("t-body");
//     tbodys.forEach(
//         item => {
//             itemCount += item.count;
//             x.innerHTML +=
//                 `<tr data-id = ${item.id}>
//                     <td class="w-25">
//                          <img src="${item.img}" class="" alt="Sheep">
//                     </td>
//                     <td>${item.model}</td>
//                     <td>${item.price}</td>
//                     <td class="">${item.count}</td>
//                      <td>${parseInt(item.price) * item.count}$</td>
//                     <td>
//                         <p>asd</p>
//                     </td>
//                  </tr>`
//         }
//     )
//     document.querySelector(".badge").innerText = itemCount;
// }

// checkBasket();
// fillBasket()

// function checkBasket() {
//     if (!localStorage.getItem("basket")) {
//         localStorage.setItem("basket", JSON.stringify([]))
//     }
// }


//--------------------------------------------------------------------------------------



const btn = document.getElementById('btn');
const tables = document.getElementById("table-div")

btn.addEventListener('click', () => {

    tables.classList.toggle("hide")

});
