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
          <h1 className="text-4xl font-extrabold">{course.theme}</h1>
          <p className="text-2xs font-medium w-130 text-center leading-6">
            {course.description}
          </p>
          <div className="flex flex-col gap-2 mt-10">
            <div className="flex gap-5">
              <img className="h-100 w-100" src={course.image} alt="" />
              <div className="flex flex-col gap-3">
                <h2 className="text-3xl font-bold pb-3">{course.title}</h2>
                {course.section?.map((item: any, idx: number) => (
                  <p className="text-xs leading-6 w-full" key={idx}>
                    <span className="font-bold">
                      {item.paragraph.split(" ").slice(0, 2).join(" ") + " "}
                    </span>
                    {item.paragraph.split(" ").slice(2).join(" ")}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-xs leading-6 -mt-2">{course.bottomText}</p>
          </div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
};

export default Banner;
