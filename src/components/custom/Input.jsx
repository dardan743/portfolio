import React from "react";

const Input = ({
  value,
  onChange,
  name,
  type,
  required,
  placeholder,
  error,
  helperText,
  pattern,
  readOnly,
}) => {
  return (
    <>
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-3 focus:outline-none rounded-[5px]"
        placeholder={placeholder}
        autoComplete="off"
        pattern={pattern}
        readOnly={readOnly}
        max={type === "number" ? 99999 : "0"}
      />
      {error && (
        <div style={{ color: "red", textAlign: "left" }}>{helperText}</div>
      )}
    </>
  );
};

export default Input;
