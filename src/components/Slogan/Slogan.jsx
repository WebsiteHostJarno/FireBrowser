import * as serviceWorker from "../../serviceWorker";
const Slogan = () => {
  serviceWorker.register();
  return (
    <section className="text-36 relative my-14 font-extrabold md:my-28 md:grid md:grid-cols-3 md:items-center md:text-48">
      <div className="text-center md:col-span-1 md:col-start-2">
        <p className="">
          FireBrowser <span className="text-purple-300"> Faster, </span>
        </p>
        <p className=""> Better Privacy </p>
        <button className="text-white text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-25 md:px-8 md:py-[8px]">
         <a href="https://techfirex.gumroad.com/l/wzjeL?_gl=1*1nwy8ie*_ga*NDA2MTE4NDU0LjE2NDIxMTU4MDk.*_ga_6LJN6D94N6*MTY0MjIwMDEyNi4yLjEuMTY0MjIwMDEzMS4w">  Buy Now </a>
        </button>
      </div>
    </section>
  );

};
serviceWorker.unregister();

export default Slogan;
