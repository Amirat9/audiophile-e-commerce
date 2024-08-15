'use client';
import React from 'react';
import { useCart } from '@/context/CartContext'; // Adjust the import path as needed

const Checkout = () => {
  const { cartItems } = useCart();
  console.log(cartItems);
  const handleCheckout = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems }),
    });

    const session = await response.json();

    if (session.url) {
      window.location.href = session.url; // Redirect to Stripe Checkout
    }
  };

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);

  return (
    <main className='bg-card'>
      <div className='container pb-[97px] pt-[65px]'>
        <form onSubmit={handleCheckout}>
          <section>
            <button
              type='submit'
              role='link'>
              Checkout
            </button>
          </section>
          <style jsx>
            {`
              section {
                background: #ffffff;
                display: flex;
                flex-direction: column;
                width: 400px;
                height: 112px;
                border-radius: 6px;
                justify-content: space-between;
              }
              button {
                height: 36px;
                background: #556cd6;
                border-radius: 4px;
                color: white;
                border: 0;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
              }
              button:hover {
                opacity: 0.8;
              }
            `}
          </style>
        </form>
      </div>
    </main>
  );
};

export default Checkout;
