import trustLogo from "./img/enamad_icon_text_color_blue_1024.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#b2a4ed] p-5 ">
        <span className="text-2xl font-bold block">
          The NextOne the grate source for learning
        </span>
        <span className="text-pretty flex items-center justify-between mt-4">
          Lorem ipsum dolor sit amet consectetur adipi sicing elit. Pariatur et
          possimus ratione. Blanditiis, excepturi. Ve ro, sint expedita.
          <img
            src={trustLogo}
            alt=""
            className="w-24 h-24  bg-white rounded-md"
          />
        </span>
      </div>
    </>
  );
};

export default Footer;
