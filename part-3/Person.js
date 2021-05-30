const Person = (props) => (
  <div className="card">
    <p className="intro">Learn some information about this person</p>
    <p className="name">
      Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}
    </p>
    <p>
      Voting Status:{' '}
      {props.age >= 18 ? <b>Please go vote!</b> : <b>You must be 18</b>}
    </p>
    <p>
      Hobbies:{' '}
      {props.hobbies.map((h) => (
        <li key={h.id}>{h.hobby}</li>
      ))}
    </p>
  </div>
);
