/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';

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
import { set } from 'react-hook-form';

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState('allTime');
  const [tempRows, setTempRows] = useState();
  const [openModal, setOpenModal] = useState(false);
  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  useEffect(() => {
    window.electron.ipcRenderer.once('get-tickets-data', (arg) => {
      const data = JSON.parse(arg);
      setTempRows(data);
    });

    window.electron.ipcRenderer.sendMessage('get-tickets-data', ['ping']);
  }, []);

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
      id: rowId,
      ticketDetails,
      ticketType,
      price,
      faceValue,
      available,
      sold,
      published: `${toggleOn}`,
    };
    tempRows[rowId].details[ticketId] = ticket;
    setTempRows([...tempRows]);
    window.electron.ipcRenderer.sendMessage('save-tickets-data', tempRows);
    setOpenModal(false);
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
      id: tempRows[id].details[tempRows[id].details.length - 1].id + 1,
      ticketDetails,
      ticketType,
      price,
      faceValue,
      available,
      sold,
      published: `${toggleOn}`,
    };
    tempRows[id].details.push(ticket);
    setTempRows([...tempRows]);
    window.electron.ipcRenderer.sendMessage('save-tickets-data', tempRows);
    setOpenModal(false);
  };

  const deleteTickets = (expandedRows: number, selectedRow: number) => {
    console.log(expandedRows, selectedRow);
    // Remove the selected row from the expanded rows based on id
    const newRows = tempRows[expandedRows].details.filter(
      (row) => row.id !== selectedRow,
    );
    tempRows[expandedRows].details = newRows;
    setTempRows([...tempRows]);
    window.electron.ipcRenderer.sendMessage('save-tickets-data', tempRows);
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
                  key={e.heading}
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
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Dashboard;
