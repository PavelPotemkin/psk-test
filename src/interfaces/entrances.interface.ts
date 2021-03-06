import { IHouseId } from "./houses.interface";
import { IFloor } from "./floor.interface";
import { IBrand } from "./helpers/brand.interface";

export type IEntrances = IEntrance[];

// Брендирование
export type IEntranceId = IBrand<string, "entranceId">;

export interface IEntrance {
  id: IEntranceId;
  house_id: IHouseId;
  title: string;
  floors: IFloor[];
}

export interface IGroupedEntrancesAcc {
  [key: IEntrance["house_id"]]: IEntrance[];
}
