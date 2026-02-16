// Datos de productos simulados con imágenes reales (Unsplash)
const products = [
    { id: 1, name: "Camisa Casual Elegante", price: "$45.99", category: "hombre", image: "assets/images/product-1.svg", logo: "👔", description: "Camisa de algodón premium" },
    { id: 2, name: "Vestido Floral Primavera", price: "$89.99", category: "mujer", image: "assets/images/product-2.svg", logo: "👗", description: "Vestido elegante para ocasiones especiales" },
    { id: 3, name: "Zapatillas Deportivas", price: "$129.99", category: "hombre", image: "assets/images/product-3.svg", logo: "👟", description: "Zapatillas cómodas para el día a día" },
    { id: 4, name: "Blusa Seda Natural", price: "$39.99", category: "mujer", image: "assets/images/product-4.svg", logo: "👚", description: "Blusa suave y elegante" },
    { id: 5, name: "Pantalón Infantil", price: "$29.99", category: "niños", image: "assets/images/product-5.svg", logo: "👖", description: "Pantalón cómodo para niños" },
    { id: 6, name: "Vestido Niña Princesa", price: "$34.99", category: "niños", image: "assets/images/product-6.svg", logo: "👗", description: "Vestido hermoso para niñas" },
    { id: 7, name: "Reloj Clásico Dorado", price: "$199.99", category: "accesorios", image: "assets/images/product-7.svg", logo: "⌚", description: "Reloj elegante y sofisticado" },
    { id: 8, name: "Bolso de Cuero", price: "$79.99", category: "accesorios", image: "assets/images/product-8.svg", logo: "👜", description: "Bolso de cuero genuino" },
    { id: 9, name: "Chaqueta Invierno", price: "$159.99", category: "hombre", image: "assets/images/product-9.svg", logo: "🧥", description: "Chaqueta abrigada para el frío" },
    { id: 10, name: "Falda Casual Verano", price: "$49.99", category: "mujer", image: "assets/images/product-10.svg", logo: "👗", description: "Falda fresca para el verano" },
    { id: 11, name: "Zapatillas Niño", price: "$39.99", category: "niños", image: "assets/images/product-11.svg", logo: "👟", description: "Zapatillas coloridas para niños" },
    { id: 12, name: "Gafas de Sol Premium", price: "$89.99", category: "accesorios", image: "assets/images/product-12.svg", logo: "🕶️", description: "Gafas con protección UV" },
    { id: 13, name: "Suéter Lana Merino", price: "$119.99", category: "hombre", image: "assets/images/product-13.svg", logo: "🧶", description: "Suéter de lana de alta calidad" },
    { id: 14, name: "Jeans Skinny Mujer", price: "$69.99", category: "mujer", image: "assets/images/product-14.svg", logo: "👖", description: "Jeans ajustados y cómodos" },
    { id: 15, name: "Mochila Escolar", price: "$24.99", category: "niños", image: "assets/images/product-15.svg", logo: "🎒", description: "Mochila resistente para el colegio" },
    { id: 16, name: "Collar Plata 925", price: "$149.99", category: "accesorios", image: "assets/images/product-16.svg", logo: "📿", description: "Collar de plata elegante" },
    { id: 17, name: "Saco Blazer Clásico", price: "$129.99", category: "hombre", image: "assets/images/product-17.svg", logo: "🧥", description: "Saco formal perfecto para oficina y eventos" },
    { id: 18, name: "Saco de Lino Veraniego", price: "$99.99", category: "mujer", image: "assets/images/product-18.svg", logo: "🧥", description: "Saco ligero y transpirable para looks frescos" },
    { id: 19, name: "Bufanda de Cachemira", price: "$59.99", category: "accesorios", image: "assets/images/product-19.svg", logo: "🧣", description: "Suave y abrigada, ideal para invierno" },
    { id: 20, name: "Sombrero Fedora", price: "$39.99", category: "accesorios", image: "assets/images/product-20.svg", logo: "🎩", description: "Toque elegante para cualquier outfit" },
    { id: 21, name: "Cinturón de Cuero", price: "$34.99", category: "accesorios", image: "assets/images/product-21.svg", logo: "🧷", description: "Cinturón resistente con hebilla metálica" },
    { id: 22, name: "Guantes Táctiles", price: "$19.99", category: "accesorios", image: "assets/images/product-22.svg", logo: "🧤", description: "Compatibles con pantallas táctiles" },
    { id: 23, name: "Cartera Minimalista", price: "$49.99", category: "accesorios", image: "assets/images/product-23.svg", logo: "👝", description: "Cartera compacta para tarjetas y billetes" },
    { id: 24, name: "Saco Oversize Mujer", price: "$119.99", category: "mujer", image: "assets/images/product-24.svg", logo: "🧥", description: "Saco de corte oversize para un look moderno" }
];

// Función para mostrar alertas mejoradas
function showAlert(message, type = 'success') {
    // Remover alertas existentes
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: inherit; float: right; cursor: pointer; font-size: 1.2rem;">&times;</button>
    `;
    
    const targetContainer = document.querySelector('.auth-form') || 
                           document.querySelector('.catalog-container') || 
                           document.querySelector('.form-container');
    
    if (targetContainer) {
        targetContainer.insertBefore(alertDiv, targetContainer.firstChild);
        
        // Auto-remove después de 4 segundos
        setTimeout(() => {
            if (alertDiv.parentElement) {
                alertDiv.remove();
            }
        }, 4000);
    }
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Registro de usuario mejorado
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Validaciones mejoradas
            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                showAlert('⚠️ Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (firstName.length < 2 || lastName.length < 2) {
                showAlert('⚠️ El nombre y apellido deben tener al menos 2 caracteres', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showAlert('⚠️ Por favor, ingresa un email válido', 'error');
                return;
            }
            
            if (password.length < 6) {
                showAlert('⚠️ La contraseña debe tener al menos 6 caracteres', 'error');
                return;
            }
            
            if (password !== confirmPassword) {
                showAlert('⚠️ Las contraseñas no coinciden', 'error');
                return;
            }
            
            // Verificar si el usuario ya existe
            const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
            if (existingUsers.find(user => user.email === email)) {
                showAlert('⚠️ Ya existe una cuenta con este email', 'error');
                return;
            }
            
            // Crear nuevo usuario
            const newUser = {
                id: Date.now(),
                firstName,
                lastName,
                email,
                password,
                createdAt: new Date().toISOString()
            };
            
            existingUsers.push(newUser);
            localStorage.setItem('users', JSON.stringify(existingUsers));
            
            showAlert('✅ ¡Cuenta creada exitosamente! Redirigiendo al login...', 'success');
            
            // Limpiar formulario
            registerForm.reset();
            
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 2000);
        });
    }
});

// Login de usuario mejorado
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;
            
            if (!email || !password) {
                showAlert('⚠️ Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showAlert('⚠️ Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Verificar credenciales
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (!user) {
                showAlert('⚠️ Email o contraseña incorrectos', 'error');
                return;
            }
            
            // Guardar sesión
            localStorage.setItem('currentUser', JSON.stringify(user));
            showAlert('✅ ¡Inicio de sesión exitoso! Redirigiendo...', 'success');
            
            // Limpiar formulario
            loginForm.reset();
            
            setTimeout(() => {
                window.location.href = 'catalog.html';
            }, 1500);
        });
        
        // Recuperar contraseña mejorada
        const forgotPasswordLink = document.getElementById('forgotPassword');
        if (forgotPasswordLink) {
            forgotPasswordLink.addEventListener('click', function(e) {
                e.preventDefault();
                const email = document.getElementById('loginEmail').value.trim();
                
                if (!email) {
                    showAlert('⚠️ Por favor, ingresa tu email primero', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showAlert('⚠️ Por favor, ingresa un email válido', 'error');
                    return;
                }
                
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const user = users.find(u => u.email === email);
                
                if (user) {
                    showAlert(`🔑 Tu contraseña es: ${user.password}`, 'success');
                } else {
                    showAlert('⚠️ No se encontró una cuenta con ese email', 'error');
                }
            });
        }
    }
});

// Catálogo de productos mejorado
document.addEventListener('DOMContentLoaded', function() {
    const productsGrid = document.getElementById('productsGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const navCategoryLinks = document.querySelectorAll('[data-category]');
    
    if (productsGrid) {
        // Función para renderizar productos mejorada
        function renderProducts(productsToShow = products) {
            productsGrid.innerHTML = '';
            
            if (productsToShow.length === 0) {
                productsGrid.innerHTML = `
                    <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #7f8c8d;">
                        <h3>😔 No se encontraron productos</h3>
                        <p>Intenta con otra búsqueda o categoría</p>
                    </div>
                `;
                return;
            }
            
            productsToShow.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image" style="background-image: url('${product.image}');">
                        <div class="product-badge">${product.logo ? product.logo : ''}</div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <p style="color: #7f8c8d; font-size: 0.9rem; margin-bottom: 0.5rem;">${product.description}</p>
                        <p class="product-price">${product.price}</p>
                        <button class="add-to-cart" data-product-id="${product.id}">
                            🛒 Agregar al Carrito
                        </button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
            
            // Agregar event listeners a los botones de agregar al carrito
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productId = parseInt(this.dataset.productId);
                    addToCart(productId);
                    
                    // Efecto visual en el botón
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                });
            });
        }
        
        // Función para agregar al carrito mejorada
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
                showAlert(`✅ ${product.name} - Cantidad actualizada en el carrito`, 'success');
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
                showAlert(`✅ ${product.name} agregado al carrito`, 'success');
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCounter();
        }
        
        // Función para actualizar contador del carrito
        function updateCartCounter() {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            const cartButton = document.getElementById('cartButton');
            if (cartButton && totalItems > 0) {
                cartButton.textContent = `🛒 Carrito (${totalItems})`;
            }
        }
        
        // Filtrar productos por categoría mejorado
        function filterByCategory(category) {
            // Actualizar botones activos
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            const activeButton = document.querySelector(`[data-category="${category}"]`);
            if (activeButton && activeButton.classList.contains('category-btn')) {
                activeButton.classList.add('active');
            }
            
            if (category === 'all') {
                renderProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === category);
                renderProducts(filteredProducts);
            }
            
            // Scroll suave al catálogo
            document.querySelector('.catalog-header').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }
        
        // Event listeners para botones de categoría
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;
                filterByCategory(category);
            });
        });
        
        // Event listeners para enlaces de navegación
        navCategoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.dataset.category;
                if (category) {
                    filterByCategory(category);
                }
            });
        });
        
        // Renderizar productos inicialmente
        renderProducts();
        updateCartCounter();
        
        // Funcionalidad de búsqueda mejorada
        const searchBox = document.querySelector('.search-box');
        if (searchBox) {
            let searchTimeout;
            
            searchBox.addEventListener('input', function() {
                clearTimeout(searchTimeout);
                
                searchTimeout = setTimeout(() => {
                    const searchTerm = this.value.toLowerCase().trim();
                    
                    if (searchTerm === '') {
                        renderProducts(products);
                    } else {
                        const filteredProducts = products.filter(product => 
                            product.name.toLowerCase().includes(searchTerm) ||
                            product.category.toLowerCase().includes(searchTerm) ||
                            product.description.toLowerCase().includes(searchTerm)
                        );
                        renderProducts(filteredProducts);
                    }
                }, 300); // Debounce de 300ms
            });
        }
    }
});

// Verificar autenticación y mostrar usuario
document.addEventListener('DOMContentLoaded', function() {
    setupUserButtons();
    updateCartCounter();
});

// Función para mostrar el carrito (redirige a la página del carrito)
function showCart() {
    window.location.href = 'cart.html';
}

// Función para limpiar carrito (ahora desde la página del carrito)
function clearCart() {
    if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
        localStorage.removeItem('cart');
        localStorage.removeItem('appliedDiscount');
        showAlert('🗑️ Carrito vaciado', 'success');
        updateCartCounter();
    }
}

// Códigos de descuento válidos
const promoCodes = {
    'FIFTY10': 0.10,
    'WELCOME20': 0.20,
    'SAVE15': 0.15,
    'STUDENT': 0.25
};

// Agregar botones de carrito y cerrar sesión en el catálogo
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('catalog.html')) {
        const navActions = document.querySelector('.nav-actions');
        if (navActions) {
            // Botón de carrito mejorado
            const cartButton = document.createElement('a');
            cartButton.href = 'cart.html';
            cartButton.id = 'cartButton';
            cartButton.className = 'cart-nav-btn';
            cartButton.innerHTML = '🛒 Carrito';
            
            navActions.appendChild(cartButton);
        }
    }
    
    // Configurar botones de usuario y cerrar sesión
    setupUserButtons();
    updateCartCounter();
});

// Configurar botones de usuario y cerrar sesión
function setupUserButtons() {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    const userButton = document.getElementById('userButton');
    const logoutButton = document.getElementById('logoutButton');
    
    if (user && userButton) {
        userButton.textContent = `👋 Hola, ${user.firstName}`;
        userButton.href = '#';
        userButton.style.display = 'none'; // Ocultar botón de login
        
        if (logoutButton) {
            logoutButton.style.display = 'inline-block'; // Mostrar botón de logout
            logoutButton.addEventListener('click', function() {
                if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
                    localStorage.removeItem('currentUser');
                    showAlert('👋 Sesión cerrada correctamente', 'success');
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 1500);
                }
            });
        }
    } else if (logoutButton) {
        logoutButton.style.display = 'none'; // Ocultar botón de logout si no hay usuario
    }
}

// Función para actualizar contador del carrito
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartButton = document.getElementById('cartButton');
    if (cartButton) {
        if (totalItems > 0) {
            cartButton.innerHTML = `🛒 Carrito <span class="cart-badge">${totalItems}</span>`;
        } else {
            cartButton.innerHTML = '🛒 Carrito';
        }
    }
}

// Funciones del carrito de compras
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        loadCartPage();
        setupCartEventListeners();
    }
});

function loadCartPage() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCartContainer = document.getElementById('emptyCart');
    const cartContent = document.querySelector('.cart-content');
    
    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCartContainer.style.display = 'flex';
        return;
    }
    
    cartContent.style.display = 'grid';
    emptyCartContainer.style.display = 'none';
    
    renderCartItems(cart);
    updateCartSummary();
    setupUserButtons();
}

function renderCartItems(cart) {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-details">
                <div class="item-name">${item.name}</div>
                <div class="item-description">${item.description}</div>
            </div>
            <div class="item-price">${item.price}</div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})" title="Eliminar producto">🗑️</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const itemIndex = cart.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
        cart[itemIndex].quantity += change;
        
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        loadCartPage();
        updateCartCounter();
        
        if (change > 0) {
            showAlert('✅ Cantidad actualizada', 'success');
        }
    }
}

function removeFromCart(productId) {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
        let cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const itemIndex = cart.findIndex(item => item.id === productId);
        
        if (itemIndex !== -1) {
            const removedItem = cart[itemIndex];
            cart.splice(itemIndex, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            loadCartPage();
            updateCartCounter();
            showAlert(`🗑️ ${removedItem.name} eliminado del carrito`, 'success');
        }
    }
}

function updateCartSummary() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const appliedDiscount = parseFloat(localStorage.getItem('appliedDiscount') || '0');
    
    let subtotal = 0;
    cart.forEach(item => {
        const price = parseFloat(item.price.replace('$', ''));
        subtotal += price * item.quantity;
    });
    
    const shipping = subtotal > 50 ? 0 : 5.99;
    const discountAmount = subtotal * appliedDiscount;
    const total = subtotal + shipping - discountAmount;
    
    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'GRATIS' : `$${shipping.toFixed(2)}`;
    document.getElementById('discount').textContent = `-$${discountAmount.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    
    // Mostrar mensaje de envío gratis
    if (subtotal > 50) {
        document.getElementById('shipping').style.color = '#00b894';
        document.getElementById('shipping').style.fontWeight = '600';
    }
}

function setupCartEventListeners() {
    // Aplicar código promocional
    const applyPromoBtn = document.getElementById('applyPromo');
    const promoInput = document.getElementById('promoCode');
    
    if (applyPromoBtn && promoInput) {
        applyPromoBtn.addEventListener('click', function() {
            const code = promoInput.value.trim().toUpperCase();
            
            if (promoCodes[code]) {
                localStorage.setItem('appliedDiscount', promoCodes[code].toString());
                updateCartSummary();
                showAlert(`🎉 Código "${code}" aplicado! ${(promoCodes[code] * 100)}% de descuento`, 'success');
                promoInput.value = '';
            } else if (code) {
                showAlert('❌ Código promocional inválido', 'error');
            } else {
                showAlert('⚠️ Por favor ingresa un código promocional', 'error');
            }
        });
        
        // Aplicar código con Enter
        promoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                applyPromoBtn.click();
            }
        });
    }
    
    // Proceder al pago
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            if (cart.length === 0) {
                showAlert('⚠️ Tu carrito está vacío', 'error');
                return;
            }
            
            const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
            if (!user) {
                if (confirm('Necesitas iniciar sesión para continuar. ¿Deseas ir al login?')) {
                    window.location.href = 'login.html';
                }
                return;
            }
            
            // Simular proceso de pago
            const total = document.getElementById('total').textContent;
            const confirmMessage = `🛒 RESUMEN DE COMPRA\n\n` +
                                 `Cliente: ${user.firstName} ${user.lastName}\n` +
                                 `Email: ${user.email}\n` +
                                 `Total: ${total}\n` +
                                 `Productos: ${cart.length} artículos\n\n` +
                                 `¿Confirmar compra?`;
            
            if (confirm(confirmMessage)) {
                // Limpiar carrito y descuentos
                localStorage.removeItem('cart');
                localStorage.removeItem('appliedDiscount');
                
                showAlert('🎉 ¡Compra realizada exitosamente! Recibirás un email de confirmación.', 'success');
                
                setTimeout(() => {
                    window.location.href = 'catalog.html';
                }, 3000);
            }
        });
    }
    
    // Vaciar carrito
    const clearCartBtn = document.getElementById('clearCartBtn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas vaciar todo el carrito?')) {
                localStorage.removeItem('cart');
                localStorage.removeItem('appliedDiscount');
                loadCartPage();
                updateCartCounter();
                showAlert('🗑️ Carrito vaciado completamente', 'success');
            }
        });
    }
}