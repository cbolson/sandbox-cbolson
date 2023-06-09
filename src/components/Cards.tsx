interface Props {
  title: string;
  img: string;
  imgAlt: string;
  urlDemo: string;
  urlGithub: string;
}
function Cards({ title, img, imgAlt, urlDemo, urlGithub }: Props) {
  return (
    <div className='card'>
      <div className='card__img'>
        <picture>
          <source srcSet={img} type='image/webp' />
          <source srcSet={imgAlt} type='image/png' />
          <img src={img} />
        </picture>
      </div>
      <h3 className='card__title'>{title}</h3>
      <div className='card__links'>
        <a href={urlDemo} className='btn' target='_blank'>
          Demo
        </a>
        <a href={urlGithub} className='btn' target='_blank'>
          Code
        </a>
      </div>
    </div>
  );
}
export default Cards;
