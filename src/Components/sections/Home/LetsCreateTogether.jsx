import { useTranslation } from "react-i18next";

import Button from "../../ui/Button";
import Lottie from "lottie-react";
import LetsCreateTogetherAnimation from "../../../Assets/images/Home/LetsCreateTogether.json";
import AnimatedText from "../../ui/AnimatedText";

const LetsCreateTogether = () => {
    const { t } = useTranslation();
  return (
    <section className="py-20">
      <div className="container flex flex-col md:flex-row items-start justify-between gap-10 md:gap-30">
        {/* Left */}
        <div className="md:w-1/2 w-full space-y-6">
          <AnimatedText
            text={t("home.letsCreateToughter")}
            className="font-title font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2"
            tag="h2"
          />

          <p className="font-description font-light text-black text-sm-p md:text-md-p lg:text-lg-p">
            {t("home.letsCreateToughterDes")}
          </p>
          <Lottie
            animationData={LetsCreateTogetherAnimation}
            className="mx-auto w-100 py-10"
          />
        </div>

        {/* Form */}
        <form
          action="https://getform.io/f/aejrrqeb"
          method="POST"
          className="md:w-1/2 w-full space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block font-description font-light text-sm-p md:text-md-p mb-2"
              >
                {t("home.formName")}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="Ellie Hu"
                className="border-1 border-orange-outline rounded-2xl px-4 h-12 w-full focus:outline-none focus:ring-1 focus:ring-orange placeholder-gray-300"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block font-description font-light text-sm-p md:text-md-p mb-2"
              >
                {t("home.formEmail")}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="yin5683@gmail.com"
                className="border-1 border-orange-outline rounded-2xl px-4 h-12 w-full focus:outline-none focus:ring-1 focus:ring-orange placeholder-gray-300"
              />
            </div>

            {/* Message Field - Full Width */}
            <div className="col-span-1 md:col-span-2">
              <label
                htmlFor="message"
                className="block font-description font-light text-sm-p md:text-md-p mb-2"
              >
                {t("home.formMessage")}
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Got a question or a project in mind? Let’s chat!"
                required
                className="border-1 border-orange-outline rounded-2xl focus:outline-none focus:ring-1 focus:ring-orange px-4 py-4 h-50 w-full transition-opacity placeholder-gray-300"
              ></textarea>
            </div>
          </div>

          {/* Button */}
          <Button size="primary" color="orange" type="submit">
            {t("home.formContactMe")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LetsCreateTogether;
