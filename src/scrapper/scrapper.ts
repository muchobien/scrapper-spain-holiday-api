export const enum HolidayType {
  Nacional = "Nacional",
  Autonomico = "Autonomico",
  Local = "Local",
}

export type ScrappedData = {
  name: string;
  provinces: {
    name: string;
    towns: {
      name: string;
      holidays: {
        description: string;
        date: Date;
        type: HolidayType;
      }[];
    }[];
  }[];
};
