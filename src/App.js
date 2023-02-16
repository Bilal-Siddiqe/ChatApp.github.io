import './App.css';
import { SideBarNav } from './Components/SideBarNav';


function App() {
  return (
    <>
      <div className="main bg-secondary p-5">
        <div className="row h-100">

          <div className="sidebar bg-white border border-1 border-dark col-4">
              <SideBarNav/>
          </div>

          <div className="chatboxside bg-white border border-1 border-dark col-8">

          </div>
          
        </div>
      </div>
    </>
  );
}

export default App;
