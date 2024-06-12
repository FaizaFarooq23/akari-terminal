/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import Switch from '../../components/switch';
import style from './addTicketModule.module.scss';

export default function AddTicket({ closeModal }: { closeModal: () => void }) {
  const [toggleOn, setToggleOn] = React.useState(false);
  const { control } = useForm();

  const toggleMode = () => {
    setToggleOn(!toggleOn);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className={style.addTickets}>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <div className={style.close} onClick={closeModal}>
            <RxCross2 />
          </div>
          <form>
            <label htmlFor="ticket-details">
              Ticket Detail <input type="text" placeholder="Enter details" />
            </label>

            <label htmlFor="ticket-type">
              Ticket Type <input type="text" placeholder="Enter type" />
            </label>

            <label htmlFor="face-value">
              Face Value <input type="text" placeholder="Enter value" />
            </label>

            <label htmlFor="price">
              Price <input type="text" placeholder="Enter price" />
            </label>

            <label htmlFor="available">
              Available <input type="text" placeholder="Enter available" />
            </label>

            <label htmlFor="sold">
              Sold <input type="text" placeholder="Enter sold" />
            </label>

            <div className={style.switchDiv}>
              <span className={style.label}>Publish</span>
              <Switch
                checked={toggleOn}
                control={control}
                name="switch"
                handleSwitchChange={toggleMode}
              />
            </div>
          </form>
          <button type="button" className={style.button}>
            Add Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
