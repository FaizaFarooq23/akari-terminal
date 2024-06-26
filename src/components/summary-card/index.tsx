import React from 'react';

import style from './summary-card.module.scss';

const SummaryCard = ({
  summaryData,
  index,
  icon,
  value,
  heading,
  bgColor,
  subHeading,
}: {
  summaryData: any;
  index: number;
  icon: any;
  value: any;
  heading: any;
  bgColor: any;
  subHeading: any;
}) => {
  return (
    <div
      className={style.mainWrapper}
      style={{ backgroundColor: bgColor || '' }}
    >
      {icon && <img src={icon} alt={`${icon}-icon`} />}
      <h2>{summaryData[index]}</h2>
      <span>{heading}</span>
      <p>{subHeading}</p>
    </div>
  );
};

export default SummaryCard;
