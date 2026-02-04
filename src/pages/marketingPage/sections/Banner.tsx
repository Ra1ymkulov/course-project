import { FC } from "react";

interface IProps {
  course: any;
}
const Banner: FC<IProps> = ({ course }) => {
  let auth = false;
  return !auth ? (
    <section className="p-5 pb-10">
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl font-extrabold">{course.name}</h1>
          <p className="text-xs w-130 text-center leading-6">
            {course.description}
          </p>
          <div className="flex flex-col gap-2 mt-10">
            <div className="flex items-center gap-5">
              <img className="h-98" src={course.banner} alt="" />
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold pb-3">
                  Как ставить о оценивать задачи
                </h2>
                {course.descriptionHeadline.map((item: any, idx: number) => (
                  <p className="text-xs leading-5" key={idx}>
                    {item.subtitle && (
                      <span className="font-bold">{item.subtitle + " "}</span>
                    )}
                    {item.text}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-xs leading-6 -mt-2">
              {
                course.descriptionHeadline[
                  course.descriptionHeadline.length - 1
                ].textBottom
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
};

export default Banner;
