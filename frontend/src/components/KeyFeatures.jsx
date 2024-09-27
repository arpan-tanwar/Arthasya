function KeyFeatures({ icon, title, content }) {
  return (
    <>
      <div className="flex items-start">
        {icon}
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default KeyFeatures;
