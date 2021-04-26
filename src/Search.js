import styled from "styled-components";
import { Input } from "./shared/components/Input";

const SearchInput = styled(Input)`
  width: 70%;
  margin-right: 5px;
`;

export const Search = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <SearchInput
      type="text"
      placeholder="Search"
      value={value}
      onChange={handleChange}
    />
  );
};
