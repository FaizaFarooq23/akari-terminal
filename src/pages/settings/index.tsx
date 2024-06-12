import ContentCard from '../../components/content-card';
import Layout from '../../components/layout';
import SelectBox from '../../components/select-box';
import TextField from '../../components/text-field';
import style from './settings.module.scss';

const Settings = () => {
  const options = [
    { label: '10 sec', value: 'opt1' },
    { label: '20 sec', value: 'opt2' },
    { label: '30 sec', value: 'opt3' },
    { label: '40 sec', value: 'opt4' },
    { label: '50 sec', value: 'opt5' },
    { label: '60 sec', value: 'opt6' },
  ];

  const handleChange = (value: string) => {
    console.log(value);
  };
  return (
    <Layout pageTitle="Settings">
      <div className={style.mainWrapper}>
        <ContentCard
          heading="Manage your settings."
          className={style.cardClass}
        >
          <div className={style.firstRow}>
            <TextField
              label="key"
              type="password"
              placeholder="Enter your key"
              container={style.inputClass}
            />
            <SelectBox
              options={options}
              placeholder="Select an option"
              onChange={handleChange}
              label="Delay"
              className={style.selectBox}
            />
          </div>
          <div>
            <TextField
              label="Webhook"
              type="text"
              placeholder="webhooklink-webhooklink-webhooklink"
              container={style.inputClass2}
            />
          </div>
        </ContentCard>
      </div>
    </Layout>
  );
};

export default Settings;
