import { Comment } from "@/shared/types/comment";

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface PostCardProps {
  post: Post;
  comments?: Comment[];
  onLike?: (postId: number) => void;
  onCommentLike?: (commentId: string) => void;
  onAddComment?: (content: string) => void;
  onShare?: (postId: number) => void;
  onDonate?: (postId: number) => void;
  className?: string;
}
