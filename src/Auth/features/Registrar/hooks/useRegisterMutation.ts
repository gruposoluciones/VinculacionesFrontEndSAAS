"use client"
import { useMutation } from "@tanstack/react-query";
import { RegisterActionMock } from "../actions/RegisterAction";

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: RegisterActionMock
    });
};
