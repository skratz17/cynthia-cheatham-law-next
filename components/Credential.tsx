interface CredentialProps {
  href: string;
  imgSrc: string;
  alt: string;
}

export const Credential = (props: CredentialProps) => {
  const { href, imgSrc, alt } = props;

  return (
    <div className="credential">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={alt} />
      </a>
    </div>
  );
};