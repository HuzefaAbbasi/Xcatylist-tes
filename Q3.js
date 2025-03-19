// Q3.1: Implement Rate Limiting

// Implement **rate limiting** in Express to prevent API abuse (limit to 5 requests per minute per user).

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({max: 5, windowMs: 60 * 1000});
// use this middlewear
app.use(limiter);

// Q3.2
// How would you prevent mass assignment vulnerabilities in a user update API? Provide a code example.
