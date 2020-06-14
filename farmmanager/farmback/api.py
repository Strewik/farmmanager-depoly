from .models import *
from rest_framework import viewsets, permissions
from .serializers import *


# User Viewset
class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer


# Farm Viewset
class FarmViewset(viewsets.ModelViewSet):
    queryset = Farm.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = FarmSerializer


# AdvanceForm Viewset
class AdvanceFormViewset(viewsets.ModelViewSet):
    queryset = AdvanceForm.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = AdvanceFormSerializer


# Casual Viewset
class CasualViewset(viewsets.ModelViewSet):
    queryset = Casual.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CasualSerializer


# Consumable Viewset
class ConsumableViewset(viewsets.ModelViewSet):
    queryset = Consumable.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ConsumableSerializer


# ConsumableBinCard
class ConsumableBinCardViewset(viewsets.ModelViewSet):
    queryset = ConsumableBinCard.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ConsumableBinCardSerializer


# Customer Viewset
class CustomerViewset(viewsets.ModelViewSet):
    queryset = Customer.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = CustomerSerializer


# Employee
class EmployeeViewset(viewsets.ModelViewSet):
    queryset = Employee.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmployeeSerializer


# Expenditure Viewset
class ExpenditureViewset(viewsets.ModelViewSet):
    queryset = Expenditure.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ExpenditureSerializer


# Harvest Viewset
class HarvestViewset(viewsets.ModelViewSet):
    queryset = Harvest.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = HarvestSerializer


# Income Viewset
class IncomeViewset(viewsets.ModelViewSet):
    queryset = Income.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = IncomeSerializer


# Payroll Viewset
class PayrollViewset(viewsets.ModelViewSet):
    queryset = Payroll.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = PayrollSerializer


# Requisition Viewset
class RequisitionViewset(viewsets.ModelViewSet):
    queryset = Requisition.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = RequisitionSerializer


# Seedling Viewset
class SeedlingViewset(viewsets.ModelViewSet):
    queryset = SeedlingsBatch.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = SeedlingsBatchSerializer


# Supplier Viewset
class SupplierViewset(viewsets.ModelViewSet):
    queryset = Supplier.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = SupplierSerializer


# Tool Viewset
class ToolViewset(viewsets.ModelViewSet):
    queryset = Tool.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ToolSerializer


# ToolBinCard Viewset
class ToolBinCardViewset(viewsets.ModelViewSet):
    queryset = ToolBinCard.objects.all().order_by('-date')
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ToolBinCardSerializer
