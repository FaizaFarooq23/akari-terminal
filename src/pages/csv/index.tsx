import { json2csv } from 'json-2-csv';
import Button from '../../components/button';
import ContentCard from '../../components/content-card';
import Layout from '../../components/layout';
import style from './csv.module.scss';
import data from '../../data/tickets.json';

const CsvPage = () => {
  const exportTickets = async () => {
    const csv = await json2csv(data);
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
    // conver csv to json and make file in data folder with new data
    const fileInput = document.createElement('input');
    fileInput.setAttribute('type', 'file');
    fileInput.setAttribute('accept', '.csv');
    fileInput.click();
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        const csv = e.target.result;
        console.log(csv);
      };
    };
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
            <Button text={'Import'} handleClick={importTickets} />
            <Button text={'Export'} handleClick={exportTickets} />
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default CsvPage;
