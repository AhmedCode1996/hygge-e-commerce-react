import './heading.css';
const Heading = ({ headingTitle, headingDescription, position }) => {
  return (
    <div style={{ textAlign: position }}>
      <h2 className="heading-title">{headingTitle}</h2>
      <h4 className="heading-description">{headingDescription}</h4>
    </div>
  );
};

export default Heading;
