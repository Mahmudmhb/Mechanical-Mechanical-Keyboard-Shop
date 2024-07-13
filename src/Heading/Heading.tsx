type THeading = {
  Heading: string;
};

const Heading = ({ Heading }: THeading) => {
  return (
    <div>
      <div className="text-[#112] border-b-2 border-[#5c53fe] pb-2 animate__animated animate__fadeInDown  uppercase  mb-10 font-bold text-2xl">
        <h1 className="">{Heading}</h1>
      </div>
    </div>
  );
};

export default Heading;
