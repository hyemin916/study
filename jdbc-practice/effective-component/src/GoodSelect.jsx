import React from 'react';

const GoodSelect = ({ label, trigger, value, onChange, options }) => {
  return (
    <Dropdown label={label} value={value} onChange={onChange}>
      <Dropdown.Trigger as={trigger} />
      <Dropdown.Menu>
        {options.map((option) => (
          <Dropdown.Item>{option}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default GoodSelect;

const FrameworkSelect = () => {
  const {
    data: { frameworks },
  } = useFrameworks();
  const [selected, change] = useState();

  return (
    <GoodSelect
      trigger={<InputButton value={selected} />}
      value={selected}
      onChange={change}
      options={frameworks}
    />
  );
};
