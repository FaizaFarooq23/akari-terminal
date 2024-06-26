/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import { json2csv } from 'json-2-csv';

import { set } from 'react-hook-form';
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

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState('allTime');
  const [tempRows, setTempRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [ticketsSummary, setTicketsSummary] = useState<any>();

  useEffect(() => {
    if (tempRows.length > 0) {
      const totalTickets = tempRows.reduce((acc: any, row: any) => {
        return acc + row.details.length;
      }, 0);
      const totalSales = tempRows.reduce((acc: any, row: any) => {
        return (
          acc +
          row.details.reduce((acc: any, row: any) => {
            if (row.sold === 'Yes') {
              return acc + parseFloat(row.price);
            }
            return acc;
          }, 0)
        );
      }, 0);
      const totalSpent = tempRows.reduce((acc: any, row: any) => {
        return (
          acc +
          row.details.reduce((acc: any, row: any) => {
            return acc + parseFloat(row.faceValue);
          }, 0)
        );
      }, 0);
      const totalProfit = tempRows.reduce((acc: any, row: any) => {
        return (
          acc +
          row.details.reduce((acc: any, row: any) => {
            if (row.sold === 'Yes') {
              return acc + (parseFloat(row.price) - parseFloat(row.faceValue));
            }
            return acc;
          }, 0)
        );
      }, 0);
      setTicketsSummary([
        `$${totalSpent}`,
        totalTickets,
        `$${totalSales}`,
        `$${totalProfit}`,
      ]);
    }
  }, [tempRows]);

  const handleButtonClick = (button: string) => {
    if (button === '24hr') {
      // Set the tempRows to the last 24 hours data
      const filteredData = tempRows!.filter((row: any) => {
        // Create date from this Wed 26 Jun 2024 20:00
        const date = new Date(row.columns.date);
        const currentDate = new Date();
        const diff = currentDate.getTime() - date.getTime();
        const diffInHours = diff / (1000 * 3600);
        return diffInHours < 24;
      });
      setSelectedButton('24hr');
      setTempRows(filteredData);
    } else {
      // Set the tempRows to all time data
      setSelectedButton('allTime');
      window.electron.ipcRenderer.sendMessage('get-tickets-data', ['ping']);
      window.electron.ipcRenderer.once('get-tickets-data', (arg) => {
        const data = JSON.parse(arg);
        setTempRows(data);
      });
    }
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

  const exportSummary = async () => {
    const results = [
      {
        'Total Spent': ticketsSummary[0],
        Tickets: ticketsSummary[1],
        'Total Sales': ticketsSummary[2],
        'Net Profit': ticketsSummary[3],
      },
    ];

    const csv = await json2csv(results);
    console.log(csv);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'summary.csv');
    document.body.appendChild(a);
    a.click();
  };

  return (
    <Layout pageTitle="Dashboard">
      <div className={style.mainWrapper}>
        <div className={style.uppderSection}>
          <ContentCard heading="Hey, Faizan" className={style.summaryCard}>
            <div onClick={exportSummary} className={style.btnsDiv}>
              <div>Export</div>
            </div>
            <span className={style.subHeading}>Here is your summary</span>
            <div className={style.cardsDiv}>
              {ticketsSummary &&
                summaryCard?.map((e, index) => (
                  <SummaryCard
                    summaryData={ticketsSummary}
                    index={index}
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
