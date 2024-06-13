import React, { ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiPlusCircle } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import arrowDown from '../../../assets/icons/app-icon/arrow-head-down.svg';
import style from './table.module.scss';
import Switch from '../switch';
import AddTicket from '../../pages/modal/addTicket';

const ExpandableTable = ({ rows, className, addTicket, deleteTickets }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const { control } = useForm();
  const [toggleOn, setToggleOn] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleRowClick = (index: React.SetStateAction<null>) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const toggleMode = () => {
    setToggleOn(!toggleOn);
  };

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const columnData = [
    {
      render: (data: any) => <div>{data}</div>,
    },
    {
      render: (data: any) => <div>{data}</div>,
    },
    {
      render: (data: any) => (
        <div>
          <span>Available Tickets:</span>
          {data}
        </div>
      ),
    },
    {
      render: (data: any) => (
        <div>
          <span>Tickets sold:</span> {data}
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.07456 7.36034H4.97527V4.62245H4.07456V7.36034ZM4.52492 3.70982C4.65252 3.70982 4.75955 3.66602 4.84602 3.57841C4.93249 3.49079 4.97557 3.3825 4.97527 3.25351C4.97527 3.12422 4.93204 3.01592 4.84557 2.92861C4.7591 2.84131 4.65222 2.7975 4.52492 2.7972C4.39731 2.7972 4.29043 2.841 4.20426 2.92861C4.11809 3.01623 4.07486 3.12453 4.07456 3.25351C4.07456 3.3828 4.11779 3.49125 4.20426 3.57886C4.29073 3.66647 4.39761 3.71013 4.52492 3.70982ZM4.52492 9.64191C3.90192 9.64191 3.31645 9.52205 2.76852 9.28233C2.22058 9.04262 1.74395 8.71757 1.33863 8.30719C0.933308 7.89651 0.612502 7.41358 0.376214 6.85839C0.139926 6.30321 0.021632 5.71 0.0213318 5.07877C0.0213318 4.44753 0.139626 3.85432 0.376214 3.29914C0.612803 2.74396 0.933608 2.26103 1.33863 1.85034C1.74395 1.43966 2.22058 1.11461 2.76852 0.875201C3.31645 0.635788 3.90192 0.515929 4.52492 0.515625C5.14791 0.515625 5.73338 0.635484 6.28131 0.875201C6.82925 1.11492 7.30588 1.43997 7.7112 1.85034C8.11652 2.26103 8.43748 2.74396 8.67407 3.29914C8.91066 3.85432 9.0288 4.44753 9.0285 5.07877C9.0285 5.71 8.91021 6.30321 8.67362 6.85839C8.43703 7.41358 8.11622 7.89651 7.7112 8.30719C7.30588 8.71787 6.82925 9.04307 6.28131 9.28279C5.73338 9.52251 5.14791 9.64221 4.52492 9.64191Z"
              fill="#FFC85E"
            />
          </svg>
        </div>
      ),
    },
    {
      render: (data: any) => (
        <div>
          <span>Pending Fulfillment:</span> {data}
        </div>
      ),
    },
  ];

  const detailColumnData = [
    { render: (data: any) => <div>{data}</div> },
    { render: (data: any) => <div>{data}</div> },
    { render: (data: any) => <div>{data}</div> },
    { render: (data: any) => <div>{data}</div> },
    { render: (data: any) => <div>{data}</div> },
    { render: (data: any) => <div>{data}</div> },
    {
      render: (data: any) => (
        <div>
          <Switch
            checked={toggleOn}
            control={control}
            name="switch"
            handleSwitchChange={toggleMode}
          />
        </div>
      ),
    },
    {
      render: (data: any) => (
        <div>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70297 12.7109L13.4974 6.91652C12.5225 6.5095 11.6371 5.91481 10.8916 5.16629C10.1427 4.42062 9.54778 3.53497 9.1406 2.55976L3.34621 8.35415C2.89416 8.8062 2.66774 9.03261 2.47345 9.28175C2.24398 9.57576 2.04722 9.89389 1.88664 10.2305C1.75111 10.5157 1.65004 10.8197 1.44791 11.426L0.380855 14.6249C0.331743 14.7713 0.324457 14.9286 0.359814 15.079C0.395172 15.2293 0.471772 15.3669 0.581004 15.4761C0.690236 15.5853 0.82777 15.6619 0.978146 15.6973C1.12852 15.7327 1.28578 15.7254 1.43224 15.6763L4.63107 14.6092C5.23824 14.4071 5.54143 14.306 5.82661 14.1705C6.16349 14.0099 6.48157 13.8132 6.77537 13.5837C7.0245 13.3894 7.25092 13.163 7.70297 12.7109ZM15.105 5.30888C15.6827 4.73114 16.0073 3.94755 16.0073 3.1305C16.0073 2.31345 15.6827 1.52986 15.105 0.952119C14.5273 0.374377 13.7437 0.0498047 12.9266 0.0498047C12.1096 0.0498047 11.326 0.374377 10.7482 0.952119L10.0533 1.64704L10.0831 1.734C10.4255 2.71388 10.9859 3.60323 11.7221 4.33505C12.4758 5.0932 13.3963 5.66465 14.4101 6.0038L15.105 5.30888Z"
              fill="#96A5B8"
            />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <>
      {openModal && <AddTicket closeModal={closeModal} addTicket={addTicket} id={expandedRow} />}
      <div className={`${className && className} ${style.tableContainer}`}>
        {rows?.map(
          (row: { id: any; columns: any; details: any }, index: any) => (
            <div key={row?.id}>
              <div
                className={style.tableRow}
                onClick={() => handleRowClick(index)}
              >
                <div className={style.arrowCell}>
                  <img
                    style={{ rotate: expandedRow === index ? '180deg' : '' }}
                    src={arrowDown}
                    alt="arrowDown"
                  />
                </div>
                <div key={row?.columns[0]?.id} className={style.tableCellLeft}>
                  <span> {columnData[0]?.render(row?.columns[0]?.value)}</span>
                  <p>
                    {' '}
                    {row?.columns[0]?.name &&
                      columnData[0]?.render(row?.columns[0]?.name)}
                  </p>
                </div>
                <div className={style.tableCellRight}>
                  {row?.columns?.map(
                    (
                      col: { id: any; value: any; name: any },
                      colIndex: any,
                    ) => (
                      <div key={col?.id} className={style.tableCell}>
                        <span> {columnData[colIndex]?.render(col.value)}</span>
                        <p>
                          {' '}
                          {col?.name && columnData[colIndex]?.render(col?.name)}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div
                className={`${expandedRow === index && style.expandRow} ${
                  style.tableRowDetails
                }`}
              >
                <div className={style.selection}>
                  <div className={style.selectItems}>
                    <input type="checkbox" /> <span>Select All</span>
                  </div>
                  <div className={style.addDelete}>
                    <FiPlusCircle
                      className={style.pluscircle}
                      onClick={handleOpenModal}
                    />
                    <RiDeleteBin6Line
                      className={style.bin}
                      onClick={deleteTickets}
                    />
                  </div>
                </div>

                <div className={style.tableContainerInner}>
                  <table className={style.detailsTable}>
                    <thead>
                      <tr>
                        <th>TICKET DETAILS</th>
                        <th>TICKET TYPE</th>
                        <th>FACE VALUE</th>
                        <th>PRICE</th>
                        <th>AVAILABLE</th>
                        <th>SOLD</th>
                        <th>PUBLISH</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {row?.details?.map(
                        (detailRow: { id: any; columns: any }) => (
                          <tr key={detailRow?.id}>
                            {detailRow.columns.map(
                              (
                                detail: { id: any; value: any },
                                detailColIndex: any,
                              ) => (
                                <td key={detail?.id}>
                                  {detailColumnData[detailColIndex]?.render(
                                    detail.value,
                                  )}
                                </td>
                              ),
                            )}
                          </tr>
                        ),
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </>
  );
};

export default ExpandableTable;
