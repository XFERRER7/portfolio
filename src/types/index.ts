import { Waypoint } from "react-waypoint"

export interface IMainComponentProps {
  language: string
  onAction: (action: string) => void
}

export interface TextsHeaderItem {
  pt: string;
  en: string;
}

export interface TextsHeader {
  navbar: {
    item1: TextsHeaderItem;
    item2: TextsHeaderItem;
    item3: TextsHeaderItem;
  }
}