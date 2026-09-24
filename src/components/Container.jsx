export default function Container({ children, className = "", as: Tag = "div", ...rest }) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-6 sm:px-8 lg:px-12 ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
