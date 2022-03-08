<div id="top"></div>
<!--
***
*** This readme template was inspired by: https://github.com/othneildrew/Best-README-Template/
***
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- ABOUT THE PROJECT -->
## CRUD API Using Node.js and Express.js

Welcome to the _GitHub repository_ of my fourth back-end project, **Talker Manager**!
Here you can find information about the project's development, such as which technologies were used, how to install and run the project, usage and more.

This back-end application was developed during my time at [Trybe](https://www.betrybe.com/) to practice the lessons learned on Node.js and Express.js.
This API is a talker management system, where you can create, view, delete and update a list of talkers.

The goal of this project was to get familiar with the Node.js built-in modules, such as _http_, _fs_ and _path_, and learn about the different HTTP methods.
A JSON file was used as the database; the CRUD operations were done using the **fs** `writeFile` and `readFile` methods.

<br />

---

### Endpoints

A list of all endpoints and supported methods.

* **/login** - Using the `POST` HTTP method, allows the user to login with the following JSON structure:
```
{
  "email": "email@email.com",
  "password": "123456"
}
```

The generated token should be used in the _authorization_ header;

<br />

* **/talker** - Using the `POST` HTTP method, allows the authenticated user to create a talker with the following JSON structure:
```
{
  "name": "John Doe",
  "age": 25,
  "talk": {
    "watchedAt": "22/10/2019",
    "rate": 5
  }
}
```

The user may also list all talkers using the `GET` HTTP method;

<br />

* **/talker/:id**

  * Using the `GET` HTTP method, allows the authenticated user to view a particular talker by the provided _id_ param.

  * The user may edit a talker using the `PUT` HTTP method and the following JSON structure:
  ```
  {
    "name": "Jane Doe",
    "age": 28,
    "talk": {
      "watchedAt": "21/7/2020",
      "rate": 5
    }
  }
  ```

  * The user may also delete a talker using the `DELETE` HTTP method.

<br />

* **/talker/search?q=** - Using the `POST` HTTP method, allows the user to search for a talker by the provided `q` (name) query;

<br />

### Tables

The file `talker.json` was used as the database.


<br />

---

### Built With

List of major frameworks/libraries used to bootstrap this project:

* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/pedrotrasfereti/talker-manager.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the server
   ```sh
   npm start
   ```
4. Visit `http://localhost:3000/` on your browser


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Pedro Trasfereti - [LinkedIn](https://www.linkedin.com/in/pedro-trasfereti/) - pedrotrasfereti@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I find helpful and would like to give credit to:

* [ESLint](https://eslint.org/) - javascript linter
* [Img Shields](https://shields.io) - readme
* [Nodemon](https://nodemon.io/) - development

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/pedrotrasfereti/talker-manager/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/pedrotrasfereti/talker-manager/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/pedrotrasfereti/talker-manager/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/pedrotrasfereti/talker-manager/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/pedro-trasfereti/
