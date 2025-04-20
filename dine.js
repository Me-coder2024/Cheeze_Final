let cartCount = 0;

    function addToCart() {
      cartCount++;
      document.getElementById("cartCount").innerText = cartCount;
    }

    function filterFood() {
      let input = document.getElementById("searchInput").value.toLowerCase();
      let cards = document.querySelectorAll(".food-card");

      cards.forEach(card => {
        const name = card.getAttribute("data-name").toLowerCase();
        card.style.display = name.includes(input) ? "block" : "none";
      });
    }