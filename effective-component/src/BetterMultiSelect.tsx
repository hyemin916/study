type Props = {
  value: string[];
  onChange: (value: string[]) => void;
  options: { label: string }[];
  valueAs?: (value?: string[]) => string;
};

const MultiSelect = ({
  value,
  onChange,
  options,
  valueAs = (value) => String(value ?? '선택하기'),
}: Props) => (
  <Dropdown value={value} onChange={onChange}>
    <Dropdown.Trigger as={<Button>{valueAs(value)}</Button>} />
    <Dropdown.Modal
      controls={
        <Flex>
          <Button type="reset">초기화</Button>
          <Button type="submit">적용하기</Button>
        </Flex>
      }
    >
      {options.map(({ label }) => (
        <Dropdown.Item>{label}</Dropdown.Item>
      ))}
    </Dropdown.Modal>
  </Dropdown>
);

const FramworkSelect = () => {
  const {
    data: { frameworks },
  } = useFrameworks();
  const [selected, change] = useState();

  return (
    <MultiSelect
      trigger={<Button value={selected.join()} />}
      value={selected}
      onChange={change}
      options={frameworks}
    />
  );
};
