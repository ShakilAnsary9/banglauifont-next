import FontList from "./FontList";

const FontCard = () => {
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-6">
        {FontList.map((font) => (
          // eslint-disable-next-line react/jsx-key
          <div className="bg-card rounded-lg px-10 py-5">
            <h1 className="text-xl font-medium mb-2">{font.title}</h1>
            <small>Preview</small>
            <div class="preview" id="preview">
              আমার সোনার বাংলা
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FontCard;
