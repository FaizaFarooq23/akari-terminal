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

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState('allTime');

  const handleButtonClick = (button: string) => {
    setSelectedButton(button);
  };

  const addTickets = () => {
    console.log('Add Tickets');
  };

  const deleteTickets = () => {
    console.log('Export Tickets');
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

  const rows = [
    {
      id: 1,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
    },
    {
      id: 2,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
    },
    {
      id: 3,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
    },
    {
      id: 4,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
    },
    {
      id: 5,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
    },
    {
      id: 6,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
    },
    {
      id: 7,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
    },
    {
      id: 8,
      columns: [
        { id: 1, value: 'Ado [152760688]', name: 'Mitsubishi Electric HALLE' },
        { id: 2, value: 'Sat 16 Mar 2024 20:00' },
        { id: 3, value: '981' },
        { id: 4, value: '910' },
        { id: 5, value: '0' },
      ],
      details: [
        {
          id: 101,
          columns: [
            { id: 11, value: 'Detail 1.1' },
            { id: 12, value: 'Detail 1.2' },
            { id: 13, value: 'Detail 1.3' },
            { id: 14, value: 'Detail 1.4' },
            { id: 15, value: 'Detail 1.5' },
            { id: 16, value: 'Detail 1.6' },
            { id: 17, value: 'Detail 1.7' },
            { id: 18, value: 'Detail 1.8' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
        {
          id: 102,
          columns: [
            { id: 21, value: 'Detail 1.9' },
            { id: 22, value: 'Detail 1.10' },
            { id: 23, value: 'Detail 1.11' },
            { id: 24, value: 'Detail 1.12' },
            { id: 25, value: 'Detail 1.13' },
            { id: 26, value: 'Detail 1.14' },
            { id: 27, value: 'Detail 1.15' },
            { id: 28, value: 'Detail 1.16' },
          ],
        },
      ],
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
            rows={rows}
            className={undefined}
            addTickets={addTickets}
            deleteTickets={deleteTickets}
          />
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Dashboard;
