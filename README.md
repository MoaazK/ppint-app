# PPIntApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Quick Start
### Ubuntu
Run the `node_install.sh` script in terminal. This will install NodeJS.

### Windows
Install NodeJS 18.18.2 from either https://nodejs.org/download/release/v18.18.2/ or https://nodejs.org/en

---
1. Clone the project
```bash
git clone https://github.com/...
```
2. Navigate inside the folder
3. Install Node modules
```bash
npm ci
```
4. Run the App
```bash
npm start
```
5. Navigate to `localhost:4200`

### Important
Install [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension before starting development by either on of the following ways:
- Search in VS Code extensions for the same name
- Run this command: `ext install EditorConfig.EditorConfig`

Also, install following extensions for Angular:
- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## App Structure
- For styling, [Angular Material](https://v15.material.angular.io/) version 15.2.9 has been used
- App has global `styles.scss` file where you can put CSS or SCSS styles that would be applied globally
- Application contains three main modules (folders):
  - `core` contains singleton services
  - `pages` contains application specific modules
  - `shared` contains shared services and reusable components
- `core` contains API and application level services
  - Each service is a singleton
  - HTTP Interceptor prepends the server URL and also it controls the loading spinner
  - Other services include api services to fetch data from the server
- `pages` contains dynamic modules that represent a page.
  - Each folder is a standalone module which has a router module
  - Each module has its own TS, HTML, and SCSS files.
    - TS file represent the logic of the concerned page
    - HTML contains the html of the page
    - SCSS contains styling of the page
    - `module.ts` file has the required modules and components for this certain component
- `shared` contains services, reusable components, and pipes
  - `toolbar` component is placed which is shown on top
  - `Search Bar` component includes a search box combined with file-upload functionality (uploader not implemented yet)
  - `advanced-search` as name justifies, contains fields to cater advanced search feature (not funtional, yet)
  - `material-module` contains all Angular Material related modules
