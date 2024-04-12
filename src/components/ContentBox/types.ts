import { ReactNode } from "react";

export interface ContentBoxProps {
    title: string,
    copy?: ReactNode, 
    partner?: boolean, 
    money?:boolean,
    bgImg?: "first" | "second"
}