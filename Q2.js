//Q2.1
// mostFrequentTask(["A", "B", "A", "C", "A", "B"]);
const mostFrequentTask = (tasks) => {
    const taskCount = {};
    for (let task of tasks) {
       if (taskCount[task]) {
          taskCount[task] += 1;
       } else {
          taskCount[task] = 1;
       }
    }
     let maxTask = "";
     let maxCount = 0;
     for (let task in taskCount) {
       if (taskCount[task] > maxCount) {
          maxTask = task;
          maxCount = taskCount[task];
       }
     }
     return maxTask;
 }
 
 //Q2.2
 // const tasks2 = {
 //     A: ["B"],
 //     B: ["C"],
 //     C: ["A"]
 //   };
 //   Output: `true` (since A → B → C → A forms a cycl
   
 const isCyclic = (tasks) => {
     const visited = {};
     let temp = Object.keys(tasks)[0];
     while (!visited[temp]) {
         visited[temp] = true;
         temp = tasks[temp][0];
         if (visited[temp]) {
             return true;
         }
       }
       return false;
 }