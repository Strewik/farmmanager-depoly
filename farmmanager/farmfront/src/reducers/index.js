import { combineReducers } from "redux";
import userReducer from "./userReducer";
import farmReducer from "./farmReducer";
import advanceReducer from "./advanceReducer";
import casualReducer from "./casualReducer";
import consumableReducer from "./consumableReducer";
import consumablebincardReducer from "./consumablebincardReducer";
import customerReducer from "./customerReducer";
import employeeReducer from "./employeeReducer";
import expenditureReducer from "./expenditureReducer";
import harvestReducer from "./harvestReducer";
import incomeReducer from "./incomeReducer";
import payrollReducer from "./payrollReducer";
import requisitionReducer from "./requisitionReducer";
import seedlingReducer from "./seedlingReducer";
import supplierReducer from "./supplierReducer";
import toolReducer from "./toolReducer";
import toolbincardReducer from "./toolbincardReducer";

export default combineReducers({
  users: userReducer,
  farms: farmReducer,
  advances: advanceReducer,
  casuals: casualReducer,
  consumables: consumableReducer,
  consumablebincards: consumablebincardReducer,
  customers: customerReducer,
  employees: employeeReducer,
  expenditures: expenditureReducer,
  harvests: harvestReducer,
  incomes: incomeReducer,
  payrolls: payrollReducer,
  requisitions: requisitionReducer,
  seedlings: seedlingReducer,
  suppliers: supplierReducer,
  tools: toolReducer,
  toolbincards: toolbincardReducer
});
