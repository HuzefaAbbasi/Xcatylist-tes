
// Q5.1
//How would you design a real-time notification system for a task management app? Briefly explain your approach.

// Answer:
// I would personally prefer firebase cloud messaging for this purpose, as it requires minimal setup. But it can vary according to the requirements of the project.

// 1. Set up firebase project, add its json file in react app
// 2. Add admin sdk in node js
// 3. install necessary packages
// 4. Create a notification service in node js, which sends the notification to the user
// 5. Put a listener on my react app to listen for notification. And also ask for necessary persmissions from the user


// Q5.2
// List three strategies to optimize an API that serves millions of tasks for users.
// 1. We can use cache using redis, so that we can fetch the data from cache instead of database
// 2. We can use load balancer to distribute the load among multiple servers
// 3. We can use pagination, and also limit requests per user.


