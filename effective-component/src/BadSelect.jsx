import React from 'react';

const BadSelect = ({ defaultValue }) => {
  const [isOpen, open, close] = useBoolean();
  const [selected, change] = useState(defaultValue);

  return (
    <>
      <InputButton labe="React Framework" value={selected} onClick={open} />
      {isOpen ? (
        <Options onClose={close}>
          {options.map((value) => {
            return (
              <Button
                selected={selected === value}
                onClick={() => change(value)}
              >
                {value}
              </Button>
            );
          })}
        </Options>
      ) : null}
    </>
  );
};

export default BadSelect;
