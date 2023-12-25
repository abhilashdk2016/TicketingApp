const getColor = (status) => {
  let color = '#002244';
  switch(status.toLowerCase()) {
    case 'notstarted': color = '#002244'; break;
    case 'started': color = '#800080'; break;
    case 'done': color = '#008B8B'; break;
    default: color = '#002244'; break;
  }
  return color;
}

const StatusDisplay = ({ status }) => {
  return (
    <span style={{
        display: 'inline-block',
        borderRadius: '20px',
        padding: '2px 5px 2px 5px',
        color: 'white',
        backgroundColor: getColor(status),
        textAlign: 'center',
        fontSize: 'small'
    }}>
        {status}
    </span>
  )
}

export default StatusDisplay