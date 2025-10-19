export interface CourseType {
  slug: { _type: string; current: string };
  title: string;
  description: string;
  bannerImage: string;
  duration: string;
  video: string;
  instructor: string;
  rating: number;
  createdAt: string;
  category: string;
  _id?: string;
}

export interface CoursesType {
  courses: CourseType[];
}
