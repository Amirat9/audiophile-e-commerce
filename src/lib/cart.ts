interface CartItem {
  slug: string;
  quantity: number;
  name: string;
  price: number;
}

interface Cart {
  timestamp: number;
  items: CartItem[];
}

// Get the cart from sessionStorage with expiration check
export function getCartFromSessionStorage(): CartItem[] {
  const cartJSON = sessionStorage.getItem('cart');
  if (!cartJSON) return [];

  const cart: Cart = JSON.parse(cartJSON);
  const now = Date.now();

  // Check if the cart has expired (1 hour expiration)
  if (now - cart.timestamp > 3600000) {
    sessionStorage.removeItem('cart');
    return [];
  }

  return cart.items;
}

// Save the cart to sessionStorage with a timestamp
function saveCartToSessionStorage(cartItems: CartItem[]): void {
  const cart: Cart = {
    timestamp: Date.now(),
    items: cartItems,
  };
  sessionStorage.setItem('cart', JSON.stringify(cart));
}

// Add or update product in cart
export function addToCart(
  slug: string,
  quantity: number,
  name: string,
  price: number
): void {
  // Retrieve existing cart data
  const cart = getCartFromSessionStorage();

  // Find if the product already exists in the cart
  const productIndex = cart.findIndex((item) => item.slug === slug);

  if (productIndex !== -1) {
    // Update quantity if the product exists
    cart[productIndex].quantity = quantity;
  } else {
    // Add new product if it doesn't exist
    cart.push({ slug, quantity, name, price });
  }

  // Save updated cart back to sessionStorage
  saveCartToSessionStorage(cart);
}

// Clear all items from the cart
export function clearCart(): void {
  sessionStorage.removeItem('cart');
}
