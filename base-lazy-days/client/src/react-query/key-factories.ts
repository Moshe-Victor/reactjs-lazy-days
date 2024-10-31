import {queryKeys} from "@/react-query/constants";

export const generateUserKey = (userId: number, userToken: string) => {
    return [queryKeys, userId, userToken];
};

export const generateUserAppointmentsKey = (userId: number) => {
    // excluded userToken from dependency array
    // to keep key consistent for userId regardless of token changes
    return [queryKeys.appointments, queryKeys.user, userId];
};