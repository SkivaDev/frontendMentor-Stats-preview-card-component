import "./App.css";
import headerDesktop from "./assets/images/image-header-desktop.jpg";
import headerMobile from "./assets/images/image-header-mobile.jpg";

function App() {

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="flex md:flex-row flex-col-reverse lg:h-[445px] md:h-[400px] w-[1111px] bg-desaturated_blue rounded-lg m-[25px]">
        <div className="md:w-[51.4%] lg:p-[71px] p-[30px] md:p-[60px] lg:pb-[60px] md:pb-[55px] md:flex md:flex-col md:justify-between lg:text-left text-center ">
          <div className="flex flex-col gap-[25px] md:mb-0 mb-[60px]">
            <h1 className="lg:text-4xl md:text-[28px] text-[28px] font-bold leading-title">
              Get <mark>insights</mark> that help your business grow.
            </h1>
            <p className="text-[15px] text-trans_white lg:max-w-[40ch] leading-paragraph">
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
          </div>

          <div className="w-full flex lg:justify-start lg:gap-[60px] md:justify-around  justify-center gap-10 flex-wrap">
            <div className="flex flex-col gap-[5px]">
              <h2 className="text-2xl font-bold">10k+</h2>
              <p className="text-[12px]  font-lexend text-trans_white2 tracking-[1.27px]">
                COMPANIES
              </p>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h2 className="text-2xl font-bold">314</h2>
              <p className="text-[12px] font-lexend  text-trans_white2 tracking-[1.27px]">
                TEMPLATES
              </p>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h2 className="text-2xl font-bold">12M+</h2>
              <p className="text-[12px] font-lexend  text-trans_white2 tracking-[1.27px]">
                QUERIES
              </p>
            </div>
          </div>
        </div>
        <picture className="md:flex-1 lg:w-auto bg-soft_violet rounded-t-lg md:rounded-r-lg">
          <source media="(min-width): 877px" srcSet={headerMobile} />
          <img
            src={headerDesktop}
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
