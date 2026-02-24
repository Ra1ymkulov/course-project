const Banner = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center">
          <h2 className="text-4xl font-bold max-w-205 mb-20 z-2 leading-14">
            Мы являемся топливом для вашего бизнеса, готовы дать вам образование
            и поднять ваш бренд до небес.
          </h2>
          <div className="relative -translate-x-25">
            <div className="bg-[#96C9E5] w-84 h-84 rounded-[50%]" />
            <img
              src="/images/rocket.svg"
              alt=""
              className="h-110 absolute top-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
