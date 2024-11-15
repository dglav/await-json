# What is it

It is a way to visualize the data transmission in real time when the browser makes an HTTP request.

# 1. example.js

# 2. How a server responds to an HTTP request

- First send headers
  - Status Code
  - Headers
- Stream body

Why do you think it is done this way?

A: Because body data can be very large and we don't want to take up the entire thread as it is being downloaded.
A: Maybe the response will never be done because I'm getting data over a continuous stream (i.e. live stream)

# 3. Demonstration

Start server with `node --watch server.js`
Don't need nodemon!

1. Check console logs
2. Check Network tab timeline
3. Check network tab response tab

# Go through server quiz questions

# Introduce matcha.css

https://matcha.mizu.sh/#

# Introduce limitations of node --watch
