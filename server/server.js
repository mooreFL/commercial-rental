const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.STRIPE_SECRET_TEST);


const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
    console.log(process.env.STRIPE_SECRET_TEST);
    try {
        const session = await stripe.checkout.sessions.create({
          line_items: [
            {
              // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
              price: 'price_1JuSYQFAXQF3PAb4E0psleUY',
              adjustable_quantity: {
                enabled: true,
                minimum: 0,
                maximum: 2,
              },
              quantity: 1,
            },
            {
                // Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                price: 'price_1JuSXsFAXQF3PAb4NnmBcttt',
                adjustable_quantity: {
                  enabled: true,
                  minimum: 0,
                  maximum: 2,
                },
                quantity: 1,
              },
          ],
          payment_method_types: [
            'card',
          ],
          mode: 'payment',
          success_url: `${YOUR_DOMAIN}/client/index.html`,
          cancel_url: `${YOUR_DOMAIN}/client/index.html`,
        });
        console.log(session.url)
        res.redirect(303, session.url);
    }
   catch(e) {
       console.log(e);
   }
});

app.listen(3001, () => console.log('Running on port 3001'));