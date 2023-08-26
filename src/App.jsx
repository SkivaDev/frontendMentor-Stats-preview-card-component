import { useState } from "react";
import "./App.css";
import headerDesktop from "./assets/images/image-header-desktop.jpg";
import headerMobile from "./assets/images/image-header-mobile.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex h-[400px] w-[1000px] gap-[20px]">
        <div className="md:w-[41.4%] md:p-[35px] md:flex md:flex-col md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Get <mark>insights</mark> that help your business grow.
            </h1>
            <p className="text-sm text-trans_white">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>

          <div className="w-full flex justify-between">
            <div>
              <h2 className="text-2xl font-bold">10k+</h2>
              <p className="text-[11px] font-bold text-trans_white2 tracking-widest">
                COMPANIES
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">314</h2>
              <p className="text-[11px] font-bold text-trans_white2 tracking-widest">
                TEMPLATES
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">12m+</h2>
              <p className="text-[11px] font-bold text-trans_white2 tracking-widest">
                QUERIES
              </p>
            </div>
          </div>
        </div>
        <picture className="md:w-[48.6%] lg:w-auto">
          <source media="(min-width): 877px" srcSet={headerDesktop} />
          <img
            src={headerMobile}
            alt="header-image"
            className="filter-image h-full w-full object-cover"
            width={540}
            height={446}
          />
        </picture>
      </div>
    </main>
  );
}

export default App;
