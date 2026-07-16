function Lightbox({ image, onClose }) {

  if (!image) return null;

  return (

    <div className="lightbox" onClick={onClose}>

      <img
        src={image}
        alt="LumiFlex"
        onClick={(e) => e.stopPropagation()}
      />

    </div>

  );

}

export default Lightbox;