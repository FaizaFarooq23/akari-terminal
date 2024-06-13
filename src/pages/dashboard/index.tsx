/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';

import Layout from '../../components/layout';
import ContentCard from '../../components/content-card';
import ExpandableTable from '../../components/expandable-table';
import SummaryCard from '../../components/summary-card';

import moneyBag from '../../../assets/icons/app-icon/money-bag.svg';
import greenBag from '../../../assets/icons/app-icon/green-bag.svg';
import yellowBag from '../../../assets/icons/app-icon/yellow-bag.svg';
import blueBag from '../../../assets/icons/app-icon/blue-bag.svg';

import style from './dashboard.module.scss';
import ApexChart from '../../components/apex-chart';
import { rows } from '../../data/TicketsData';

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState('allTime');
  const [tempRows, setTempRows] = useState(rows);
  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const editTickets = (
    rowId: number,
    ticketId: number,
    ticketDetails: string,
    ticketType: string,
    faceValue: string,
    price: string,
    available: string,
    sold: string,
    toggleOn: boolean,
  ) => {
    const ticket = {
      id: tempRows[rowId].details.length + 1,
      columns: [
        { id: 1, value: ticketDetails },
        { id: 2, value: ticketType },
        { id: 3, value: faceValue },
        { id: 4, value: price },
        { id: 5, value: available },
        { id: 6, value: sold },
        { id: 7, value: `${toggleOn}` },
      ],
    };
    tempRows[rowId].details[ticketId] = ticket;
    setTempRows([...tempRows]);
  };

  const addTickets = (
    id: number,
    ticketDetails: string,
    ticketType: string,
    faceValue: string,
    price: string,
    available: string,
    sold: string,
    toggleOn: boolean,
  ) => {
    const ticket = {
      id: tempRows[id].details.length + 1,
      columns: [
        { id: 1, value: ticketDetails },
        { id: 2, value: ticketType },
        { id: 3, value: faceValue },
        { id: 4, value: price },
        { id: 5, value: available },
        { id: 6, value: sold },
        { id: 7, value: `${toggleOn}` },
      ],
    };
    tempRows[id].details.push(ticket);
    setTempRows([...tempRows]);
  };

  const deleteTickets = (expandedRows: number, selectedRow: number) => {
    console.log(expandedRows, selectedRow);
    // Remove the selected row from the expanded rows based on id
    const newRows = tempRows[expandedRows].details.filter(
      (row) => row.id !== selectedRow,
    );
    tempRows[expandedRows].details = newRows;
    setTempRows([...tempRows]);
  };

  const summaryCard = [
    {
      icon: moneyBag,
      value: '$1k',
      heading: 'Total Spent',
      subHeading: '+1,2% from last month',
      bgColor: '#99FF9D',
    },
    {
      icon: greenBag,
      value: '300',
      heading: 'Tickets',
      subHeading: '+1,2% from last month',
      bgColor: '#DEFFE9',
    },
    {
      icon: yellowBag,
      value: '400',
      heading: 'Total Sales',
      subHeading: '+1,2% from last month',
      bgColor: '#FFF4DE',
    },
    {
      icon: blueBag,
      value: '$1898',
      heading: 'Net Profit',
      subHeading: '+1,2% from last month',
      bgColor: '#A0DDFF',
    },
  ];

  return (
    <Layout pageTitle="Dashboard">
      <div className={style.mainWrapper}>
        <div className={style.uppderSection}>
          <ContentCard heading="Hey, Faizan" className={style.summaryCard}>
            <div className={style.btnsDiv}>
              <div>Export</div>
            </div>
            <span className={style.subHeading}>Here is your summary</span>
            <div className={style.cardsDiv}>
              {summaryCard?.map((e) => (
                <SummaryCard
                  icon={e?.icon}
                  heading={e?.heading}
                  subHeading={e?.subHeading}
                  value={e?.value}
                  bgColor={e?.bgColor}
                />
              ))}
            </div>
          </ContentCard>
          <ContentCard heading="Analytics" className={style.analyticsCard}>
            <ApexChart />
          </ContentCard>
        </div>
        <ContentCard heading="Inventory" className={style.tableCardClass}>
          <div className={style.btnsDiv}>
            <div
              className={selectedButton === '24hr' ? style.selected : ''}
              onClick={() => handleButtonClick('24hr')}
            >
              24 hr
            </div>
            <div
              className={selectedButton === 'allTime' ? style.selected : ''}
              onClick={() => handleButtonClick('allTime')}
            >
              All Time
            </div>
          </div>
          <ExpandableTable
            rows={tempRows}
            className={undefined}
            addTicket={addTickets}
            deleteTickets={deleteTickets}
            editTickets={editTickets}
          />
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Dashboard;
