async function loadProducts() {
    const response = await fetch("products.json");
    const products = await response.json();

    const container = document.getElementById("products-container");
    const search = document.getElementById("search");

    function display(list) {
        container.innerHTML = "";

        list.forEach(product => {
            container.innerHTML += `
                <div class="card">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="card-content">
                        <h3>${product.name}</h3>
                        <div class="price">${product.price}</div>
                        <button onclick="order('${product.name}')">
                            اطلب عبر واتساب
                        </button>
                    </div>
                </div>
            `;
        });
    }

    display(products);

    search.addEventListener("input", function () {
        const value = this.value.toLowerCase();

        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(value)
        );

        display(filtered);
    });
}

function order(name) {
    const phone = "213668258230";
    const message = encodeURIComponent("السلام عليكم، أريد طلب: " + name);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

loadProducts();
