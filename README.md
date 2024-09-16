# React + TypeScript + Vite Setup

This project is built with **React**, **TypeScript**, and **Vite** to ensure a fast and efficient development environment. The goal is to maintain clean and maintainable code with a focus on best practices in both **React** and **TypeScript**.

## Minimum Requirements

- Use **Vite** together with **TypeScript** and **React**.
- All code must be **strongly typed**: including variables, function arguments, and return values.
- Components should be **thoughtfully designed** and should not exceed 100-150 lines in length.
  - Each component should have a **specific responsibility**.
- Aim to create **reusable components** (e.g., buttons, form inputs).
- Any functions that are **not specific to React** should be extracted into `utils` files to keep components clean and focused.
  
## Frontend Design

The frontend should have a **consistent visual appearance**. Although it is allowed to use frameworks like **Bootstrap**, it is encouraged to practice building with **pure HTML and CSS**.

- If you use **Bootstrap**, take advantage of the pre-built components, such as forms.
- Focus on **user experience** and aim to reduce **cognitive friction** for users:
  - The system should be **easy to use** and **intuitive**.
  - Ensure that the frontend is **responsive**, adjusting seamlessly to various screen sizes.
  
**Bonus points**: Implement a well-functioning **mobile version** of the application for an enhanced user experience on mobile devices.

---

## ESLint Configuration

To ensure code quality and consistency, it is recommended to configure **ESLint** for linting **TypeScript** and **React** code. Here's how you can expand the ESLint configuration:

1. Install Vite React plugins for **Fast Refresh**:
   - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) using **Babel**.
   - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) using **SWC**.

2. **Configure ESLint** for type-aware linting rules:
   - Modify the top-level `parserOptions` property:

   ```js
   export default tseslint.config({
     languageOptions: {
       // other options...
       parserOptions: {
         project: ['./tsconfig.node.json', './tsconfig.app.json'],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   })
