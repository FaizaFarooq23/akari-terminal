import style from './card.module.scss';

const ContentCard = ({ children, heading, className }) => {
  return (
    <div className={`${className && className} ${style.card}`}>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

export default ContentCard;
