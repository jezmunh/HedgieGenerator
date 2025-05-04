

interface Props {
    children: string;
    onClick: () => void;
}
export const Button = ({children, onClick}: Props) => {
  return (
    <button type='button' className='btn btn-success m-4' onClick={onClick}>{children}</button>
  )
}
