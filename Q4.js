//Q4.1

// debug
// it may be the case that the user is not found in the database, so we should check if the user exists or not
// we can use try catch block for it
app.get("/user", async (req, res) => {
    try{
        const user = await User.findById(req.query.id);
        if (!user) {
            return res.status(400).json("User not found");
        }
        res.json(user.name);
    }
    catch(err){
        return res.status(400).json("Something went wrong");
    }
});


//Q4.2

// Use **Joi (or any other library)** to validate that a user registration request contains:
// - A `name` (min 3, max 30 characters)
// - An `email` (valid email format)
// - A `password` (min 6 characters)

// Return a **400 error** if validation fails.

joi.validate(req.body, {
    name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
}, (err) => {
    if (err) {
        return res.status(400).json(err);
    }
});