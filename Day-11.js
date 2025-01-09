/* Day 11 :Promises and Async/Await */

/* Activity 1: Understanding Promises */
/* Task 1:Create a promise that resolves with a message after a 2-second timeout and log the message to the console. */

const promiseOne = new Promise((resolve) => {
  setTimeout(() => resolve("Promise resolved after 2 seconds!"), 2000);
});

promiseOne.then((message) => console.log(message)); // Output: Promise resolved after 2 seconds!

/* Task 2:Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch(). */

const promiseTwo = new Promise((res, rej) => {
  setTimeout(() => {
    console.log("rejected Promise after 2 seconds!");
    rej();
  }, 2000);
});

promiseTwo.catch((error) => {
  console.error(error); // Output: rejected Promise after 2 seconds!
});

/* Activity 2: Chaining Promises */
/* Task 3:Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order. */

fetchData = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Data fetched!");
      res();
    }, 1000);
  });
};

fetchData()
  .then(() => {
    console.log("Processing data...");
    return "Data processed successfully!";
  })
  .then((finalMessage) => {
    console.log(finalMessage); // Output: Data fetched! Processing data... Data processed successfully!
  });

/* Activity 3: Using Async/Await */
/* Task 4:Write an async function that waits for a promise to resolve and then logs the resolved value. */

const asyncResolve = async () => {
  const result = await promiseOne;
  console.log(result); // Output: Promise resolved after 2 seconds!
};
asyncResolve();

/* Task 5:Write an async function that handles a rejected promise using try-catch and logs the error message. */

const asyncReject = async () => {
  try {
    await promiseTwo;
  } catch (error) {
    console.error("Error in promises:", error); // Output: Error in promises: undefined
  }
};

asyncReject();

/* Activity 4: Fetching Data from an API */
/* Task 6:Use the fetch API to get data from a public API and log the response data to the console using promises. */

const fetchingFunc = async () => {
  try {
    const response = await fetch("https://api.github.com/users/octocat");
    return response;
  } catch (error) {
    console.log(error);
  }
};

fetchingFunc()
  .then(async (response) => {
    const data = await response.json();
    return data;
  })
  .then((data) => {
    console.log(data);
    return data;
  })
  .catch((error) => {
    console.log(error);
  });

/* Output:{
  login: 'octocat',
  id: 583231,
  node_id: 'MDQ6VXNlcjU4MzIzMQ==',
  avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/octocat',
  html_url: 'https://github.com/octocat',
  followers_url: 'https://api.github.com/users/octocat/followers',
  following_url: 'https://api.github.com/users/octocat/following{/other_user}',
  gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
  organizations_url: 'https://api.github.com/users/octocat/orgs',
  repos_url: 'https://api.github.com/users/octocat/repos',
  events_url: 'https://api.github.com/users/octocat/events{/privacy}',
  received_events_url: 'https://api.github.com/users/octocat/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: 'The Octocat',
  company: '@github',
  blog: 'https://github.blog',
  location: 'San Francisco',
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null, 
  public_repos: 8,
  public_gists: 8,
  followers: 16495,
  following: 9,
  created_at: '2011-01-25T18:44:36Z',
  updated_at: '2024-12-22T12:21:00Z'
} */

/* Task 7:Use the fetch API to get data from a public API and log the response data to the console using async/await. */

const asyncFunc1 = async () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("promise resolved in 3 sec");
    }, 3000);
  });
};

asyncFunc1()
  .then((res) => {
    console.log(res); //Output: promise resolved in 3 sec
  })
  .catch((err) => {
    console.log(err);
  });

/* Activity 5: Concurrent Promises */
/* Task 8:Use Promise.all to wait for multiple promises to resolve and then log all their values. */

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
Promise.all([promise1, promise2]).then((values) => console.log(values)); //Output: [10, 20]

/* Task 9:Use Promise.race to log the value of the first promise that resolves among multiple promises.A */

const fast = new Promise((res) => setTimeout(res, 100, "Fast"));
const slow = new Promise((res) => setTimeout(res, 500, "Slow"));
Promise.race([fast, slow]).then((result) => console.log(result)); //Output: Fast
