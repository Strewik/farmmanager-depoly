from rest_framework import routers
from .api import *

router = routers.DefaultRouter()
router.register('api/user', UserViewset, 'farmback')
router.register('api/farm', FarmViewset, 'farmback')
router.register('api/advance', AdvanceFormViewset, 'farmback')
router.register('api/casual', CasualViewset, 'farmback')
router.register('api/consumable', ConsumableViewset, 'farmback')
router.register('api/consumablebincard', ConsumableBinCardViewset, 'farmback')
router.register('api/customer', CustomerViewset, 'farmback')
router.register('api/employee', EmployeeViewset, 'farmback')
router.register('api/expenditure', ExpenditureViewset, 'farmback')
router.register('api/harvest', HarvestViewset, 'farmback')
router.register('api/income', IncomeViewset, 'farmback')
router.register('api/payroll', PayrollViewset, 'farmback')
router.register('api/requisition', RequisitionViewset, 'farmback')
router.register('api/seedling', SeedlingsBatchViewset, 'farmback')
router.register('api/supplier', SupplierViewset, 'farmback')
router.register('api/tool', ToolViewset, 'farmback')
router.register('api/toolbincard', ToolBinCardViewset, 'farmback')
urlpatterns = router.urls
