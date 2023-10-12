const Operation = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  return (
    <div
      onClick={onClick}
      style={{
          background: 'linear-gradient(180deg, #0000FF 0%, #FFFFFF 100%)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          padding: '1rem',
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: '1.5em',
          borderRadius: '.5rem .5rem .5rem .5rem '
      }}
    >
      {value}
    </div>
  );
};

export default Operation;
