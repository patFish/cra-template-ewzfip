# ewzfip cra template

This is a copy of the official base template for [Create React App](https://github.com/facebook/create-react-app).

The purpose is to get a consolidated start point for every React project.

**I prefer yarn over npm. Just simple as that.** Therefore npm commands are substituted with yarn.

## What you get so far

- basic code style enforcement with prettier & eslint
- basic template structure including IT-Team Logo :wink:

## Roadmap

| status               | task                 | priority | notes                                                  |
| -------------------- | -------------------- | -------- | ------------------------------------------------------ |
| :white_check_mark:   | linter & prettier    |          |                                                        |
| :white_large_square: | project scaffolding  | 1        | including container vs components vs controller        |
| :white_large_square: | MockApi              |          |                                                        |
| :white_large_square: | Data & UI separation |          |                                                        |
| :white_large_square: | Testing              |          |                                                        |
| :white_large_square: | Git Hooks            |          |                                                        |
| :white_large_square: | Authentication       |          |                                                        |
| :white_large_square: | Authorization        |          |                                                        |
| :white_large_square: | routes               |          |                                                        |
| :white_large_square: | Typescript           |          |                                                        |
| :white_large_square: | Scoped Package       |          | for releasing different templates es. Graphql mock api |

## Scripts

`npx create-react-app <name> --template ewzfip` <br>
`yarn create react-app <name> --template ewzfip`

### test it

`yarn create react-app <name> --template file:...path to root`

## further

For more information, please refer to:

- [Getting Started](https://create-react-app.dev/docs/getting-started) – How to create a new app.
- [User Guide](https://create-react-app.dev) – How to develop apps bootstrapped with Create React App.
- inspired by the [Medium Post](https://medium.com/react-courses/setting-up-professional-react-project-with-must-have-reactjs-libraries-2020-9358edf9acb3) ...
- ... and the official [guide](https://create-react-app.dev/docs/custom-templates/)
