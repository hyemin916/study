const FrameworkSelect = ({
  selectedFrameworks,
  onFrameworkChange,
  frameworks,
}) => (
  <Dropdown value={selectedFrameworks} onChange={onFrameworkChange}>
    <Dropdown.Trigger
      as={<Button>{String(selectedFrameworks) ?? '선택하기'}</Button>}
    />
    <Dropdown.Modal
      constrols={
        <Flex>
          <Button type="reset">초기화</Button>
          <Button type="submit">적용하기</Button>
        </Flex>
      }
    >
      {frameworks.map((framework) => (
        <Dropdown.Item>{framework}</Dropdown.Item>
      ))}
    </Dropdown.Modal>
  </Dropdown>
);
