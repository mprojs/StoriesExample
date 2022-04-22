type MergableOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type Merge<Src, Added> = MergableOmit<Src, Extract<keyof Src, keyof Added>> & Added;
export type OmitMerge<Src, Omitted extends keyof Src, Added> = Merge<Omit<Src, Omitted>, Added>;
export type PickMerge<Src, Picked extends keyof Src, Added> = Merge<Pick<Src, Picked>, Added>;
export type PropsOf<T> = { [key in keyof T]: any };
export type PropsFrom<T, U> = { [key in keyof Partial<T>]: U };

/**
 * Second argument is a union type of props which will be picked
 */
export type PickProps<T, K extends keyof T> = { [P in K]: P; };
export type PickAllProps<T> = { [P in keyof T]: P; };
export type TableProps<T> = { [P in keyof Partial<T>]: P };
export type DivTableProps<T, U> = {
  name: T;
  label: string;
  sortable?: boolean;
  sortProp?: U;
  size?: string;
};
/**
 * The same as PickProps but extended with props from third argument
 */
export type PickPropsExtend<T, K extends keyof T, V extends string> = Merge<PickProps<T, K>, { [PU in V]: PU }>;
export type PickAllPropsExtend<T, U extends string> = Merge<{ [P in keyof T]: P; }, { [PU in U]: PU }>;

type NonNullable<T> = Exclude<T, null>;
export type UnMaybe<T> = { [P in keyof T]-?: NonNullable<T[P]> };
