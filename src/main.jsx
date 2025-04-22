import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { 
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
  isRouteErrorResponse,
  useRouteError //this is a hook
} from 'react-router'

import './index.css'
import App from './App.jsx'
import Hello from "./hello";
import Clock from "./Clock";
import FavoriteColor from "./FavoriteColor";
import ColorPicker from "./ColorPicker";
import NameGen from "./Namegen"
import ApiFetcher from './ApiFetcher';

function Root() {
  return (
    <StrictMode>
      <div>
        <h1>this is a root</h1>
        <nav className='main-nav'>
          <Link to={"app"}>App</Link>
          <Link to={"hello"}>Hello</Link>
          <Link to={"favoriteColor"}>Favorite Color</Link>
          <Link to={"clock"}>Clock</Link>
          {/* <Link to={"colorPicker"}>Color Picker</Link> */}
          <Link to={"nameGen"}>Name Gen</Link>
          <Link to={"apiFetcher"}>Api Fetcher</Link>
        </nav>
        <hr />
        <div>
          <Outlet />
        </div>
      </div>
    </StrictMode>
  )
}

function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
    <div>
      <h1>{error.status} {error.statusText}</h1>
      <p>{error.data}</p>
    </div>
    )
  }
  else if (error instanceof Error) {
    return (
      <div>
        <p>you really donked up</p>
      </div>
    )
  }
  else {
    return <h1>Unknown Error</h1>
  }
}

const router = createBrowserRouter([
  {
    path: "/web2025/",
    Component: Root,
    ErrorBoundary: ErrorBoundary,
    children: [
      { index: true, path: "app", Component: App },
      { path: "hello", Component: Hello },
      { path: "clock", Component: Clock },
      { path: "favoriteColor", Component: FavoriteColor },
      { path: "colorPicker", Component: ColorPicker },
      { path: "nameGen", Component: NameGen },
      { path: "apiFetcher", Component: ApiFetcher }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
