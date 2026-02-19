"use client";
import { useGetVideoByIdQuery } from "@/src/entities/course/api/useCourse";
import { KeyboardArrowLeft } from "@mui/icons-material";
import { useParams, useRouter } from "next/navigation";
import Comment from "./comment/Comment";
import { IoSend } from "react-icons/io5";
import { useSendCommentMutate } from "@/src/features/comment/api";
import { useState } from "react";
import { useGetUserQuery } from "@/src/entities/user/api/useApi";

const DetailVideo = () => {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const params = useParams();
  const videoId = Number(params?.videoId);

  const { mutateAsync: sendComment } = useSendCommentMutate();
  const { data: video } = useGetVideoByIdQuery(videoId);
  const { data: user } = useGetUserQuery();

  if (!video) return <h1>error</h1>;

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    const h = String(hrs).padStart(2, "0");
    const m = String(mins).padStart(2, "0");
    const s = String(secs).padStart(2, "0");

    return `Длительность видео: ${h}:${m}:${s}`;
  };

  const handlesubmit = () => {
    console.log(comment);
    if (!comment.trim()) {
      alert("Поле для ввода пуста!");
    } else {
      sendComment({
        newComment: {
          id: Date.now().toString(),
          text: comment,
          videoId: video.id,
          userId: user?.id,
        },
      });
      setComment("");
      window.location.reload();
    }
  };

  return (
    <section className="flex w-[90%] mx-auto">
      <div className="flex flex-col gap-5 flex-3 pt-10 pb-20 pr-10 justify-self-end border-r">
        <div className="flex gap-6 items-center">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center p-1 px-2 bg-white rounded-lg shadow-[0_0_5px_#24340f]"
          >
            <KeyboardArrowLeft style={{ fontSize: "36px" }} />
          </button>
          <h1 className="font-semibold">{video.title}</h1>
        </div>
        <iframe
          className="w-full h-full min-h-110 rounded-xl border-2 border-[#23a6f0]"
          src="https://www.youtube.com/embed/PwhcT1oDMXY?si=rShvWQyHSjFBJ4Z_"
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        ></iframe>
        <div className="flex justify-between gap-10 items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">
              {video.title.split(" ").slice(-1)}
            </h2>
            <div className="flex flex-wrap gap-10 gap-y-1 items-center">
              <p>{video.views} просмотров</p>
              <p>{formatTime(video.duration)}</p>
            </div>
          </div>
          <button className="button mb-auto">Поделится</button>
        </div>
      </div>
      <div className="relative flex flex-col gap-5 flex-1.5 p-5 px-2 h-158 max-w-80 overflow-auto border-b">
        <div className="flex flex-col gap-6 h-full w-full overflow-y-auto no-scrollbar">
          {video.comments?.map((item: any) => (
            <Comment item={item} key={item.id} />
          ))}
        </div>
        <div className="z-10 bg-[#DADADA] mt-auto w-full flex items-center py-2 px-3 rounded-xl">
          <input
            type="text"
            className="p-2 w-full text-sm outline-none"
            placeholder="Комментировать..."
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={({ key }) => key === "Enter" && handlesubmit()}
            value={comment}
          />
          <IoSend className="text-2xl" onClick={() => handlesubmit()} />
        </div>
      </div>
    </section>
  );
};

export default DetailVideo;
