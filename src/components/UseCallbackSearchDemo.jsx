import { memo } from "react";

const UseCallbackSearchDemo = ({ onChange }) => {
  console.log("UseCallbackSEARCH");

  return (
    <input
      type="text"
      placeholder="Buscar..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default memo(UseCallbackSearchDemo);
