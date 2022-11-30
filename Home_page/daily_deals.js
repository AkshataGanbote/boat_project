var products=[
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/1-2_300x.png?v=1653637007",
        name: "Wave Neo",
        rating: "4.7",
        discount: "70% off",
        price: "1,799",
        strikedoffprice:"5,990" ,
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_9aca9266-9d5e-4668-a559-1cad21f15b18_300x.png?v=1662810044",
        name: "Wave Style",
        rating: "4.7",
        discount: "73% off",
        price: "1,599",
        strikedoffprice:"5,990" ,
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/blue_9aca9266-9d5e-4668-a559-1cad21f15b18_300x.png?v=1662810044",
        name: "Airdopes 171",
        rating: "4.8",
        discount: "80% off",
        price: "1,199",
        strikedoffprice:"5,999" ,
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/103-pro-pink_300x.png?v=1666696424",
        name: "Rocerz 103 pro",
        rating: "4.9",
        discount: "66% off",
        price: "849",
        strikedoffprice:"2490",
    },
    {
        image_url: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/R205Pro-FI-Blue02_300x.png?v=1667544225",
        name: "Rocerz 105 pro",
        rating: "4.9",
        discount: "55% off",
        price: "1099",
        strikedoffprice:"2499",
    },
    
    
    

]

layout();
function layout(){
    products.map(function(elem){
        var div=document.createElement("div")
        var img=document.createElement("img");
        img.src=elem.image_url;
        img.setAttribute("class", "daily_deals_pro_img");

        var pro_name=document.createElement("h2")
        pro_name.textContent=elem.name;

        var pro_rating=document.createElement("p");
        pro_rating.textContent=elem.rating;
        
        var price_div =document.createElement("div");
        var  off=document.createElement("p");
        off.textContent=elem.discount;

        var pro_price= document.createElement("p");
        pro_price.textContent="₹"+elem.price;

        var mrp=document.createElement("p");
        mrp.textContent="₹"+elem.strikedoffprice;

        price_div.append(off, pro_price, mrp);

        var button=document.createElement("button");
        button.textContent="ADD TO CART"

        div.append(img, pro_name, pro_rating, price_div, button);
        div.setAttribute("class", "card");

        document.querySelector("#daily-deals").append(div);

    })
}