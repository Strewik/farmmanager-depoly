import "react-native-gesture-handler";
import React, { Component } from "react";
import ReactDom from "react-dom";
import { AppRegistry, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { Provider } from "react-redux";
import store from "./src/store";

import HomeScreen from "./src/components/HomeScreen";
import FarmForm from "./src/components/FarmForm";
import FarmLand from "./src/components/FarmLand";
import FarmDetails from "./src/components/FarmDetails";
import HomePage from "./src/components/HomePage";
import SignUp from "./src/components/SignUp";
import UserLand from "./src/components/UserLand";
import UserDetails from "./src/components/UserDetails";
import Login from "./src/components/Login";
import PasswordRecoveryOne from "./src/components/PasswordRecoveryOne";
import PasswordRecoveryTwo from "./src/components/PasswordRecoveryTwo";
import LandReportFinace from "./src/components/LandReportFinance";
import IncomeForm from "./src/components/IncomeForm";
import IncomeLand from "./src/components/IncomeLand";
import IncomeDetails from "./src/components/IncomeDetails";
import ExpenditureForm from "./src/components/ExpenditureForm";
import ExpenditureLand from "./src/components/ExpenditureLand";
import ExpenditureDetails from "./src/components/ExpenditureDetails";
import PayrollForm from "./src/components/PayrollForm";
import PayrollLand from "./src/components/PayrollLand";
import PayrollDetails from "./src/components/PayrollDetails";
import Advance from "./src/components/Advance";
import AdvanceLand from "./src/components/AdvanceLand";
import AdvanceDetails from "./src/components/AdvanceDetails";
import RequisitionForm from "./src/components/RequisitionForm";
import RequisitionLand from "./src/components/RequisitionLand";
import RequisitionDetails from "./src/components/RequisitionDetails";
import CustomerForm from "./src/components/CustomerForm";
import CustomerLand from "./src/components/CustomerLand";
import CustomerDetails from "./src/components/CustomerDetails";
import SupplierForm from "./src/components/SupplierForm";
import SupplierLand from "./src/components/SupplierLand";
import SupplierDetails from "./src/components/SupplierDetails";
import LandReportInventory from "./src/components/LandReportInventory";
import ConsumableForm from "./src/components/ConsumableForm";
import ConsumableLand from "./src/components/ConsumableLand";
import ConsumableDetails from "./src/components/ConsumableDetails";
import ConsumableBinCardForm from "./src/components/ConsumableBinCardForm";
import ConsumableBinCardLand from "./src/components/ConsumableBinCardLand";
import ConsumableBinCardDetails from "./src/components/ConsumableBinCardDetails";
import ToolForm from "./src/components/ToolForm";
import ToolLand from "./src/components/ToolLand";
import ToolDetails from "./src/components/ToolDetails";
import ToolBinCardForm from "./src/components/ToolBinCardForm";
import ToolBinCardLand from "./src/components/ToolBinCardLand";
import ToolBinCardDetails from "./src/components/ToolBinCardDetails";
import HarvestForm from "./src/components/HarvestForm";
import HarvestLand from "./src/components/HarvestLand";
import HarvestDetails from "./src/components/HarvestDetails";
import SeedlingsBatchForm from "./src/components/SeedlingsBatchForm";
import SeedlingsLand from "./src/components/SeedlingsLand";
import SeedlingsDetails from "./src/components/SeedlingsDetails";
import LandReportWorkers from "./src/components/LandReportWorkers";
import CasualForm from "./src/components/CasualForm";
import CasualLand from "./src/components/CasualLand";
import CasualDetails from "./src/components/CasualDetails";
import EmployeeForm from "./src/components/EmployeeForm";
import EmployeeLand from "./src/components/EmployeeLand";
import EmployeeDetails from "./src/components/EmployeeDetails";
import BottomNav from "./src/components/BottomNav";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Landing Page" component={HomePage} />
                    <Stack.Screen name="Farm Form" component={FarmForm} />
                    <Stack.Screen name="Farm Summaries" component={FarmLand} />
                    <Stack.Screen name="Farm Details" component={FarmDetails} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    {/* <Stack.Screen name="Landing Page" component={HomePage} /> */}
                    <Stack.Screen name="Finance" component={LandReportFinace} />
                    <Stack.Screen name="Sales Form" component={IncomeForm} />
                    <Stack.Screen
                        name="Sales Summaries"
                        component={IncomeLand}
                    />
                    <Stack.Screen
                        name="Sales Details"
                        component={IncomeDetails}
                    />
                    <Stack.Screen
                        name="Expenditure Form"
                        component={ExpenditureForm}
                    />
                    <Stack.Screen
                        name="Expenditure Summaries"
                        component={ExpenditureLand}
                    />
                    <Stack.Screen
                        name="Expenditure Details"
                        component={ExpenditureDetails}
                    />
                    <Stack.Screen name="Payroll Form" component={PayrollForm} />
                    <Stack.Screen
                        name="Payroll Summaries"
                        component={PayrollLand}
                    />
                    <Stack.Screen
                        name="Payroll Details"
                        component={PayrollDetails}
                    />
                    <Stack.Screen name="Advance Form" component={Advance} />
                    <Stack.Screen
                        name="Advance Summaries"
                        component={AdvanceLand}
                    />
                    <Stack.Screen
                        name="Advance Details"
                        component={AdvanceDetails}
                    />
                    <Stack.Screen
                        name="Requisition Form"
                        component={RequisitionForm}
                    />
                    <Stack.Screen
                        name="Requisition Summaries"
                        component={RequisitionLand}
                    />
                    <Stack.Screen
                        name="Requisition Details"
                        component={RequisitionDetails}
                    />
                    <Stack.Screen
                        name="Customer Form"
                        component={CustomerForm}
                    />
                    <Stack.Screen
                        name="Customer Summaries"
                        component={CustomerLand}
                    />
                    <Stack.Screen
                        name="Customer Details"
                        component={CustomerDetails}
                    />
                    <Stack.Screen
                        name="Supplier Form"
                        component={SupplierForm}
                    />
                    <Stack.Screen
                        name="Supplier Summaries"
                        component={SupplierLand}
                    />
                    <Stack.Screen
                        name="Supplier Details"
                        component={SupplierDetails}
                    />
                    <Stack.Screen
                        name="Stores"
                        component={LandReportInventory}
                    />
                    <Stack.Screen
                        name="Consumable Form"
                        component={ConsumableForm}
                    />
                    <Stack.Screen
                        name="Consumable Summaries"
                        component={ConsumableLand}
                    />
                    <Stack.Screen
                        name="Consumable Details"
                        component={ConsumableDetails}
                    />
                    <Stack.Screen
                        name="Consumablebincard Form"
                        component={ConsumableBinCardForm}
                    />
                    <Stack.Screen
                        name="Consumablebincard Summaries"
                        component={ConsumableBinCardLand}
                    />
                    <Stack.Screen
                        name="Consumablebincard Details"
                        component={ConsumableBinCardDetails}
                    />
                    <Stack.Screen name="Harvest Form" component={HarvestForm} />
                    <Stack.Screen
                        name="Harvest Summaries"
                        component={HarvestLand}
                    />
                    <Stack.Screen
                        name="Harvest Details"
                        component={HarvestDetails}
                    />
                    <Stack.Screen
                        name="SeedlingsBatch Form"
                        component={SeedlingsBatchForm}
                    />
                    <Stack.Screen
                        name="Seedlings Summaries"
                        component={SeedlingsLand}
                    />
                    <Stack.Screen
                        name="Seedlings Details"
                        component={SeedlingsDetails}
                    />
                    <Stack.Screen name="Tool Form" component={ToolForm} />
                    <Stack.Screen name="Tool Summaries" component={ToolLand} />
                    <Stack.Screen name="Tool Details" component={ToolDetails} />
                    <Stack.Screen
                        name="Toolbincard Form"
                        component={ToolBinCardForm}
                    />
                    <Stack.Screen
                        name="Workers"
                        component={LandReportWorkers}
                    />
                    <Stack.Screen name="Casual Form" component={CasualForm} />
                    <Stack.Screen
                        name="Casual Summaries"
                        component={CasualLand}
                    />
                    <Stack.Screen
                        name="Casual Details"
                        component={CasualDetails}
                    />
                    <Stack.Screen
                        name="Employee Form"
                        component={EmployeeForm}
                    />
                    <Stack.Screen
                        name="Employee Summaries"
                        component={EmployeeLand}
                    />
                    <Stack.Screen
                        name="Employee Details"
                        component={EmployeeDetails}
                    />
                    {/* <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} /> */}
                    <Stack.Screen
                        name="Password 0ne"
                        component={PasswordRecoveryOne}
                    />
                    <Stack.Screen
                        name="Password Two"
                        component={PasswordRecoveryTwo}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
  }
}
AppRegistry.registerComponent("App", () => App);
