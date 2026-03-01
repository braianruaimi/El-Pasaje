// Sistema de tracking y métricas para El Pasaje Food

class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Inicializar métricas si no existen
        if (!localStorage.getItem('elpasaje_metrics')) {
            const initialData = {
                totalViews: 0,
                uniqueVisitors: 0,
                whatsappClicks: 0,
                cartItems: [],
                orderHistory: [],
                dailyStats: {},
                productStats: {},
                lastVisit: null,
                firstVisit: null
            };
            localStorage.setItem('elpasaje_metrics', JSON.stringify(initialData));
        }

        // Registrar visita
        this.trackPageView();

        // Interceptar clicks de WhatsApp
        this.trackWhatsAppClicks();

        // Interceptar agregados al carrito
        this.trackCartActions();
    }

    getMetrics() {
        return JSON.parse(localStorage.getItem('elpasaje_metrics'));
    }

    saveMetrics(data) {
        localStorage.setItem('elpasaje_metrics', JSON.stringify(data));
    }

    trackPageView() {
        const metrics = this.getMetrics();
        const today = new Date().toISOString().split('T')[0];
        
        // Incrementar vistas totales
        metrics.totalViews++;

        // Verificar si es visitante único (por sesión)
        if (!sessionStorage.getItem('elpasaje_visited')) {
            metrics.uniqueVisitors++;
            sessionStorage.setItem('elpasaje_visited', 'true');
        }

        // Estadísticas diarias
        if (!metrics.dailyStats[today]) {
            metrics.dailyStats[today] = {
                views: 0,
                whatsappClicks: 0,
                cartAdds: 0,
                orders: 0,
                revenue: 0
            };
        }
        metrics.dailyStats[today].views++;

        // Actualizar fechas
        if (!metrics.firstVisit) {
            metrics.firstVisit = new Date().toISOString();
        }
        metrics.lastVisit = new Date().toISOString();

        this.saveMetrics(metrics);
    }

    trackWhatsAppClicks() {
        document.addEventListener('click', (e) => {
            const target = e.target.closest('a[href*="wa.me"], a[href*="whatsapp"]');
            if (target) {
                const metrics = this.getMetrics();
                const today = new Date().toISOString().split('T')[0];

                metrics.whatsappClicks++;
                
                if (metrics.dailyStats[today]) {
                    metrics.dailyStats[today].whatsappClicks++;
                }

                // Extraer información del producto del mensaje
                const url = target.href;
                const messageMatch = url.match(/text=([^&]*)/);
                if (messageMatch) {
                    const message = decodeURIComponent(messageMatch[1]);
                    this.trackOrder(message);
                }

                this.saveMetrics(metrics);
                
                // Log para debugging
                console.log('📱 WhatsApp click tracked:', metrics.whatsappClicks);
            }
        });
    }

    trackCartActions() {
        // Esperar a que el carrito esté disponible
        const checkCart = setInterval(() => {
            if (window.cart && window.cart.addItem) {
                clearInterval(checkCart);
                
                // Guardar el método original
                const originalAddItem = window.cart.addItem.bind(window.cart);
                
                // Sobrescribir con tracking
                window.cart.addItem = (name, price) => {
                    // Llamar al método original primero
                    originalAddItem(name, price);
                    
                    // Luego hacer el tracking
                    const metrics = this.getMetrics();
                    const today = new Date().toISOString().split('T')[0];

                    // Registrar en estadísticas de productos
                    if (!metrics.productStats[name]) {
                        metrics.productStats[name] = {
                            name: name,
                            price: price,
                            timesAdded: 0,
                            totalRevenue: 0
                        };
                    }
                    metrics.productStats[name].timesAdded++;
                    metrics.productStats[name].totalRevenue += price;

                    if (metrics.dailyStats[today]) {
                        metrics.dailyStats[today].cartAdds++;
                    }

                    this.saveMetrics(metrics);
                    
                    console.log('🛒 Cart add tracked:', name, '$' + price);
                };
            }
        }, 100);
        
        // Timeout de seguridad
        setTimeout(() => clearInterval(checkCart), 5000);
    }

    trackOrder(message) {
        const metrics = this.getMetrics();
        const today = new Date().toISOString().split('T')[0];

        // Extraer productos y total del mensaje
        let totalAmount = 0;
        const products = [];

        // Parsear mensaje de carrito
        if (message.includes('Total:')) {
            const lines = message.split('\n');
            lines.forEach(line => {
                // Buscar líneas con productos (formato: • 1x Producto - $precio)
                const productMatch = line.match(/•\s*(\d+)x\s*([^-]+)\s*-\s*\$?([\d.,]+)/);
                if (productMatch) {
                    const quantity = parseInt(productMatch[1]);
                    const name = productMatch[2].trim();
                    const price = parseFloat(productMatch[3].replace(/[.,]/g, ''));
                    
                    products.push({ name, quantity, price });
                }

                // Extraer total
                const totalMatch = line.match(/Total:\s*\$?([\d.,]+)/);
                if (totalMatch) {
                    totalAmount = parseFloat(totalMatch[1].replace(/[.,]/g, ''));
                }
            });

            // Registrar orden
            metrics.orderHistory.push({
                timestamp: new Date().toISOString(),
                products: products,
                total: totalAmount
            });

            if (metrics.dailyStats[today]) {
                metrics.dailyStats[today].orders++;
                metrics.dailyStats[today].revenue += totalAmount;
            }

            // Actualizar estadísticas de productos
            products.forEach(product => {
                if (!metrics.productStats[product.name]) {
                    metrics.productStats[product.name] = {
                        name: product.name,
                        price: product.price / product.quantity,
                        timesAdded: 0,
                        totalRevenue: 0
                    };
                }
                metrics.productStats[product.name].timesAdded += product.quantity;
                metrics.productStats[product.name].totalRevenue += product.price;
            });

            this.saveMetrics(metrics);
            console.log('✅ Order tracked:', totalAmount);
        }
    }

    // Método para limpiar datos (solo para CEO)
    resetMetrics() {
        if (confirm('¿Estás seguro de que quieres resetear todas las métricas?')) {
            localStorage.removeItem('elpasaje_metrics');
            this.init();
            alert('Métricas reseteadas exitosamente');
            window.location.reload();
        }
    }

    // Exportar datos
    exportData() {
        const metrics = this.getMetrics();
        const dataStr = JSON.stringify(metrics, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `elpasaje-metrics-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
    }
}

// Inicializar analytics
const analytics = new Analytics();
window.elpasajeAnalytics = analytics;
