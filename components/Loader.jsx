export default function Loader({ size, className, style, ...rest }) {
  return (
    <span
      className={`loader ${className || ""}`}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      {...rest}
    ></span>
  );
}
