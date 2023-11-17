interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function InputText(props: Props) {
  const { ...restProps } = props;
  return (
    <input
      className="input"
      {...restProps}
    ></input>
  );
}
