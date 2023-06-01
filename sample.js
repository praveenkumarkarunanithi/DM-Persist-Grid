
let dataManagerNew = new ej.data.DataManager({
  url: "https://ej2services.syncfusion.com/js/development/api/UrlDataSource",
  adaptor: new ej.data.UrlAdaptor(),
  enablePersistence: true,
  id: "TestDM",
  ignoreOnPersist: ["onSearch", "onSortBy"]
});

let grid = new ej.grids.Grid({
allowFiltering: true,
allowPaging: true,
allowSorting: true,
allowGrouping: true,
dataSource: dataManagerNew,
editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
pageSettings: { pageSize: 50 },
height: 150,
columns: [
  { field: 'EmployeeID', headerText: 'EmployeeID', textAlign: 'Right', width: 120, isPrimaryKey: true },
  { field: 'Employees', headerText: 'Employees', width: 160 },
  { field: 'Designation', headerText: 'Designation', textAlign: 'Right', width: 120 },
  { field: 'CurrentSalary', headerText: 'CurrentSalary', width: 120 },
  ],
});
grid.appendTo("#Grid");

let dataManagerNew2 = new ej.data.DataManager({
url: "https://ej2services.syncfusion.com/js/development/api/UrlDataSource",
adaptor: new ej.data.UrlAdaptor(),
enablePersistence: true,
id: "TestDM2",
ignoreOnPersist: ["onPage"]
});

let grid2 = new ej.grids.Grid({
allowFiltering: true,
allowPaging: true,
allowSorting: true,
allowGrouping: true,
dataSource: dataManagerNew2,
editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
pageSettings: { pageSize: 50 },
height: 150,
columns: [
  { field: 'EmployeeID', headerText: 'EmployeeID', textAlign: 'Right', width: 120, isPrimaryKey: true },
  { field: 'Employees', headerText: 'Employees', width: 160 },
  { field: 'Designation', headerText: 'Designation', textAlign: 'Right', width: 120 },
  { field: 'CurrentSalary', headerText: 'CurrentSalary', width: 120 },
  ],
});
grid2.appendTo("#Grid2");

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
dataManagerNew.clearPersistence();
location.reload();
});

const clear2 = document.getElementById("clear2");
clear2.addEventListener("click", () => {
dataManagerNew2.clearPersistence();
location.reload();
});

const destroyG1 = document.getElementById("destroyG1");
destroyG1.addEventListener("click", () => {
grid.destroy();
dataManagerNew.clearPersistence();
});


const destroyG2 = document.getElementById("destroyG2");
destroyG2.addEventListener("click", () => {
grid2.destroy();
dataManagerNew2.clearPersistence();
});
