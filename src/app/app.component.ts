import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aspire-datatable-demo';
  headers: any[] = [];
  records: any[] = [];
  popup: any[] = [];
  options: any;

  ngOnInit(): void {
    this.headers = [
      { field: 'name', type: 'string' },
      { field: 'status', type: 'boolean' },
      { field: 'date', type: 'date' },
      { field: 'mobile', type: 'html' },
      { field: 'action', type: 'any' }
    ];

    this.popup = [{ body: 'Do you want to delete ?', header: 'Delete Action', perAction: 'delete' }];

    this.records = [
      {
        id: 1,
        name: 'John',
        status: 'yes',
        date: '01/18/2020',
        mobile: '<a href="tel:+1 (944) 568-3859">+1 (944) 568-3859</a>',
        action: {
          id: 1,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '1/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 2,
        name: 'Nick',
        status: 'yes',
        date: '01/18/2020',
        mobile: '<a href="tel:+251 11 060 3279">+251 11 060 3279</a>',
        action: {
          id: 2,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '2/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 3,
        name: 'Tom',
        status: 'no',
        date: '11/05/2020',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 3,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '3/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 4,
        name: 'Mario',
        status: 'yes',
        date: '05/21/2020',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 4,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '4/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 5,
        name: 'Anna',
        status: 'no',
        date: '02/02/2020',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 5,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '5/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 6,
        name: 'Walter',
        status: 'yes',
        date: '12/10/2019',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 6,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '6/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 7,
        name: 'Bob',
        status: 'yes',
        date: '05/20/2019',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 7,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '7/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 8,
        name: 'Peter',
        status: 'no',
        date: '07/31/2019',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 8,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '8/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 9,
        name: 'Minnie',
        status: 'yes',
        date: '11/11/2019',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 9,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '9/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 10,
        name: 'Robin',
        status: 'yes',
        date: '05/20/2020',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 10,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '10/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      },
      {
        id: 11,
        name: 'Paul',
        status: 'yes',
        date: '06/21/2019',
        mobile: '<a href="tel:+65 3097 5232">+65 3097 5232</a>',
        action: {
          id: 11,
          classType: 'fa fa-cog',
          perform: [
            { perAction: 'edit', url: '11/edit' },
            { perAction: 'delete', class: 'fa fa-cog', url: null, popupConfirm: true }
          ]
        }
      }
    ];

    this.options = {
      tableStyle: 'table table-striped table-bordered',
      headerStyle: 'thead-light',
      tableRowStyle: '',
      tableDataStyle: '',
      page: 1,
      dateFormat: 'dd/MM/yyyy',
      searchingStyle: '',
      noRecordFoundMessage: "No Records found!",
      itemsPerPage: 10,
      resetPagination: true,
      showSorting: true,
      showSearch: true,
      showRecordsCount: true,
      showPagination: true,
      showRecordsPerPageSelector: true,
      recordsPerPageOptions: [5, 10, 20, 30, 50],
      paginationOptions: {
        ariaLabel: 'Default pagination',
        disable: false,
        paginationStyle: 'pagination justify-content-center',
        pageItemStyle: 'page-item',
        pageLinkStyle: 'page-link',
        firstPageText: '<<',
        prevPageText: '<',
        nextPageText: '>',
        lastPageText: '>>'
      },
      componentsClass: {
        topBlankComponentClassList: 'col-md-6 col-sm-12',
        bottomBlankComponentClassList: 'col-md-4 col-sm-12',
        pagination: {
          position: 'bottom-right',
          classList: 'col-md-8 col-sm-8 mt-2 mt-sm-0',
          alignmentClassList: 'justify-right justify-center-center'
        },
        recordsCount: {
          position: 'bottom-left',
          classList: 'col-md-4 col-sm-4 mt-2 mt-sm-0',
          alignmentClassList: 'justify-left justify-center-center'
        },
        search: {
          position: 'top-right',
          classList: 'col-md-6 col-sm-6 mb-2 mb-sm-0',
          alignmentClassList: 'justify-right'
        },
        recordsPerPage: {
          position: 'top-left',
          classList: 'col-md-6 col-sm-6',
          alignmentClassList: 'justify-left'
        }
      }
    };
  }


  onActionConfirm(event) {
    if (event) {
      if (event.action === 'delete') {
        console.log('Confirmed action delete!');
      }
    }
  }
}
