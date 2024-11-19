# What is it

It is a way to visualize the data transmission in real time when the browser makes an HTTP request.

# 1. example.js

# 2. Demonstration

Start server with `node --watch server.js`
Don't need nodemon!

1. Check console logs
2. Check Network tab timeline
3. Check network tab response tab

# 3. Go through server quiz questions

# 4. Introduce matcha.css

https://matcha.mizu.sh/#

# 5. node --watch vs. nodemon

## [node --watch](https://nodejs.org/api/cli.html#--watch)

- Native implementation; nothing to install
- Provides basic file watching functionality [link](https://nodejs.org/api/cli.html#--watch-path)
- Limited to JavaScript files

## [nodemon](https://nodemon.io/)

- External package
- Automatic/manual restarting
- [Advanced path watching support](https://github.com/remy/nodemon#triggering-events-when-nodemon-state-changes)
- [Supports other file types not just JavaScript](https://github.com/remy/nodemon#specifying-extension-watch-list)
- [Event hooks](https://github.com/remy/nodemon#triggering-events-when-nodemon-state-changes)
