import { useState } from "react";
import "./App.css";
import headerDesktop from './assets/images/image-header-desktop.jpg';
import headerMobile from './assets/images/image-header-mobile.jpg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex">
        <div className="">
          <h1 className="text-3xl font-bold">Get <mark>insights</mark> that help your business grow.</h1>
          <p>
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>

          <div>
            <div>
              <h2>10k+</h2>
              <p>companies</p>
            </div>
            <div>
              <h2>314</h2>
              <p>templates</p>
            </div>
            <div>
              <h2>12m+</h2>
              <p>queries</p>
            </div>
          </div>
        </div>
        <div >

        </div>
      </div>
    </main>
  );
}

export default App;
