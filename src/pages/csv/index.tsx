import Button from '../../components/button';
import ContentCard from '../../components/content-card';
import Layout from '../../components/layout';
import style from './csv.module.scss';

const CsvPage = () => {
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
            <Button text={'Import'} />
            <Button text={'Export'} />
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default CsvPage;
