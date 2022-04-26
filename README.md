# Inertia on Rails Template

This is a minimal installation of [Ruby on Rails](https://github.com/rails/rails), [Vite](https://github.com/vitejs/vite), and [InertiaJS](https://github.com/inertiajs/inertia-rails). (It also uses the [Tailwind Play CDN](https://github.com/tailwindlabs/tailwindcss) for some simple styling).
Feel free to fork this and use it for your next spike, mvp, or entire application. If you'd like to take a look around to see how everything is working, I'd recommend checking out the following files:


- `app/frontend/pages/Dashboard.jsx`: The React component being rendered by the `/` route
- `app/controllers/dashboard_controller.rb`: The controller that handled rendering the root page
- `app/frontend/components/Layout.jsx`: The React component providing the "magic" layout similar to Rails's application layout
- `app/frontend/entrypoints/application.jsx`: The Vite entrypoint that handles initializing InertiaJS



To run locally:

```
bundle install
npm install
foreman -f Procfile.dev
```

