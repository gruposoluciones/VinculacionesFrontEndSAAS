import { useMutation } from "@tanstack/react-query";
import { LoginActionMock } from "../actions/LoginAction";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: LoginActionMock
    });
};