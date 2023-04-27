export const CAROUSEL_RESPONSIVE = {
  superLargeDesktop: {
    breakpoint: { max: 5000, min: 1600 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1600, min: 1200 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
  },
  mobilePro: {
    breakpoint: { max: 900, min: 540 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 2,
  },
};

export const BOOLEAN_FIELDS = ["boolean"];
export const STRING_FIELDS = ["string", "text"];
export const NUMBER_FIELDS = ["integer", "float", "bigint"];
export const DATE_FIELDS = ["date", "datetime"];
export const JSON_FIELDS = ["json", "jsonb"];

export const NUMBER_AND_STRING_FIELDS = [...NUMBER_FIELDS, ...STRING_FIELDS];

export const SORT_DIRECTIONS = [
  { label: "increasing", value: "asc" },
  { label: "decreasing", value: "desc" },
];

export const BOOLEAN_OPTIONS = [
  { label: "true", value: "true" },
  { label: "false", value: "false" },
];

export const EQUAL_OPERATOR = [{ label: "=", value: "eq" }];

export const TEXT_FILTER_OPERATORS = [
  { label: "=", value: "eq" },
  { label: "!=", value: "neq" },
  { label: "like", value: "like" },
];

export const NUMBER_FILTER_OPERATORS = [
  { label: ">", value: "gt" },
  { label: ">=", value: "gte" },
  { label: "=", value: "eq" },
  { label: "<", value: "lt" },
  { label: "<=", value: "lte" },
  { label: "!=", value: "neq" },
  { label: "in", value: "in" },
  { label: "not in", value: "nin" },
];

export const DATE_FILTER_OPERATORS = [
  { label: ">", value: "gt" },
  { label: "<", value: "lt" },
  { label: "after", value: "gte" },
  { label: "before", value: "lte" },
];

export const BOOLEAN_FILTER_OPERATORS = [
  { label: "=", value: "eq" },
  { label: "!=", value: "neq" },
];

export const DATE_RANGE_OPTIONS = [
  { label: "1 day ago", value: "1_day_ago" },
  { label: "7 days ago", value: "7_days_ago" },
  { label: "14 days ago", value: "14_days_ago" },
  { label: "30 days ago", value: "30_days_ago" },
  { label: "60 days ago", value: "60_days_ago" },
  { label: "90 days ago", value: "90_days_ago" },
];

export const FILTER_OPERATORS = {
  integer: NUMBER_FILTER_OPERATORS,
  float: NUMBER_FILTER_OPERATORS,
  string: TEXT_FILTER_OPERATORS,
  text: TEXT_FILTER_OPERATORS,
  date: DATE_FILTER_OPERATORS,
  datetime: DATE_FILTER_OPERATORS,
  boolean: BOOLEAN_FILTER_OPERATORS,
};

export const FILTERABLE_TYPES = [
  "date",
  "datetime",
  "float",
  "number",
  "price",
  "rating",
  "reference",
  "text",
  "paragraph",
];

export const SORTABLE_TYPES = [
  "text",
  "id",
  "number",
  "float",
  "price",
  "rating",
  "email",
  "phone",
];
