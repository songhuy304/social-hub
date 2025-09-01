import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiAuth } from "@/shared/services";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: any) => apiAuth.login(credentials),
    onSuccess: (data) => {
      // Store token if returned
      if (data?.token) {
        localStorage.setItem("token", data.token);
      }
      // Invalidate and refetch user-related queries
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => apiAuth.logout(),
    onSuccess: () => {
      // Clear token
      localStorage.removeItem("token");
      // Clear all queries
      queryClient.clear();
    },
  });
};
