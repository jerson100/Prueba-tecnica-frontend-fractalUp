import React from "react";
import {
  IconContainerStyle,
  InputFormStyle,
  InputSearchContainerStyle,
} from "./search.style";

interface SearchProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Search = ({ onChange, value }: SearchProps) => {
  return (
    <InputSearchContainerStyle>
      <InputFormStyle placeholder="Buscar" onChange={onChange} value={value} />
      <IconContainerStyle className="fa-solid fa-magnifying-glass" />
    </InputSearchContainerStyle>
  );
};

export default React.memo(Search);
