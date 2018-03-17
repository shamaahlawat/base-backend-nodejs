
## Quick Start
The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/noushad-pp/base-backend-nodejs.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Then simply start your app
node bin/www
```

default port is `1456`
Submit a pull request to the master branch to request merging your change.

Run `/db/__seed.js` for populating dummy users to the db

## Pre requisites
We assume the following to be installed on your machine for this project to run.

|Script|Description|
|------|-----------|
|Node| > V8 since we follow es6 functionalities and conventions |
|Mongodb| [Installation Procedure 1](https://docs.mongodb.com/manual/installation/), (DigitalOcean - Linux)[https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04] |
|Mac OS X | [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)|
| Windows | [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs)|
| Ubuntu | `sudo apt-get install build-essential`|


**Note:** If you are new to Node or Express, We recommend to watch
[Node.js and Express 101](https://www.youtube.com/watch?v=BN0JlMZCtNU)
screencast by Alex Ford that teaches Node and Express from scratch. Alternatively,
here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

## Middlewares
We have not included any middleware in this project. In fact, we recommend you to implement any authentication middlewares like [passport](http://www.passportjs.org/) or [express-jwt](https://github.com/auth0/express-jwt) for handling your user auth, if required.


## Code Conventions
- Use semicolons ;
- 4 spaced tab indentation. Install the [Editorconfig](http://editorconfig.org) plugin for your editor to enforce this automatically.
- Prefer ' over "
- check the sample code for spacing between braces and parenthesis below
- ```
	if(condition) {
		//code
	} else {
		//code
	}```
