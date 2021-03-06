import React, { FC, useState } from "react";

interface InputProps {
  title: string;
  value: any;
  save?: any;
  type?: string;
  disabled?: boolean;
  textarea?: boolean;
}

const Setting: FC<InputProps> = ({
  title,
  value,
  save,
  type = "text",
  disabled,
  textarea,
}) => {
  const [text, setText] = useState(value);
  const [status, setStatus] = useState(false);

  /**
   * When we loose focus on the field, if we changed it, update the variable
   */
  const onBlur = () => {
    // if (value != text) {
    save(text);
    setStatus(false);
    // }
  };

  const onChange = (event) => {
    setText(event.target.value);
    setStatus(true);
  };

  return (
    <div className="field">
      <label className="label">{title}</label>
      {/* <b>{title}: </b> <br /> */}

      <div className={`control ${status ? "is-loading" : ""}`}>
        {textarea ? (
          <textarea
            className="textarea"
            // type={type}
            value={text}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
          />
        ) : (
          <input
            className="input"
            type={type}
            value={text}
            onBlur={onBlur}
            onChange={onChange}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};

export default Setting;
