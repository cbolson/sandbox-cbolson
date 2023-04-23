function Cards({ title, img, imgAlt, urlDemo, urlGithub }) {
  return (
    <div className='card'>
      <div className='card__img'>
        <picture>
          <source srcSet={img} type="image/webp" />
          <source srcSet={imgAlt} type="image/png" />
          <img src={img} />
        </picture>
        </div>
      <h3 className='card__title'>{title}</h3>
      <div className='card__links'>{urlDemo}</div>
    </div>
  );
}
export default Cards;
