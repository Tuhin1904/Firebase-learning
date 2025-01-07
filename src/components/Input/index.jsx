import "./styles.css";
const Input = ({ label, placeholder, state, setState, type }) => {
  return (
    <div className="input-wrapper">
      <p className="input-label">{label}</p>
      <input
        value={state}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
        type={type}
        className="custom-input"
      />
    </div>
  );
};

export default Input;
