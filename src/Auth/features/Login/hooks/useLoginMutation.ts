import { useMutation } from "@tanstack/react-query";
import { LoginAction } from "../actions/LoginAction";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: LoginAction
    });
};