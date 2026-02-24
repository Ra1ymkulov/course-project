"use client";
import { USER_API } from "@/src/shared/api";
import { useQuery } from "@tanstack/react-query";

const useGetNotificationsQuery = (userId: string | undefined) => {
  return useQuery<Notification.GetNotificationsRes, Error>({
    queryKey: ["notifications", userId],
    queryFn: async () => {
      const response = await USER_API.get(
        `/notification/${userId}/get-notifications`,
      );

      return response.data;
    },
  });
};

const useGetNotificationById = (notificationId: number) => {
  return useQuery<NotificationById.GetOneNotification, Error>({
    queryKey: ["notification", notificationId],
    queryFn: async () => {
      const response = await USER_API.get(
        `/notification/get-notification/${notificationId}`,
      );

      return response.data;
    },
  });
};

export { useGetNotificationById, useGetNotificationsQuery };
