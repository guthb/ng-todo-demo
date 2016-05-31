# ng-todo-demo


### Description
Code along excerise to walk you through building a SPA with angular firebase datastor and firebase authentication

## How to run:
clone down repo
cd into /lib
```
$ cd lib/
$ npm install
$ bower install
```
in root of  application

```
$ http-server -p 8080
```
in lib/

```
$ gulp
```

This will show at in your browser of choice:
'http://localhost:8080'


For developers do all:   open new terminal cd lib and gulp ( to see errors)

### Application will have several branches that demonstrate the progression to a fully functional application:

###Starting effort
1. Basic build with angular using controllers and html partial files with sass and gulp performing the taskrunners and error checking on application files.  Uses a  JSON file to be the backend data store

### Firebase Data Backend
1. Replace JSON file with Firebase database as the backend data store

1. Delete and  Edit  capabliites  on  the list of addresss

### Angular Route and Factory
1. Enhancement of Controllers with factory addition and  routing

1. Enable sorting of the list

#### Styling and Clean up of application
1. Clean up and style with CSS and addtional controllers and  enhancements to factory


###  Firebase authentication
1. Authentication / Authorization enabled
1. Only displays tasks created under the specific login when that user is authenticated

### Screenshots
![Screenshot](/img/login.png)

![Screenshot](/img/user1.png)

![Screenshot](/img/todouser1.png)

![Screenshot](/img/user2.png)

![Screenshot](/img/todouser1.png)

### Contributors:
-[Bradley Guthrie](https://github.com/guthb)

### License
[MIT](LICENSE)