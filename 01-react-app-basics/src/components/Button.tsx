interface Props {
  text: string;
  color?:'primary'|'secondary'|'danger';
  onButtonClick: () => void;
}

const Button = ({ onButtonClick, text,color='primary'}: Props) => {
  return (
    <button
      className={'btn btn-'+color}
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};

export default Button;
