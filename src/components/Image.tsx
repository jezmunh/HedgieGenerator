
export const Image = ({ src }: { src: string }) => {
  return (
    <img className="img-fluid img-thumbnail"  style={{ maxWidth: '300px' }} src={src} />
  )
}
