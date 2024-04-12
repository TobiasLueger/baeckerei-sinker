import { ReactNode } from "react";

export interface ContentBoxProps {
    title: string,
    copy?: string, 
    partner?: boolean, 
    money?:boolean,
    bgImg?: "first" | "second"
}