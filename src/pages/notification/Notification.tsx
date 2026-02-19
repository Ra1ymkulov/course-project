"use client";
import { useGetNotificationsQuery } from "@/src/entities/notification/api";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";
import { useHandleReadMutation } from "@/src/features/notification/api";
import { useRouter } from "next/navigation";

const Notification = () => {
  const { data: user } = useGetUserQuery();
  const { data } = useGetNotificationsQuery(user?.id);

  const notification = data?.sort((a, b) => {
    if (a.read !== b.read) {
      return a.read ? -1 : 1;
    }
    const dataA = new Date(a.createdAt).getTime();
    const dataB = new Date(a.createdAt).getTime();
    return dataB - dataA;
  });
  const { mutateAsync: readFunc } = useHandleReadMutation();
  const router = useRouter();

  const functionm = (id: number) => {
    {
      router.push(`/notification/${id}`);
      readFunc({ id });
    }
  };
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-10">
        <h1 className="text-4xl font-semibold">Уведомления</h1>
        <div className="flex flex-col first::border-t">
          <div className="flex justify-between gap-10 w-full border-y  mb-4 p-2 border-[#23A6F0]">
            <input type="checkbox" className="w-5 h-5" />
            <strong className="mr-auto">Выбрать все</strong>
          </div>
          {notification?.reverse().map((item) => (
            <div
              key={item.id}
              className={`flex justify-between gap-10 w-full border-t py-4 px-2 border-[#23A6F0] last:border-b ${item.read ? "" : "bg-blue-50"}`}
              onClick={() => functionm(item.id)}
            >
              <input type="checkbox" className="w-5 h-5" />
              <strong className="mr-auto">
                {item.message.split("  ").join(" ").split(" \n")[0]}
              </strong>
              <i>{item.createdAt.split("T").join(" ").slice(0, -5)}</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Notification;
