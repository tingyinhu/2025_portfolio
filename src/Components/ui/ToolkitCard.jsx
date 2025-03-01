import PropTypes from "prop-types";

const ToolKitCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        "group flex items-center gap-3 ring-1 ring-orange-outline rounded-2xl p-3 hover:bg-beige transition-colors " +
        classes
      }
    >
      <figure className="bg-beige rounded-lg overflow-hidden w-12 h-12 p-2 transition-colors duration-300 group-hover:bg-white">
        <img src={imgSrc} alt={label}/>
      </figure>

      <div>
        <h3 className="font-title font-medium text-black text-sm-p md:text-md-p">{label}</h3>
        <p className="font-description font-light text-black text-sm-p md:text-md-p">{desc}</p>
      </div>
    </div>
  );
};

ToolKitCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ToolKitCard;
