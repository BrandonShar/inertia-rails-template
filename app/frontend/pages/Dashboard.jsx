export default function Dashboard({name}) {
  return (
    <>
      <h1 className="text-3xl font-bold leading-tight text-gray-900 mb-4">Hello {name}!</h1>
      
      <div className="my-3">
        This is a minimal installation of <a className="font-bold hover:underline" href="https://github.com/rails/rails" target="_blank">Ruby on Rails</a>, 
        <a className="font-bold hover:underline" href="https://github.com/vitejs/vite" target="_blank">Vite</a>, 
        and <a className="font-bold hover:underline" href="https://github.com/inertiajs/inertia-rails" target="_blank">InertiaJS</a>. 
        (It also uses the <a className="font-bold hover:underline" href="https://github.com/tailwindlabs/tailwindcss" target="_blank">Tailwind Play CDN</a> for some simple styling).
      </div>
      <div className="my-3">
        Feel free to fork this and use it for your next spike, mvp, or entire application. If you'd like to take a look around to see how everything is working,
        I'd recommend checking out the following files:

        <ul className="m-4 list-disc">
          <li><pre className="inline bg-slate-100">app/frontend/pages/Dashboard.jsx</pre>: The React component containing what you're reading now!</li>
          <li><pre className="inline bg-slate-100">app/controllers/dashboard_controller.rb</pre>: The controller that handled rendering this page</li>
          <li><pre className="inline bg-slate-100">app/frontend/components/Layout.jsx</pre>: The React component providing the "magic" layout similar to Rails's application layout</li>
          <li><pre className="inline bg-slate-100">app/frontend/entrypoints/application.jsx</pre>: The Vite entrypoint that handles initializing InertiaJS</li>
        </ul>
      </div>
    </>
  )
}
