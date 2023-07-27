## Project setup
- Currently the best bundler for React in my opinion is [Vite](https://vitejs.dev/). I want you to read a little bit about what Vite is, what are some of his features and then with the documentation set up a boilerplate for a React(**Javascript + SWC**) project.
- After you setup the project with Vite do the following:<br>
      - in the root directory remove .eslintrc.cjs<br>
      - navigate to the src directory and delete everything accept `App.jsx` and `main.jsx`<br>
      - for styles we will use `sass`(scss), this is a css extension. I suggest you look little bit into the documentation. Install `sass` **as a development dependency**. After that in `src` directory create folder `styles` with file `app.scss` in it.<br>
      - edit `main.jsx` and set the correct path to the styles<br>
      - edit `App.jsx` and remove all imports and JSX code

  Also, I highly suggest you use [StandardJs](https://standardjs.com/) to save some time, have clean code and most importantly to write common JavaScript syntax.<br>
  To do that install `standard` **as a development dependency** and that is it. Standard will be giving you a hard time if you will be using incorrect spaces, and more. Use this settings in your `editor config file`:
  ```
  root = true

  [*]
  indent_style = space
  indent_size = 2
  end_of_line = lf
  charset = utf-8
  trim_trailing_whitespace = true
  insert_final_newline = true
  ```
### Tailwind
For styling our pages we will be using [Tailwind](https://tailwindcss.com/). Install [Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite).
### React Material UI
I don't want us to spend too much time building components, install [MUI](https://mui.com/) for already made components.
