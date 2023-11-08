import Image from 'next/image';
import loading from "../../../../public/loading.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="container_loading">
      <div className="line_one" />
      <div className="line_two" />
      <div className="line_three" />
      <Image
        className="loading-img"
        src={loading}
        alt="loading"
        loading="lazy"
      />
      <span>Loading ...</span>
    </div>
  );
};

export default Loading;
