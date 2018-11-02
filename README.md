**Rest API**
----
  Simple user CRUD, authentication, and authorization API with Express JS, Sequelize, and JSON Web Token.

## List of API Routers

Route | HTTP | Description
----- | ---- | -----------
/api/signup | POST | Register a user
/api/signin | POST | Log in a user
/api/users | GET | Get all the users (admin only)
/api/users/:id | GET | Get a single user
/api/users | POST | Create a user (admin only)
/api/users/:id | PUT | Update a user with new data
/api/users/:id | DELETE | Delete a user (admin only)
/api/users/:id | PATCH | Update user's name

## Usage

With only npm: 

```javascript
npm install
npm start
npm run dev
heroku open
```
[link heroku deploy](https://still-springs-56656.herokuapp.com)


**Sign Up**
----
  Add user to the database and returns json response.

* **URL**

  /api/signup

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

  Name<br />
  Username<br />
  Password<br />
  Role

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ success: true, message: User/Admin <username> has been added, data: registered user data }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`


**Sign In**
----
  Check user's authentication and returns token if data is valid.

* **URL**

  /api/signin

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

  Username<br />
  Password

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ token: token got from server }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Wrong username or password" }`
   

**Get All Users Data**
----
  Request all users data, can only be accessed by authenticated user and can only be authorized if user's role is admin. Returns array of users data in json.

* **URL**

  /api/users

* **Method:**
  
  `GET`

* **URL Params**

  None required

* **Data Params**

  None required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ users data }]`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`  

    OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

    OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: 'Admin exclusive feature' }`


**Get Single User Data**
----
  Request single user data, can only be accessed by authenticated user and can only be authorized if user's id is the same with requested data id (user is data's owner). Returns user data in json.

* **URL**

  /api/users/:id

* **Method:**
  
  `GET`

* **URL Params**

  id

* **Data Params**

  None required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ user data }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`  

    OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

    OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: 'You can only access your own data' }`


**Create a User**
----
  Add a user data to the database, can only be accessed by authenticated user and can only be authorized if user's role is admin. Returns json response.

* **URL**

  /api/users

* **Method:**
  
  `POST`

* **URL Params**

  None required

* **Data Params**

  Name<br />
  Username<br />
  Password

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ success: true, message: User <username> has been added, data: registered user data }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`  

    OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

    OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: 'You can only access your own data' }`


**Delete Single User Data**
----
  Remove one user data from the database which id is based on req.params.id. Can only be accessed by authenticated user and can only be authorized if user's role is admin. Returns json response.

* **URL**

  /api/users/:id

* **Method:**
  
  `DELETE`

* **URL Params**

  id

* **Data Params**

  None Required

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ success: true, message: User <username> has been deleted, affectedCount: amount of data affected by the query }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`  

    OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

    OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: 'Admin exclusive feature' }`


**Update Single User Data**
----
  Update one user data from the database which id is based on req.params.id. Can only be accessed by authenticated user and can only be authorized if user's id is the same with requested data id (user is data's owner). Returns json response.

* **URL**

  /api/users/:id

* **Method:**
  
  `PUT`

* **URL Params**

  id

* **Data Params**

  Name<br />
  Username<br />
  Password

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ success: true, message: User <username> has been updated, affectedCount: amount of data affected by the query and updated user data }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`  

    OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

    OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: 'You can only access your own data' }`


**Update Single User Name Property**
----
  Update only name property of one user from the database which id is based on req.params.id. Can only be accessed by authenticated user and can only be authorized if user's id is the same with requested data id (user is data's owner). Returns json response.

* **URL**

  /api/users/:id

* **Method:**
  
  `PATCH`

* **URL Params**

  id

* **Data Params**

  Name

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ success: true, message: User <username> has been updated }`

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ err : error object }`  

    OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message: "Token not found" }`

    OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ message: 'You can only access your own data' }`