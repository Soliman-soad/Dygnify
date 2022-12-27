import './App.css';
import Loan from './components/Loan';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PersonalInformation from './components/loanInformation/PersonalInformation';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Loan/>,
    children: [
      {
        path: '/',
      element:<PersonalInformation/>
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}>
    <Loan/> 
    </RouterProvider>
    </>
  );
}

export default App;
