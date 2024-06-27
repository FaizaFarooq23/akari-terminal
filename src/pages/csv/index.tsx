import { json2csv, csv2json } from 'json-2-csv';
import Button from '../../components/button';
import ContentCard from '../../components/content-card';
import Layout from '../../components/layout';
import style from './csv.module.scss';
import data from '../../data/tickets.json';

const CsvPage = () => {
  const exportTickets = async () => {
    // Get the details of each ticket and convert it to csv

    const results = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < data.length; i++) {
      results.push(...data[i].details);
    }
    console.log(results);

    const csv = await json2csv(results);
    console.log(csv);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'tickets.csv');
    document.body.appendChild(a);
    a.click();
  };

  const importTickets = () => {
    // Read the file

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = async (e) => {
      const file = e.target!.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = async () => {
        const csv: string = reader.result as string;

        if (
          csv.startsWith(
            'event_id,id,ticketDetails,ticketType,price,faceValue,available,sold,published',
          )
        ) {
          try {
            const json = await csv2json(csv);
            console.log(json);
            window.electron.ipcRenderer.sendMessage(
              'append-tickets-data',
              json,
            );
            alert('Tickets imported successfully');
          } catch (error) {
            console.log(error);
            alert('Invalid CSV file');
          }
        } else {
          alert('Invalid CSV file');
        }
      };
    };

    input.click();
  };

  return (
    <Layout pageTitle="CSV Import/Export">
      <div className={style.mainWrapper}>
        <ContentCard
          heading="Import and Export CSV"
          className={style.cardClass}
        >
          <div className={style.textDiv}>
            <p>*Image should be less than 150MB.</p>
            <p>Allowed file is only .csv</p>
          </div>
          <div className={style.btnDiv}>
            <Button text="Import" handleClick={importTickets} />
            <Button text="Export" handleClick={exportTickets} />
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default CsvPage;
