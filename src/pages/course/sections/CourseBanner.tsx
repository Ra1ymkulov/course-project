const CourseBanner = () => {
  return (
    <div className="py-12">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-10 items-start">
            <h1 className="text-4xl font-bold w-137">
              Развивайте свои навыки с помощью онлайн-курсов с онлайн-обучением
            </h1>
            <button className="button w-1/2">Присоединиться</button>
          </div>
          <img src="/images/Frame 212.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default CourseBanner;
