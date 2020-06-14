from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=50, unique=True)
    phone = models.IntegerField()
    password = models.CharField(max_length=50)


class Farm(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    contactperson = models.CharField(max_length=100)
    phone = models.IntegerField()
    tin = models.IntegerField()


class AdvanceForm(models.Model):
    date = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    advancedamnt = models.IntegerField()
    reason = models.CharField(max_length=100)
    recipient = models.CharField(max_length=100)
    payperiod = models.CharField(max_length=50)
    paymethod = models.CharField(max_length=100)


class Casual(models.Model):
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    startdate = models.CharField(max_length=100, blank=True)
    reasontohire = models.CharField(max_length=100)
    expirydate = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
    dob = models.CharField(max_length=50)
    phone1 = models.IntegerField()
    phone2 = models.IntegerField(blank=True)
    skills = models.CharField(max_length=100, blank=True)
    home = models.CharField(max_length=100, blank=True)
    religion = models.CharField(max_length=100)
    nin = models.CharField(max_length=100, blank=True, unique=True)


class Consumable(models.Model):
    date = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    itemtype = models.CharField(max_length=100)
    description = models.CharField(max_length=100, blank=True)
    purpose = models.CharField(max_length=100, blank=True)
    material = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    unit = models.CharField(max_length=100)
    unitsize = models.CharField(max_length=100)
    unitcost = models.CharField(max_length=100)
    mainuser = models.CharField(max_length=100)


class ConsumableBinCard(models.Model):
    date = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    qtytaken = models.IntegerField()
    qtyused = models.IntegerField()
    qtybal = models.IntegerField()
    description = models.CharField(max_length=100, blank=True)
    notification = models.IntegerField()
    takenby = models.CharField(max_length=100)
    store = models.CharField(max_length=100)


class Customer(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)
    companyname = models.CharField(max_length=100)
    telephone1 = models.IntegerField()
    telephone2 = models.IntegerField()
    email = models.CharField(max_length=100)
    billingaddress = models.CharField(max_length=100)
    deliveryaddress = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    tin = models.IntegerField()


class Employee(models.Model):
    fullname = models.CharField(max_length=100)
    gender = models.CharField(max_length=100)
    employeeno = models.CharField(max_length=100, blank=True)
    dob = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, blank=True, unique=True)
    phone1 = models.IntegerField()
    phone2 = models.IntegerField(blank=True)
    startdate = models.CharField(max_length=50, blank=True)
    education = models.CharField(max_length=100)
    religion = models.CharField(max_length=100)
    nin = models.CharField(max_length=100, blank=True, unique=True)


class Expenditure(models.Model):
    date = models.CharField(max_length=50)
    suppl = models.CharField(max_length=100)
    phone = models.IntegerField()
    product = models.CharField(max_length=50)
    itemtype = models.CharField(max_length=50)
    unit = models.CharField(max_length=50)
    unitprice = models.IntegerField()
    quantity = models.IntegerField()
    subtotal = models.IntegerField()
    tax = models.IntegerField(blank=True)
    description = models.CharField(max_length=500, blank=True)
    total = models.IntegerField()
    invnumber = models.IntegerField(blank=True)
    amountpaid = models.IntegerField()
    paymode = models.CharField(max_length=50)
    receiptnum = models.IntegerField(blank=True)
    baldue = models.IntegerField(blank=True)
    balduedate = models.CharField(max_length=50, blank=True)


class Harvest(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100, blank=True)
    date = models.CharField(max_length=50)
    season = models.CharField(max_length=100)
    qty = models.IntegerField()
    units = models.IntegerField()
    blockname = models.CharField(max_length=100)
    acreage = models.CharField(max_length=100, blank=True)
    cropharvestd = models.CharField(max_length=100, blank=True)
    cropage = models.CharField(max_length=100, blank=True)
    noworkers = models.CharField(max_length=100)


class Income(models.Model):
    amountrecvd = models.IntegerField()
    receiptnum = models.IntegerField(blank=True)
    customer = models.CharField(max_length=100)
    phone = models.IntegerField()
    date = models.CharField(max_length=50)
    product = models.CharField(max_length=100)
    quantity = models.IntegerField()
    unit = models.CharField(max_length=50)
    unitprice = models.IntegerField()
    subtotal = models.IntegerField()
    vat = models.IntegerField(blank=True)
    total = models.IntegerField()
    paymode = models.CharField(max_length=50)
    invnumber = models.IntegerField(blank=True)
    baldue = models.IntegerField(blank=True)
    balduedate = models.CharField(max_length=50, blank=True)


class Payroll(models.Model):
    date = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    advance = models.IntegerField(blank=True)
    netsalary = models.IntegerField()
    lst = models.IntegerField(blank=True)
    nssf = models.IntegerField(blank=True)
    paye = models.IntegerField(blank=True)
    grosssalary = models.IntegerField()
    payperiod = models.CharField(max_length=50)
    paymtd = models.CharField(max_length=50)


class Requisition(models.Model):
    date = models.CharField(max_length=50)
    reqno = models.CharField(max_length=100, blank=True)
    itemtype  = models.CharField(max_length=50)
    description = models.CharField(max_length=50, blank=True)
    purpose = models.CharField(max_length=50)
    activity = models.CharField(max_length=100, blank=True)
    unit = models.CharField(max_length=50)
    unitprice = models.IntegerField()
    qty = models.IntegerField()
    total = models.IntegerField()
    requestby = models.CharField(max_length=50)
    approvby = models.CharField(max_length=50, blank=True)


class SeedlingsBatch(models.Model):
    date = models.CharField(max_length=50)
    code = models.CharField(max_length=100, blank=True)
    noseedlings = models.CharField(max_length=100)
    mother = models.CharField(max_length=100)
    variety = models.CharField(max_length=100)
    clone = models.CharField(max_length=100, blank=True)
    nursery = models.CharField(max_length=100, blank=True)
    location = models.CharField(max_length=100, blank=True)
    age = models.CharField(max_length=100, blank=True)
    status = models.CharField(max_length=100, blank=True)


class Supplier(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100, blank=True)
    companyname = models.CharField(max_length=100)
    telephone1 = models.CharField(max_length=100)
    telephone2 = models.CharField(max_length=100, blank=True)
    email = models.CharField(max_length=100, blank=True)
    busaddress = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    terms = models.CharField(max_length=100, blank=True)
    tin = models.CharField(max_length=100, blank=True)


class Tool(models.Model):
    date = models.CharField(max_length=50)
    toolname = models.CharField(max_length=100)
    tooltype = models.CharField(max_length=100)
    purpose = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    mainuser = models.CharField(max_length=100)
    model = models.CharField(max_length=100, blank=True)
    condition = models.CharField(max_length=100)
    lifespan = models.CharField(max_length=100, blank=True)
    qty = models.IntegerField()
    toolcost = models.IntegerField(blank=True)
    totalcost = models.IntegerField()


class ToolBinCard(models.Model):
    toolname = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    datein = models.CharField(max_length=50)
    storename = models.CharField(max_length=100)
    dateout = models.CharField(max_length=50)
    takenby = models.CharField(max_length=100)
    toolcond = models.CharField(max_length=100)
    serialno = models.CharField(max_length=100, blank=True)
