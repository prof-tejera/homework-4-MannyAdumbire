const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */

  /** TODO: what happens when I click a number? */
  return (
    <div
      onClick={onClick}
      style={
        {
          flex: 1,
          flexGrow: 0,
          background: 'linear-gradient(90deg, #BDC3C7 0%, #2C3E50 100%)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          padding: '1rem',
          justifyContent: 'flex-end',
          alignItems: 'center',
          fontSize: '1.5em',
          height: '1rem',
          borderRadius: '.5rem .5rem .5rem .5rem '
        }}
      value={value}
    >
      {value}
    </div>
  );
};

export default Number;
