import { css } from "@emotion/css";

export const ModalComponent = ({
  callbackInput,
  callbackSave,
  callbackClose,
}) => {
  const modal_style = css`
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
  `;

  const form_style = css`
    border-radius: 6px;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
  `;

  const input_style = css`
    border: 1px solid gray;
    border-radius: 4px;
    padding: 6px;
  `;

  const btn__save = css`
  background-color: #00bf70;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 12px;
  text-center;
  color:white;
  font-weight:600;
  margin-left:5px;
  cursor:pointer;
`;
  const btn__close = css`
  background-color: #bf0036;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 12px;
  text-center;
  color:white;
  font-weight:600;
  margin-right:5px;
  cursor:pointer;
`;

  const btn_group_style = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  `;

  return (
    <div className={modal_style}>
      <div className={form_style}>
        <p style={{ margin: "0 0 5px 0 " }}>
          <strong>Give it name!</strong>
        </p>
        <input type="text" className={input_style} onChange={callbackInput} />

        <div className={btn_group_style}>
          <div className={btn__close} onClick={callbackClose}>
            Close
          </div>
          <div className={btn__save} onClick={callbackSave}>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};
