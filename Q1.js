//Q1.1
// we will just use findOne method, as it appears to be fetching data of a single user
const tasks = await Task.findOne({ owner: userId });

//Q1.2
// 1. We can user Redis to store the data in cache, so that we can fetch the data from cache instead of database
// 2. We can store data on users device using local storage, so that we can fetch the data from local storage instead of database
// 3. If we have to just save the data for the current session we can use contextAPI or redux to store the data in memory

