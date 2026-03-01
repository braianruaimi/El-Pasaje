// Sistema de carrito de compras
class ShoppingCart {
    constructor() {
        this.items = [];
        this.init();
    }

    init() {
        // Crear el contenedor del carrito
        this.createCartUI();
        
        // Agregar event listeners a todos los botones de agregar
        document.addEventListener('DOMContentLoaded', () => {
            const addButtons = document.querySelectorAll('.add-to-cart-btn');
            addButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const name = e.target.dataset.name;
                    const price = parseFloat(e.target.dataset.price);
                    this.addItem(name, price);
                });
            });
        });
    }

    createCartUI() {
        const cartHTML = `
            <div id="cart-container" class="cart-container">
                <button id="cart-toggle" class="cart-toggle">
                    🛒 <span id="cart-count" class="cart-count">0</span>
                </button>
                <div id="cart-panel" class="cart-panel">
                    <div class="cart-header">
                        <h3>🛒 Tu Pedido</h3>
                        <button id="cart-close" class="cart-close">✕</button>
                    </div>
                    <div id="cart-items" class="cart-items">
                        <p class="cart-empty">Tu carrito está vacío</p>
                    </div>
                    <div class="cart-footer">
                        <div class="cart-total">
                            <span>Total:</span>
                            <span id="cart-total-amount">$0</span>
                        </div>
                        <button id="cart-checkout" class="cart-checkout-btn">
                            <svg width="20" height="20" viewBox="0 0 32 32" fill="white">
                                <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 8.188-2.113c2.35 1.287 5.024 1.963 7.812 1.963 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.25c-2.444 0-4.819-0.662-6.912-1.912l-0.512-0.3-5.044 1.3 1.35-5.012-0.337-0.525c-1.362-2.137-2.087-4.612-2.087-7.15 0-7.456 6.069-13.525 13.525-13.525s13.525 6.069 13.525 13.525-6.053 13.6-13.512 13.6zM23.362 19.106c-0.4-0.2-2.363-1.163-2.725-1.3-0.363-0.125-0.625-0.188-0.888 0.2s-1.025 1.3-1.25 1.563c-0.225 0.262-0.45 0.3-0.85 0.1s-1.65-0.606-3.137-1.931c-1.163-1.031-1.944-2.306-2.169-2.706s-0.025-0.612 0.175-0.812c0.181-0.175 0.4-0.463 0.6-0.688 0.2-0.237 0.263-0.4 0.388-0.662 0.125-0.263 0.063-0.488-0.037-0.688s-0.888-2.137-1.213-2.925c-0.319-0.769-0.644-0.663-0.888-0.675-0.231-0.012-0.488-0.012-0.75-0.012s-0.688 0.1-1.050 0.488c-0.363 0.4-1.375 1.337-1.375 3.262s1.413 3.787 1.606 4.050c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.831 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.363-0.963 2.694-1.894 0.331-0.931 0.331-1.731 0.231-1.894-0.094-0.175-0.356-0.275-0.756-0.475z"/>
                            </svg>
                            Quiero pedir
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', cartHTML);
        
        // Event listeners
        document.getElementById('cart-toggle').addEventListener('click', () => this.toggleCart());
        document.getElementById('cart-close').addEventListener('click', () => this.closeCart());
        document.getElementById('cart-checkout').addEventListener('click', () => this.checkout());
    }

    addItem(name, price) {
        // Buscar si el item ya existe
        const existingItem = this.items.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                name: name,
                price: price,
                quantity: 1
            });
        }
        
        this.updateCart();
        this.showAddedAnimation();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.updateCart();
    }

    updateQuantity(index, change) {
        this.items[index].quantity += change;
        if (this.items[index].quantity <= 0) {
            this.removeItem(index);
        } else {
            this.updateCart();
        }
    }

    updateCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartTotalAmount = document.getElementById('cart-total-amount');
        
        // Actualizar contador
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        
        // Actualizar items
        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
            cartTotalAmount.textContent = '$0';
            return;
        }
        
        cartItemsContainer.innerHTML = this.items.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">$${this.formatPrice(item.price)}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="cart.updateQuantity(${index}, -1)">−</button>
                    <span class="cart-item-qty">${item.quantity}</span>
                    <button class="cart-qty-btn" onclick="cart.updateQuantity(${index}, 1)">+</button>
                    <button class="cart-remove-btn" onclick="cart.removeItem(${index})">🗑️</button>
                </div>
            </div>
        `).join('');
        
        // Actualizar total
        const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalAmount.textContent = '$' + this.formatPrice(total);
    }

    formatPrice(price) {
        return price.toLocaleString('es-AR', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    }

    toggleCart() {
        const panel = document.getElementById('cart-panel');
        panel.classList.toggle('active');
    }

    closeCart() {
        document.getElementById('cart-panel').classList.remove('active');
    }

    showAddedAnimation() {
        const toggle = document.getElementById('cart-toggle');
        toggle.classList.add('bounce');
        setTimeout(() => toggle.classList.remove('bounce'), 500);
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }
        
        // Crear mensaje para WhatsApp
        let message = '¡Hola! Quiero hacer el siguiente pedido:\n\n';
        
        this.items.forEach(item => {
            message += `• ${item.quantity}x ${item.name} - $${this.formatPrice(item.price * item.quantity)}\n`;
        });
        
        const total = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        message += `\n*Total: $${this.formatPrice(total)}*`;
        
        // Codificar el mensaje para URL
        const encodedMessage = encodeURIComponent(message);
        
        // Abrir WhatsApp
        window.open(`https://wa.me/5492215047962?text=${encodedMessage}`, '_blank');
        
        // Limpiar carrito después de enviar
        setTimeout(() => {
            this.items = [];
            this.updateCart();
            this.closeCart();
        }, 1000);
    }
}

// Inicializar carrito
const cart = new ShoppingCart();
