
import style from './bimage.module.css'

const BinaryImage = ({ binaryImageData}) => {
  // Convert the binary image data to a data URL
  const dataURL = `data:image/jpeg;base64,${binaryImageData}`;

  return (
    <img src={dataURL} alt="Binary Image" className={style.image} />
  );
};

export default BinaryImage;
