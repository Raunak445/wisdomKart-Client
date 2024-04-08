
const BinaryImage = ({ binaryImageData }) => {
  // Convert the binary image data to a data URL
  const dataURL = `data:image/jpeg;base64,${binaryImageData}`;

  return (
    <img src={dataURL} alt="Binary Image" style={{width:"100px",height:"200px"}} />
  );
};

export default BinaryImage;
