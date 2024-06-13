/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import Switch from '../../components/switch';
import style from './addTicketModule.module.scss';

export default function AddTicket({
  id,
  closeModal,
  addTicket,
}: {
  id: number;
  closeModal: () => void;
  addTicket: () => void;
}) {
  const [toggleOn, setToggleOn] = React.useState(false);
  const { control } = useForm();
  const [ticketDetails, setTicketDetails] = useState('');
  const [ticketType, setTicketType] = useState('');
  const [faceValue, setFaceValue] = useState('');
  const [price, setPrice] = useState('');
  const [available, setAvailable] = useState('');
  const [sold, setSold] = useState('');

  const toggleMode = () => {
    setToggleOn(!toggleOn);
  };

  const handleAddTicketClick = () => {
    addTicket(
      id,
      ticketDetails,
      ticketType,
      faceValue,
      price,
      available,
      sold,
      toggleOn,
    );
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
              {id}
              <span> Ticket Detail </span>{' '}
              <input
                onChange={(e) => setTicketDetails(e.target.value)}
                type="text"
                placeholder="Enter details"
              />
            </label>

            <label htmlFor="ticket-type">
              <span> Ticket Type</span>{' '}
              <input
                onChange={(e) => setTicketType(e.target.value)}
                type="text"
                placeholder="Enter type"
              />
            </label>

            <label htmlFor="face-value">
              <span> Face Value </span>{' '}
              <input
                onChange={(e) => setFaceValue(e.target.value)}
                type="text"
                placeholder="Enter value"
              />
            </label>

            <label htmlFor="price">
              <span> Price </span>{' '}
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Enter price"
              />
            </label>

            <label htmlFor="available">
              <span> Available</span>{' '}
              <input
                onChange={(e) => setAvailable(e.target.value)}
                type="text"
                placeholder="Enter available"
              />
            </label>

            <label htmlFor="sold">
              Sold
              <input
                onChange={(e) => setSold(e.target.value)}
                type="text"
                placeholder="Enter sold"
              />
            </label>

            <div className={style.switchDiv}>
              <span>Publish</span>
              <Switch
                checked={toggleOn}
                control={control}
                name="switch"
                handleSwitchChange={toggleMode}
              />
            </div>
          </form>
          <button
            onClick={handleAddTicketClick}
            type="button"
            className={style.button}
          >
            Add Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
