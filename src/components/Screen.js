const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: 300,
        height: 70,
        textAlign: "right",
        background: '#2C3E50',
        padding: '20px',
        color: 'white',
        marginBottom: '10px'
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
