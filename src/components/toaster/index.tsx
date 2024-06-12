import style from './toaster.module.scss'; // You'll need to create this file for styles

const Toaster = ({ message, visible, setVisible, type }) => {
  const handleToasterClosed = () => {
    setVisible({
      visible: false,
      message,
    });
  };
  return (
    <div className={`${style.toaster} ${visible ? style.show : ''}`}>
      {message}

      {type === 'error' && (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleToasterClosed}
        >
          <path
            d="M13.5 1.5L1.5 13.5"
            stroke="#DC2626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.5 1.5L13.5 13.5"
            stroke="#DC2626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {type === 'success' && (
        <svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleToasterClosed}
        >
          <path
            d="M12 1L4 10"
            stroke="#35DC26"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 5L4 10"
            stroke="#35DC26"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
};

export default Toaster;
