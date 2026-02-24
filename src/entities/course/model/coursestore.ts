import { create } from "zustand";

interface CourseStore {
  course: Course[] | null;
  setCourse: (course: Course[] | null) => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
  course: null,
  setCourse: (course) => set({ course }),
}));
