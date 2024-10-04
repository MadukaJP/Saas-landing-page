import { Element } from "react-scroll";
import { Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-26 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Photo Generation
            </div>
            <h1
              className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 
                max-md:mb-4 max-md:text-5xl max-md:leading-12"
            >
              Effortlessly Creative
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              AURA AI makes generating stunning photos incredibly easy, with
              powerful features for quick edits and seamless video enhancements.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now</Button>
            </LinkScroll>
          </div>

          <div className="absolute bottom-10 left-[calc(50%)] w-[1000px] pointer-events-none hero-img_res">
            <div  className="relative w-[700px] h-[700px] bg-s4 blur-3xl rounded-full z-1 opacity-40">
            </div>
            <img
                src="/images/zeus.png"
                alt="hero"
                className="absolute top-0  w-[700px] max-lg:h-auto z-1"
              />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
