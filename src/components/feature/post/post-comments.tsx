"use client";

import { Avatar, AvatarFallback, Button, Textarea } from "@/components/ui";
import { Comment } from "@/shared/types";
import { ImageIcon, Send, Smile } from "lucide-react";
import { useState } from "react";

interface PostCommentsProps {
  comments: Comment[];
  onAddComment: (content: string) => void;
  onCommentLike: (commentId: string) => void;
}

export function PostComments({
  comments,
  onAddComment,
  onCommentLike,
}: PostCommentsProps) {
  const [newComment, setNewComment] = useState("");

  const handleComment = () => {
    if (newComment.trim()) {
      onAddComment(newComment);
      setNewComment("");
    }
  };

  return (
    <div className="px-4 pb-4 space-y-4">
      <div className="border-t border-gray-100 pt-4">
        <div className="flex space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-gray-300 text-gray-600 text-sm">
              B
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 relative">
            <Textarea
              placeholder="Write your comment"
              value={newComment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNewComment(e.target.value)
              }
              className="min-h-[40px] resize-none pr-24 rounded-full border-gray-300"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                <Smile className="w-4 h-4 text-gray-500" />
              </Button>
              <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
                <ImageIcon className="w-4 h-4 text-gray-500" />
              </Button>
              <Button
                size="sm"
                onClick={handleComment}
                disabled={!newComment.trim()}
                className="p-1 h-8 w-8 bg-blue-600 hover:bg-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-gray-300 text-gray-600 text-sm uppercase">
                {comment.user.username.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="bg-gray-50 rounded-2xl px-4 py-3">
                <div className="flex items-center space-x-2 mb-1">
                  <p className="font-semibold text-sm text-gray-900">
                    {comment.user.username}
                  </p>
                </div>
                <p className="text-sm text-gray-700">{comment.body}</p>
              </div>
              <div className="flex items-center space-x-4 mt-2 ml-2">
                <button
                  onClick={() => onCommentLike(comment.id.toString())}
                  className="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600"
                >
                  <span>Like</span>
                </button>
                <div className="flex items-center space-x-1">
                  <span className="text-lg">👍</span>
                  <span className="text-lg">❤️</span>
                  <span className="text-xs text-gray-500">{comment.likes}</span>
                </div>
                <button className="text-xs text-gray-500 hover:text-blue-600">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
