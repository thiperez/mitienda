let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  document.getElementById("contador").textContent = carrito.length;
  document.getElementById("total").textContent = total;

  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  carrito.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

function toggleCarrito() {
  document.getElementById("carrito-panel").classList.toggle("activo");
}
window.finalizarCompra = function () {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "🛒 *Nuevo pedido Hachi Store*%0A%0A";

  carrito.forEach((item, index) => {
    mensaje += `${index + 1}. ${item.nombre} - $${item.precio}%0A`;
  });

  mensaje += `%0A💰 *Total:* $${total}%0A`;
  mensaje += `%0A📍 Enviar datos de envío:%0A`;
  mensaje += `Nombre:%0A`;
  mensaje += `Dirección:%0A`;
  mensaje += `Método de pago (Transferencia / MP):`;

  const telefono = "5491123456789"; // 👈 TU NÚMERO CON CÓDIGO PAÍS
  window.open(`https://wa.me/${+5493512588291}?text=${mensaje}`, "_blank");
};
