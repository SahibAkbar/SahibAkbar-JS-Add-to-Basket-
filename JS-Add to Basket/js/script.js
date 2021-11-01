let carts = document.querySelectorAll(".add");

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function (e) {
        e.preventDefault();
        let id = this.closest(".card").id;
        let oldCart = localStorage.getItem("cartt")
        let newCart;
        if (oldCart == null) {
            newCart = id;
        }else{
            let arr = oldCart.split(",")
            if (arr.find(item=>item==id) == undefined) {
                newCart = oldCart = "," + id;
            }else{
                let newArr = arr.filter(item=>item != id)
                newCart = newArr.join(",");
            }
        }

        localStorage.setItem("cartt", newCart);

        document.querySelector(".sale").textContent = localStorage.getItem("cartt").split(",").length
    });
}

let oldCart = localStorage.getItem("cartt")
if (oldCart != null) {
    document.querySelector(".sale").textContent = localStorage.getItem("cartt").split(",").length
}