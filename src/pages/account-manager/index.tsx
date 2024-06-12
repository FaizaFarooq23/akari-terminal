import { SetStateAction, useState } from 'react';

import Button from '../../components/button';
import ContentCard from '../../components/content-card';
import Layout from '../../components/layout';
import TextField from '../../components/text-field';

import baby from '../../../assets/icons/app-icon/image.png';
import visa from '../../../assets/icons/app-icon/visa.svg';
import paypal from '../../../assets/icons/app-icon/paypal.svg';

import style from './account-manager.module.scss';

const AccountManager = () => {
  const [selectedCard, setSelectedCard] = useState(0);

  const cards = [
    { number: '2345678654345786879', type: 'Paypal', icon: paypal },
    { number: '23456786543453434', type: 'Visa', icon: visa },
    { number: '23456786543456789', type: 'Visa', icon: visa },
  ];

  const handleCardSelect = (card: any) => {
    setSelectedCard(card);
  };

  return (
    <Layout pageTitle="Account Manager">
      <div className={style.mainWrapper}>
        <div className={style.firstSection}>
          <ContentCard
            heading="General Settings"
            className={style.settingsCard}
          >
            <div className={style.profileWrapper}>
              <div className={style.detailsDiv}>
                <div className={style.profilePicture}>
                  <span>Profile Details</span>
                  <img
                    src={baby}
                    className={style.profileImg}
                    alt="profile-pic"
                  />
                </div>
                <div className={style.profileBtns}>
                  <div className={style.btnFlex}>
                    <Button text="Upload Profile Photo" />
                    <Button text="Delete" />
                  </div>
                  <p>
                    *Image should be at least 320px big, and less than 500kb.
                    Allowed files .png and .jpg
                  </p>
                </div>
              </div>
              <div className={style.textDiv}>
                <TextField
                  label="Username"
                  type="text"
                  placeholder="Faizi"
                  container={style.inputClass}
                />
                <TextField
                  label="Email"
                  type="text"
                  placeholder="sprintx@akari.com"
                  container={style.inputClass}
                />
              </div>
            </div>
          </ContentCard>
          <ContentCard heading="Change password" className={style.passwordCard}>
            <TextField
              label="Current Password"
              type="password"
              placeholder="*********************************"
              container={style.inputClass}
            />
            <TextField
              label="New Password"
              type="password"
              placeholder="*********************************"
              container={style.inputClass}
            />
            <div className={style.btnDiv}>
              <Button text="Change" />
            </div>
          </ContentCard>
        </div>
        <div className={style.secondSection}>
          <ContentCard heading="Account ID" className={style.idCard}>
            <span style={{ marginBottom: '60px' }}>
              You can generate a unique account ID for your account.
            </span>
            <div className={style.btnDiv}>
              <Button text="Get Account ID" />
            </div>
          </ContentCard>
          <ContentCard heading="Close account" className={style.accountCard}>
            <span>
              You can permanently delete or temporarily freeze your account.
              Remember that the action of closing the account is irreversible.
            </span>
            <div className={style.btnDiv}>
              <Button text="Close Account" />
            </div>
          </ContentCard>
        </div>
        <div className={style.thirdSection}>
          <ContentCard
            heading="Subscription"
            className={style.subscriptionCard}
          >
            <div className={style.subsFlex}>
              <div className={style.date}>
                <p>Valid until</p>
                <div className={style.validity}>
                  <span>04-15-2024</span>
                </div>
              </div>
              <div className={style.paymentCards}>
                <div className={style.addDiv}>
                  <p>Valid until</p>
                  <span className={style.addNew}>+ Add new</span>
                </div>
                <div className={style.cards}>
                  {cards.map((card, index) => (
                    <div
                      key={card.number}
                      className={`${style.cardInfo} ${
                        selectedCard === index ? style.cardSelected : ''
                      }`}
                      onClick={() => handleCardSelect(index)}
                    >
                      <div className={style.innerLeft}>
                        <div className={style.dot} />
                      </div>
                      <div className={style.innerRight}>
                        <div>
                          <span>{`**** ${card.number.slice(-4)}`}</span>
                          <p>
                            {card?.type} • <span>Edit</span>
                          </p>
                        </div>
                        <div>
                          <img src={card?.icon} alt="visa-icon" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ContentCard>
          <div className={style.gapEmpty} />
        </div>
      </div>
    </Layout>
  );
};

export default AccountManager;
