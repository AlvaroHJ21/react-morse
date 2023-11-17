interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function InputArea(props: Props) {
  const { ...restProps } = props;
  return <textarea className="textarea textarea-ghost-primary w-full max-w-full text-xl" rows={5} {...restProps} />;
}
