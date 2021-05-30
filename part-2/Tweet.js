const Tweet = (props) => (
  <div className="tweet">
    <h1 className="name">{props.name}</h1>
    <p className="username">@{props.username}</p>
    <p className="message"> {props.message}</p>
    <p className="date">{props.date}</p>
  </div>
);
