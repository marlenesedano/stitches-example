import * as S from "./styles";

export const Button = ({ children, color, size, outlined }) => {
  return (
    <S.Button color={color} size={size} outlined={outlined}>
      {children}
    </S.Button>
  );
};
