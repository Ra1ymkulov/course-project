const Waves = () => {
  return (
    <section className="py-20 pb-40">
      <div className="container">
        <div className="flex items-center justify-between gap-2">
          <img
            src="/images/card (1).svg"
            alt=""
            className="w-60 h-100 rounded-2xl object-cover object-center duration-600 hover:w-80"
          />
          <img
            src="/images/card (2).svg"
            alt=""
            className="w-60 h-100 rounded-2xl object-cover object-center translate-y-30 duration-600 hover:w-80"
          />
          <img
            src="/images/card (3).svg"
            alt=""
            className="w-60 h-100 rounded-2xl object-cover object-center duration-600 hover:w-80"
          />
          <img
            src="/images/card (4).svg"
            alt=""
            className="w-60 h-100 rounded-2xl object-cover object-center translate-y-30 duration-600 hover:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Waves;
