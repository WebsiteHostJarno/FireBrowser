import { FaUser } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { BsFillCreditCardFill } from "react-icons/bs";
import * as serviceWorker from "../../serviceWorker";
const Content = () => {
  serviceWorker.register();
  const customer = useSpring({ customers: 2, from: { customers: 0 } });
  const card = useSpring({ cards: 2, from: { cards: 0 } });
  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px] text-bold flex flex-col items-center bg-gradient-to-b shadow-md from-white/40 rounded-[24px] to-transparent md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16"> Users </p>
          </div>
        </div>
        <div className="gap-8 flex items-start mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((val) => Math.floor(val))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16"> Buyed </p>
          </div>
        </div>
      </div>
      <div className="text-13 flex flex-col w-[100%] mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> Montly Updates </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> One Time Fee </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> LifeTime Acces </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> Advenced Api's </p>
        </div>
      </div>
    </section>
  );
};
serviceWorker.unregister();

export default Content;
