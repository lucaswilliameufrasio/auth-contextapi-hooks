# Authentication with Context API and Hooks - ReactJS and React Native

![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)

> Created following the tutorial of [Rocketseat](https://www.youtube.com/channel/UCSfwM5u0Kce6Cce8_S72olg) available on Youtube: [# Autenticação no React Native / ReactJS com Context API & Hooks | Masterclass #12](https://youtu.be/KISMYYXSIX8) by [Diego Fernandes](https://github.com/diego3g)

> Using that beatiful thing called Context API.

> Create a custom hook for authentication.

> context api, react native with context api, reactjs with context api,

- When the page or app is closed and reopened a function on AuthContext will verify if have information stored and will rehydrate the user state then it will Sign In automatically, or Sign Out if no information was found.


| Web  | Mobile |
| ------------- | ------------- |
| ![Showing auth feature on web application](https://raw.githubusercontent.com/lucaswilliameufrasio/auth-contextapi-hooks/assets/reactjs-auth-contextapi.gif) | ![Showing auth feature on mobile application](https://raw.githubusercontent.com/lucaswilliameufrasio/auth-contextapi-hooks/assets/reactnative-auth-contextapi.gif)  |

---

## Content


- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)


---

## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/lucaswilliameufrasio/auth-contextapi-hooks.git`

```shell
git clone https://github.com/lucaswilliameufrasio/auth-contextapi-hooks.git ./FOLDER_NAME
```

### Setup

#### Web
> Navigate to project's folder and install packages

```shell
$ cd FOLDER_NAME/web
$ yarn
```

> Run the application with

```shell
$ yarn start
```

> Open http://localhost:3000 on your favorite browser

---

#### Mobile
> Navigate to project's folder and install packages

```shell
$ cd FOLDER_NAME/mobile
$ yarn
```

> Run the application with

```shell
$ yarn android
```

> Open another terminal window an run the metro bundler with

```shell
$ yarn start
```

---

## FAQ

- **Why to use Context API instead of Redux?**
    - When you don't need a time traveling debugger, as known as Redux DevTools, or custom middlewares.

---

## Support

Reach out to me at one of the following places!

- LinkedIn at <a  href="https://www.linkedin.com/in/lucaswilliameufrasio/"  target="_blank">`linkedin.com/in/lucaswilliameufrasio/`</a>

## License

- **[MIT](http://opensource.org/licenses/mit-license.php)**