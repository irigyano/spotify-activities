import loadingAnimation from "../assets/Loading.gif";
import loadingIcon from "../assets/LoadingIcon.png";
import loadingText from "../assets/LoadingText.png";

const Loading = () => {
  return (
    <section>
      <img src={loadingAnimation} alt="loading" className="m-auto" />
      <div className="flex w-max m-auto">
        <img
          src={loadingIcon}
          alt="loading"
          className="animate-spin m-1 w-max"
        />
        <img src={loadingText} alt="loading" className="w-max" />
      </div>
    </section>
  );
};
export default Loading;
