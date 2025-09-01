
export interface Comment {
    id: string;
    author: string;
    content: string;
    timestamp: string;
    isVerified?: boolean;
    likes: number;
    isLiked: boolean;
  }
  