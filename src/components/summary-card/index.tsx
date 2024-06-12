import React from 'react';

import style from './summary-card.module.scss';

const SummaryCard = ({ icon, value, heading, bgColor, subHeading }) => {
  return (
    <div
      className={style.mainWrapper}
      style={{ backgroundColor: bgColor || '' }}
    >
      {icon && <img src={icon} alt={`${icon}-icon`} />}
      <h2>{value}</h2>
      <span>{heading}</span>
      <p>{subHeading}</p>
    </div>
  );
};

export default SummaryCard;
