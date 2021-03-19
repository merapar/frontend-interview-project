## Introduction
The aim of this task is to test your ability to map a server-side data to a client side UI.

We have provided for you a mocked out version of an endpoints for a posts, comments and users.

An example API call looks as follows:
```javascript
import { getPosts } from './data';

getPosts().then((posts) => {
  console.log(posts);
});
```
__Note!__ _The delay between calling API and
receiving an answer is random, meaning you cannot assume that calls will respond in the same order they were called. This is to simulate
variance in response time of real server requests._

All API mocks can be found in [this file.](./src/data/index.js)

## Your task
- Display the list of posts with their authors and commenter's. You can use following wireframes as reference
  
![Posts wireframe](./wireframe.png)

- Focus on performance and efficiency.
- Your solution should be written using frameworks and tools you are comfortable with and suitable for a production environment.


# Happy coding!
