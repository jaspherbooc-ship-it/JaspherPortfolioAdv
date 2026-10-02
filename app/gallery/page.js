const images = [
  { file: "hills.svg", caption: "Quiet hills", alt: "Illustration of overlapping hills beneath a sun" },
  { file: "leaf.svg", caption: "A little greenery", alt: "Illustration of a leafy plant" },
  { file: "desk.svg", caption: "Room to create", alt: "Illustration of a laptop on a desk" },
  { file: "arches.svg", caption: "Simple shapes", alt: "Illustration of an architectural arch" },
  { file: "books.svg", caption: "Always learning", alt: "Illustration of three upright books" },
  { file: "lake.svg", caption: "A quiet moment", alt: "Illustration of mountains reflected in a lake" },
];

export default function Gallery() {
  return (
    <section className="inner-page gallery-page">
      <p className="eyebrow">Visual archive / 03</p>
      <h1>Things that<br /><em>catch my eye.</em></h1>
      <p className="intro">A small collection of colors, places, and everyday scenes that inspire me to create.</p>
      <div className="gallery-grid">
        {images.map((image) => (
          <figure className="gallery-card" key={image.file}>
            <img src={`/gallery/${image.file}`} alt={image.alt} width="600" height="400" loading="lazy" />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
