import React from "react";

type Props = {
  warningText: string;
};

const WarningText = ({ warningText }: Props) => {
  return (
    <p className="text-[0.8rem] text-red-500 font-bold mt-1">
      <span>*</span> {warningText}
    </p>
  );
};

export default WarningText;
