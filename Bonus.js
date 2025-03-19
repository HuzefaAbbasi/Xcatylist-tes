// BQ1.
// Implement an API that deletes a task by ID and returns an appropriate response.
app.delete("/tasks", async (req, res) => {
    try{
        // Mongose function to find by id and delete
        const tasks = await User.findByIdAndDelete(req.query.id);
        if (!tasks) {
            return res.status(400).json("Task not found");
        }
        res.status(200).json({
            message: "Task deleted successfully"
        });
    }
    catch(err){
        return res.status(400).json("Something went wrong");
    }
});


// BQ2.
// Design an API that allows searching tasks by title or status with pagination.

app.get("/tasks", async (req, res) => {
    try{
        const page = req.query.page || 1;
        const limit = req.query.limit || 10;
        const skip = (page - 1) * limit;
        const tasks = await Task.find({
            $or: [
                { title: req.query.title },
                { status: req.query.status }
            ]
        }).limit(limit).skip(skip);
        res.status(200).json(tasks);
    }
    catch(err){
        return res.status(400).json("Something went wrong");
    }
});