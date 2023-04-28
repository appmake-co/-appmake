"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEXT_FILTER_OPERATORS = exports.STRING_FIELDS = exports.SORT_DIRECTIONS = exports.SORTABLE_TYPES = exports.NUMBER_FILTER_OPERATORS = exports.NUMBER_FIELDS = exports.NUMBER_AND_STRING_FIELDS = exports.JSON_FIELDS = exports.FILTER_OPERATORS = exports.FILTERABLE_TYPES = exports.EQUAL_OPERATOR = exports.DATE_RANGE_OPTIONS = exports.DATE_FILTER_OPERATORS = exports.DATE_FIELDS = exports.CAROUSEL_RESPONSIVE = exports.BOOLEAN_OPTIONS = exports.BOOLEAN_FILTER_OPERATORS = exports.BOOLEAN_FIELDS = void 0;
var CAROUSEL_RESPONSIVE = {
  superLargeDesktop: {
    breakpoint: {
      max: 5000,
      min: 1600
    },
    items: 5
  },
  desktop: {
    breakpoint: {
      max: 1600,
      min: 1200
    },
    items: 4
  },
  tablet: {
    breakpoint: {
      max: 1200,
      min: 900
    },
    items: 3
  },
  mobilePro: {
    breakpoint: {
      max: 900,
      min: 540
    },
    items: 2
  },
  mobile: {
    breakpoint: {
      max: 540,
      min: 0
    },
    items: 2
  }
};
exports.CAROUSEL_RESPONSIVE = CAROUSEL_RESPONSIVE;
var BOOLEAN_FIELDS = ["boolean"];
exports.BOOLEAN_FIELDS = BOOLEAN_FIELDS;
var STRING_FIELDS = ["string", "text"];
exports.STRING_FIELDS = STRING_FIELDS;
var NUMBER_FIELDS = ["integer", "float", "bigint"];
exports.NUMBER_FIELDS = NUMBER_FIELDS;
var DATE_FIELDS = ["date", "datetime"];
exports.DATE_FIELDS = DATE_FIELDS;
var JSON_FIELDS = ["json", "jsonb"];
exports.JSON_FIELDS = JSON_FIELDS;
var NUMBER_AND_STRING_FIELDS = [].concat(NUMBER_FIELDS, STRING_FIELDS);
exports.NUMBER_AND_STRING_FIELDS = NUMBER_AND_STRING_FIELDS;
var SORT_DIRECTIONS = [{
  label: "increasing",
  value: "asc"
}, {
  label: "decreasing",
  value: "desc"
}];
exports.SORT_DIRECTIONS = SORT_DIRECTIONS;
var BOOLEAN_OPTIONS = [{
  label: "true",
  value: "true"
}, {
  label: "false",
  value: "false"
}];
exports.BOOLEAN_OPTIONS = BOOLEAN_OPTIONS;
var EQUAL_OPERATOR = [{
  label: "=",
  value: "eq"
}];
exports.EQUAL_OPERATOR = EQUAL_OPERATOR;
var TEXT_FILTER_OPERATORS = [{
  label: "=",
  value: "eq"
}, {
  label: "!=",
  value: "neq"
}, {
  label: "like",
  value: "like"
}];
exports.TEXT_FILTER_OPERATORS = TEXT_FILTER_OPERATORS;
var NUMBER_FILTER_OPERATORS = [{
  label: ">",
  value: "gt"
}, {
  label: ">=",
  value: "gte"
}, {
  label: "=",
  value: "eq"
}, {
  label: "<",
  value: "lt"
}, {
  label: "<=",
  value: "lte"
}, {
  label: "!=",
  value: "neq"
}, {
  label: "in",
  value: "in"
}, {
  label: "not in",
  value: "nin"
}];
exports.NUMBER_FILTER_OPERATORS = NUMBER_FILTER_OPERATORS;
var DATE_FILTER_OPERATORS = [{
  label: ">",
  value: "gt"
}, {
  label: "<",
  value: "lt"
}, {
  label: "after",
  value: "gte"
}, {
  label: "before",
  value: "lte"
}];
exports.DATE_FILTER_OPERATORS = DATE_FILTER_OPERATORS;
var BOOLEAN_FILTER_OPERATORS = [{
  label: "=",
  value: "eq"
}, {
  label: "!=",
  value: "neq"
}];
exports.BOOLEAN_FILTER_OPERATORS = BOOLEAN_FILTER_OPERATORS;
var DATE_RANGE_OPTIONS = [{
  label: "1 day ago",
  value: "1_day_ago"
}, {
  label: "7 days ago",
  value: "7_days_ago"
}, {
  label: "14 days ago",
  value: "14_days_ago"
}, {
  label: "30 days ago",
  value: "30_days_ago"
}, {
  label: "60 days ago",
  value: "60_days_ago"
}, {
  label: "90 days ago",
  value: "90_days_ago"
}];
exports.DATE_RANGE_OPTIONS = DATE_RANGE_OPTIONS;
var FILTER_OPERATORS = {
  integer: NUMBER_FILTER_OPERATORS,
  float: NUMBER_FILTER_OPERATORS,
  string: TEXT_FILTER_OPERATORS,
  text: TEXT_FILTER_OPERATORS,
  date: DATE_FILTER_OPERATORS,
  datetime: DATE_FILTER_OPERATORS,
  boolean: BOOLEAN_FILTER_OPERATORS
};
exports.FILTER_OPERATORS = FILTER_OPERATORS;
var FILTERABLE_TYPES = ["date", "datetime", "float", "number", "price", "rating", "reference", "text", "paragraph"];
exports.FILTERABLE_TYPES = FILTERABLE_TYPES;
var SORTABLE_TYPES = ["text", "id", "number", "float", "price", "rating", "email", "phone"];
exports.SORTABLE_TYPES = SORTABLE_TYPES;