## Start writing first React code
Right now you should have the project ready to go. The pages should be build according to the design I created.

Navigate to [React router](https://reactrouter.com/en/main) and:
1.  Under **Get started** section, read *Feature Overview*. I want you to get a filling what *React router* is doing and what are his main features.
2. After that, in the same section also read the *Tutorial*. On that page read everything accept:
- Creating contacts -> Just have a look what style of submitting data is used there, but you don't have to follow that because we will have a different way of submitting that data.
- Updating Contacts with FormData
- Mutation Discussion -> You can have a look how things are done if you are interested, but it's not necessary because we will dive in mutations in the next exercise and explore that there.
- Redirect new records to the edit page
- Deleting records
- Synchronizing URLs to Form State
- Submitting Forms onChange
- Adding Search Spinner
- JSX Router - have a look, but I think it's cleaner to use objects to configure your routes.
3. Now we finally get our hands dirty. Now I want you to look at the design I prepared and make a plan how will you spread the components and routes. But naming for the route paths should be like this:
- **[Register page](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-4/designs/onboarding/register.jpg)** - `/register`
- **[Login page](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-4/designs/onboarding/login.jpg)** - `/login`
- **[Home(main) page](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-4/designs/dashboard/home.jpg)** - `/`
- **[Products page](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-4/designs/products/products-list.jpg)** - `/products`
- **[Single product page](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-4/designs/products/products-item.jpg)** - `/products/ID_OF_THE_PRODUCT`

### Instructions
- When you will write your custom css, don't forget to read how [Scss](https://sass-lang.com/guide/) works, quickly go trough the given basics. If you will have multiple files, use [@use](https://sass-lang.com/documentation/at-rules/use/) instead of `@import` to include those files into the main (app.scss) file.
- In [user dropdown](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-3/designs/dashboard/user-menu-dropdown.jpg) I want you to add a button that will sign him out, later on the next exercises, for now only add an alert that he was signed out. Also, when the dropdown is open, if I click anywhere on the site accept the dropdown itself, I want it to close. If you click on the item inside of the dropdown, make an action of that item and after that close it.
- Implement the style from the [picture](https://github.com/GalMarkelj/react-tutorial/blob/main/exercise-3/designs/dashboard/navigation-hover&action-item.jpg) to navigation items that are active(page to which item redirects is open) or when we hover over it.
