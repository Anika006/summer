            
            
function myFunction(value) {
    var price = document.getElementById("total_price");
    var old_price = price.innerHTML;
    var new_price = parseFloat(old_price) + parseFloat(value);
    document.getElementById("total_price").innerHTML=new_price;
    document.getElementById("total").innerHTML=new_price;
}
function discount(){
    var discount = document.getElementById("discount_price").value;
    var old = document.getElementById("total_price").innerHTML;
    var discount_price = parseFloat(old) % parseFloat(discount);
    document.getElementById("discount").innerHTML= discount_price;

    document.getElementById("total").innerHTML = parseFloat(old) - discount_price;
}
function discount(){
    var discount = document.getElementById("discount_price").value;
    var old = document.getElementById("total_price").innerHTML;
    var discount_price = parseFloat(old) % parseFloat(discount);
    document.getElementById("discount").innerHTML= discount_price;

    document.getElementById("total").innerHTML = parseFloat(old) - discount_price;
}
