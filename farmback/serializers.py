from rest_framework import serializers
from .models import *


# User Serialiser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


# Farm Serialiser
class FarmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farm
        fields = '__all__'


# AdvanceForm Serialiser
class AdvanceFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdvanceForm
        fields = '__all__'


# Casual Serialiser
class CasualSerializer(serializers.ModelSerializer):
    class Meta:
        model = Casual
        fields = '__all__'


# Consumable Serialiser
class ConsumableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consumable
        fields = '__all__'


# ConsumableBinCard Serialiser
class ConsumableBinCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConsumableBinCard
        fields = '__all__'


# Customer Serialiser
class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'


# Employee Serialiser
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


# Expenditure Serialiser
class ExpenditureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expenditure
        fields = '__all__'


# Harvest Serialiser
class HarvestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Harvest
        fields = '__all__'


# Income Serialiser
class IncomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Income
        fields = '__all__'


# Payroll Serialiser
class PayrollSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payroll
        fields = '__all__'


# Requisition Serialiser
class RequisitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requisition
        fields = '__all__'


# SeedlingsBatch Serialiser
class SeedlingsBatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeedlingsBatch
        fields = '__all__'


# Supplier Serialiser
class SupplierSerializer(serializers.ModelSerializer):
    class Meta:
        model = Supplier
        fields = '__all__'


# Tool Serialiser
class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


# ToolBinCard Serialiser
class ToolBinCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ToolBinCard
        fields = '__all__'
