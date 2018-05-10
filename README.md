# for this particular assignment to kick up the servers
## node server
'''
node index.js
OR
npm start
'''

## Redis server
 '''
 redis-server /usr/local/etc/redis.conf
 '''

## front-end
'''
index.html
'''


# Install and config Redis on Max OSX via Homebrew
https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298

## Install Redis via homebrew
  ```
  $ brew install redis
  ```

## Launch Redis on computer starts.
  ```
  $ ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents
  ```

## Start Redis server via “launchctl”.
  ```
  $ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
  ```

## Start Redis server using configuration file.
  ```
  $ redis-server /usr/local/etc/redis.conf
  ```

## Stop Redis on autostart on computer start.
  ```
  $ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
  ```
## Location of Redis configuration file.
  ```
  /usr/local/etc/redis.conf
  ```
## Uninstall Redis and its files.
  ```
  $ brew uninstall redis
  $ rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist
  ```
## Get Redis package information.
  ```
  $ brew info redis
  ```
## Test if Redis server is running.
  ```
  $ redis-cli ping
  ```
  If it replies “PONG”, then it’s good to go!
