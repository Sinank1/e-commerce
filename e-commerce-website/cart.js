// Her ürün için ayrı işlemler yapacağınız için sınıf kullanıyoruz
const updatePrice = (productNumber, unitPrice) => {
  const counterElement = document.querySelector(`.num${productNumber}`);
  const priceElement = document.querySelector(
    `.product-${productNumber} .price`
  );

  // Artırma butonuna tıklanınca sayı artar ve fiyat güncellenir
  document
    .querySelector(`.plus${productNumber}`)
    .addEventListener("click", () => {
      let count = parseInt(counterElement.textContent);
      count++;
      counterElement.textContent = count;
      const newPrice = unitPrice * count;
      priceElement.textContent = `$${newPrice}`;
      updateTotal();
    });

  // Azaltma butonuna tıklanınca sayı azalır ve fiyat güncellenir
  document
    .querySelector(`.minus${productNumber}`)
    .addEventListener("click", () => {
      let count = parseInt(counterElement.textContent);
      if (count > 1) {
        count--;
        counterElement.textContent = count;
        const newPrice = unitPrice * count;
        priceElement.textContent = `$${newPrice}`;
        updateTotal();
      }
    });
};

// Toplam fiyatı hesaplayan fonksiyon
const updateTotal = () => {
  const price1 = parseFloat(
    document.querySelector(".product-1 .price").textContent.replace("$", "")
  );
  const price2 = parseFloat(
    document.querySelector(".product-2 .price").textContent.replace("$", "")
  );
  const price3 = parseFloat(
    document.querySelector(".product-3 .price").textContent.replace("$", "")
  );

  const subtotal = price1 + price2 + price3;
  const discount = subtotal * 0.2; // Örnek indirim oranı %20
  const delivery = 15; // Teslimat ücreti
  const total = subtotal - discount + delivery;

  document.querySelector(".subtotal span").textContent = `$${subtotal}`;
  document.querySelector(".discount span").textContent = `-$${discount.toFixed(
    2
  )}`;
  document.querySelector(".total span").textContent = `$${total.toFixed(2)}`;
};

// Ürün başına güncellenmesi gereken bilgileri burada çağırıyoruz
updatePrice(1, 145);
updatePrice(2, 180);
updatePrice(3, 240);

// Sayfa yüklendiğinde toplamı güncelle
updateTotal();
