import "./Contacts.css";

function Contacts() {
  return (
    <div className="contacts div" id="contacts">
      <h1 className="contacts heading">Contacts</h1>

      <p className="contacts p">📧 email: clrayel@gmail.com</p>
      <p className="contacts p">
        🔗 LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/carlos-angelo-rayel-413722237/"
          target="_blank"
        >
          Carlos Angelo Rayel
        </a>
      </p>
    </div>
  );
}

export default Contacts;
