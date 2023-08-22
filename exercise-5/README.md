## Requests
Okay, so you have created the pages with the design I gave you, but you're missing dynamic data from some API. In this exercise we will learn how HTTP requests work and use [React Query](https://tanstack.com/query/v3/docs/react/overview) to fetch and cache them and later on, display them.

If you are new to the client-server communication, I would like you to go through this [HTTP Quick Guide](https://www.tutorialspoint.com/http/http_quick_guide.htm)

When we request data from the server, it always returns us a promise and we need to handle that promise. If you're new to promises please read read [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) everything till the example section starts.

To request data from the server, we'll be using a global function [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

Now, you should have a basic knowledge to start making requests. Have a look now at [React Query](https://tanstack.com/query/v3/docs/react/overview) and read:
- Getting started section:
  - the overview,
  - installation,
  - quick start
- Guides & concepts
  - Important Defaults
  - Queries
  - Query keys
  - Placeholder Query Data
  - Query invalidation

and with that knowledge do the following tasks.

I will provide you the API and you will put to practice everything you've read till now.

- Login page:
  - Request details:
    -
      ```
      url: https://dummyjson.com/auth/login,
      method: POST,
      headers: { 'Content-Type': 'application/json' },
      body: data
      ```
    - data is going to be a JSON stringified object containing username and password:
      ```
      {
        username: gal.markelj,
        password: password1234
      }
      ```
  - Testing users:
    ```
    1. username: atuny0, password: 9uQFF1Lh
    2. username: hbingley1, password: CQutx25i8r
    3. username: rshawe2, password: OWsTbMUgFc
    4. username: yraigatt3, password: sRQxjPfdS
    ```
  - Todo:
    - Get all the data from the form (username and password). *Hint: use onSubmit handler on form. As event target you get an actual form, log it to the console and see what data you have available. From that try to get values out. Good luck*
    - Build a mutation hook with help of [React Query useMutation function](https://tanstack.com/query/v3/docs/react/reference/useMutation).
    - On mutations success I want you to console.log the data you get back from the mutation. It should be a object with a lot of users information. Beside that, you need to display on the screen that the login was successful, so, with material ui components display your own successful message. You can see how it should look like [here](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-5/designs/login-success.jpg).
    - This is all good and great, but, where we have requests, there can always be errors, handle that by displaying that error (error from the API) with material ui components. You can see how it should look like [here](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-5/designs/login-error.jpg).

- Register page:
  - Request details:
    -
      ```
      url: https://dummyjson.com/users/add,
      method: POST,
      headers: { 'Content-Type': 'application/json' },
      body: data
      ```
    - data is going to be a JSON stringified object containing email, username and password (you can type whatever you want):
      ```
      {
        email: gal.markelj@gmail.com,
        username: gal.markelj,
        password: password1234
      }
      ```
  - Todo:
    - Get all the data from the form (email, username, password and password repeat). *Hint: use onSubmit handler on form. As event target you get an actual form, log it to the console and see what data you have available. From that try to get values out. Good luck*
    - Password should be at least 8 characters long and should contain at least one number. You will have to build a validation before you request that data. Check the length of passwords, if it contains a number (*hint: use RegEx*) and if the passwords match. If some of those do not meet the criteria, display those errors to the user, like [here](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-5/designs/register-error.jpg). After all that you can delete repeating password from the data and request that JSON stringified data.
    - Build a mutation hook with help of [React Query useMutation function](https://tanstack.com/query/v3/docs/react/reference/useMutation).
    - On mutations success I want you to console.log the data you get back from the mutation.
    - This is all good and great, but, where we have requests, there can always be errors, handle that by displaying that error (error from the API) with material ui components. (*Hint: store all errors into the same state*).

- Products page:
  - Request details:
    -
      ```
      url: https://dummyjson.com/products,
      method: GET,
      ```
  - Todo:
    - Build a hook with help of [React Query](https://tanstack.com/query/v3/docs/react/overview).
    - Previously you build only one card, you will use that template to display all the products. Log to yourself what you get in response and logically change it with the hard coded labels. You can see how it should look like at the end [here](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-5/designs/products-page.jpg).
    - If you click the button on the card, it should navigate you to that products single page. Use products ```id``` parameter as a query parameter when you navigate.

- Products single page:
  - Request details:
    -
    ```
    url: https://dummyjson.com/products/:PRODUCT_ID,
    method: GET
    ```
  - Todo:
    - Build a hook with help of [React Query](https://tanstack.com/query/v3/docs/react/overview).
    - Previously you only created a hard coded page, use the data from the response and logically use it instead of hard coded labels. You can see how it should look like at the end [here](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-5/designs/products-single-page.jpg)
