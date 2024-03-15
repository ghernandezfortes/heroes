## Superheroes Management App

This project was generated with Angular CLI version 16.2.0.

### Description

This Single Page Application (SPA) allows users to manage superheroes. It provides functionalities to filter and list superheroes, create/edit superheroes, and delete superheroes. The application also includes features like loader for data loading indication and notifications for user feedback.

### Features

- **Filter and List:**
  - Input field for filtering superheroes by name.
  - Buttons for editing a superhero and creating a new superhero.
  - Superheroes' names are displayed with the first letter capitalized.
  - Button to delete superheroes, with confirmation dialog.

- **Create / Edit:**
  - Form with necessary fields for creating/editing a superhero.
  - Upon creating/editing a superhero, the user is navigated back to the list of superheroes.
  - Superheroes' names are displayed in uppercase.

- **Other Elements:**
  - Service: Supports mock data or API integration with simulated API calls using observables.
  - Loader: Displays a loader while fetching data.
  - Notifications: Shows informative messages for create/edit/delete operations or in case of errors.

### Additional Notes

- **Visual Library:** Angular Material has been utilized for UI components.
- **Tests:** Unit tests have been included.
- **Reactive Programming:** The application utilizes reactive programming where applicable.
- **Component Modularization:** Components are modularized for better maintainability.

### Technology Stack
- **Angular 16**
- **Angular Material**
- **TypeScript**
- **RxJS**

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/ghernandezfortes/heroes

cd superheroes-management-app
npm install
ng serve
ng test

