/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import Switch from '../../components/switch';
import style from './addTicketModule.module.scss';

export default function AddTicket({
  ticketId = 0,
  ticket = null,
  id,
  closeModal,
  addTicket,
  editTicket,
}: {
  ticketId: number;
  ticket: any;
  id: number;
  closeModal: () => void;
  addTicket: (
    id: number,
    ticketDetails: string,
    ticketType: string,
    faceValue: string,
    price: string,
    available: string,
    sold: string,
    toggleOn: boolean,
  ) => void;
  editTicket: (
    rowId: number,
    ticketId: number,
    ticketDetails: string,
    ticketType: string,
    faceValue: string,
    price: string,
    available: string,
    sold: string,
    toggleOn: boolean,
  ) => void;
}) {
  console.log(ticket);
  const [toggleOn, setToggleOn] = React.useState(ticket?.published === 'true');
  const { control } = useForm();
  const [ticketDetails, setTicketDetails] = useState(ticket?.ticketDetails);
  const [ticketType, setTicketType] = useState(ticket?.ticketType);
  const [faceValue, setFaceValue] = useState(ticket?.faceValue);
  const [price, setPrice] = useState(ticket?.price);
  const [available, setAvailable] = useState(ticket?.available);
  const [sold, setSold] = useState(ticket?.sold);

  const toggleMode = () => {
    setToggleOn(!toggleOn);
  };

  const handleEditTicketClick = () => {
    editTicket(
      id,
      ticketId,
      ticketDetails,
      ticketType,
      faceValue,
      price,
      available,
      sold,
      toggleOn,
    );
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
              <span> Ticket Detail </span>{' '}
              <input
                onChange={(e) => setTicketDetails(e.target.value)}
                type="text"
                defaultValue={ticket?.ticketDetails}
                placeholder="Enter details"
              />
            </label>

            <label htmlFor="ticket-type">
              <span> Ticket Type</span>{' '}
              <input
                onChange={(e) => setTicketType(e.target.value)}
                type="text"
                defaultValue={ticket?.ticketType}
                placeholder="Enter type"
              />
            </label>

            <label htmlFor="face-value">
              <span> Face Value </span>{' '}
              <input
                onChange={(e) => setFaceValue(e.target.value)}
                type="text"
                defaultValue={ticket?.faceValue}
                placeholder="Enter value"
              />
            </label>

            <label htmlFor="price">
              <span> Price </span>{' '}
              <input
                onChange={(e) => setPrice(e.target.value)}
                defaultValue={ticket?.price}
                type="text"
                placeholder="Enter price"
              />
            </label>

            <label htmlFor="available">
              <span> Available</span>{' '}
              <input
                onChange={(e) => setAvailable(e.target.value)}
                defaultValue={ticket?.available}
                type="text"
                placeholder="Enter available"
              />
            </label>

            <label htmlFor="sold">
              Sold
              <input
                onChange={(e) => setSold(e.target.value)}
                defaultValue={ticket?.sold}
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
            onClick={
              ticket !== null ? handleEditTicketClick : handleAddTicketClick
            }
            type="button"
            className={style.button}
          >
            {ticket !== null ? 'Update Ticket' : 'Add Ticket'}
          </button>
        </div>
      </div>
    </div>
  );
}
