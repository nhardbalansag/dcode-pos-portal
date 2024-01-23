# Getting Started React

## Current Version

app version     : 1.0.0
react version   : 18.2.0
npm version     : 10.2.3
node js version : 20.10.0


## Running the application

```bash
# install packages
npm install

npm start
```

### Versioning

1. Specify type of commit
- build: build related changes
- chore: a code change that external users wont see
- feat: a new feature
- fix: bug fix
- refactor: bug fix that adds new feature
- docs: documentation related
- style: UI related
- test: related to testings

### Versioning Tools
- [`Git Flow`](https://danielkummer.github.io/git-flow-cheatsheet/)

### Versioning Categories
1. MAJOR - when creating new phases of a project
2. MINOR/RELEASE - functionality in a backward compatible manner such as requests.
3. PATCH/HOTFIX - bug fix related

```bash
# using git flow
git clone https://github.com/nhardbalansag/dcode-pos-portal.git

git flow init

# accept all default configurations by clicking enter then it will redirect you to the develop branch

# Before checking out to a new branch for a release version, execute this first to know the current tag in the master branch
git describe --tags --abbrev=0 master

# for features update
git flow feature start 1.0.0

# for hotfix update
git flow hotfix start 1.0.0

git add . / your specific update

git commit -m "commit message"

git push origin HEAD / current branch name

git flow feature finish or git flow hotfix finish

git push origin develop

# After pushing to the develop branch, go to the repository and create a pull request from the develop branch to master master branch

git checkout master

git pull origin master

# Add release tag version
git tag -a v1.1.0

# bash will show then remove the comment by pressing x on your keyboard

# to add the tag in the master branch
git push origin master --tags

```

### Generating a release

### Debugging

```bash

rm -rf node_modules

rm -rf package-lock.json

npm install

npm start

```

### Update Deployment
