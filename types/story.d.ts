import { ComponentType } from "react";

export type StoryType = "ATOMS" | "MOLECULES" | "ORGANISMS";

export type PayloadTitle = `${StoryType}/${string}`;

export interface IPayload {title:PayloadTitle; component:ReactElement<any, string | JSXElementConstructor<any>>;}