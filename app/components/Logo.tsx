import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Momentum Logo"
      width={40}
      height={40}
      className="rounded-lg"
    />
  );
};

export default Logo; 