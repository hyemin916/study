import React from "react";

export const DonationCheckbox = ({
  checked,
  content,
  onChange,
}: {
  onChange: () => void;
  checked: boolean;
  content: string;
}) => (
  <div>
    <label>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <p>{content}</p>
    </label>
  </div>
);
