import './App.css';
import Loan from './components/Loan';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PersonalInformation from './components/loanInformation/PersonalInformation';
import BusinessInformation from './components/loanInformation/BusinessInformation';
import LoanApplication from './components/loanInformation/LoanApplication';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Loan/>,
    children: [
      {
        path: '/',
      element:<PersonalInformation/>
      },
      {
        path: '/business',
      element:<BusinessInformation/>
      },
      {
        path: '/loan-application',
      element:<LoanApplication/>
      },
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
