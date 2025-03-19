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

