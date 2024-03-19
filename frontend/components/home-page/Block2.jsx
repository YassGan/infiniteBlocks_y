import Image from "next/image";
import Link from "next/link";

const Block2 = () => {
  const data = [
    {
      icon: "/images/icon/icon_78.png",
      title: "DeFi",
      description: "### TEXT TO ADD ###",
      link: "/solutions/defi"
    },
    {
      icon: "/images/icon/nft.png",
      title: "NFT",
      description: "### TEXT TO ADD ###",
      link: "/solutions/nft"
    },
    {
      icon: "/images/icon/icon_81.png",
      title: "Consulting",
      description: "### TEXT TO ADD ###",
      link: "/solutions/consulting"
    },
    {
      icon: "/images/icon/wallet.png",
      title: "Wallet Analysis",
      description: "### TEXT TO ADD ###",
      link: "/solutions/wallet-analysis"
    }
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`col-lg-3 col-md-6 ${index === 1 ? "active" : ""}`}
        >
          <div
            className="card-style-twelve text-center position-relative mt-40"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <Image
                width={180}
                height={180}
                src={item.icon}
                alt="shape"
                className="lazy-img"
              />
            </div>
            <h4 className="text-white mb-10 mt-25">{item.title}</h4>
            <p className="text-white opacity-75 mb-25">{item.description}</p>
            <Link href={item.link} className="arrow tran3s">
            <img
                src="/images/icon/icon_80.svg"
                alt="shape"
                className="lazy-img"
              />
            </Link>
          </div>
          {/* /.card-style-twelve */}
        </div>
      ))}
    </>
  );
};

export default Block2;
