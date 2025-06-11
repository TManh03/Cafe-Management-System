import { Component, AfterViewInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../services/snackbar.service';
import { error } from 'console';
import { GlobalConstants } from '../shared/global-constants';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

	responseMessage: any;
	data: any;
	monthlyRevenue: any[] = [];

	ngAfterViewInit() { }

	constructor(private dashboardService: DashboardService,
		private ngxService: NgxUiLoaderService,
		private snackbarService: SnackbarService
	) {
		this.ngxService.start();
		this.dashboardData();
		this.loadMonthlyRevenue();
	}

	dashboardData(){
		this.dashboardService.getDetails().subscribe((response: any) => {
			this.ngxService.stop();
			this.data = response;
		},(error: any) => {
			this.ngxService.stop();
			console.log(error);
			if(error.error?.message){
				this.responseMessage = error.error?.message;
			}
			else{
				this.responseMessage = GlobalConstants.genericError;
			}
			this.snackbarService.openSnackBar(this.responseMessage,GlobalConstants.error);
		})
	}

	loadMonthlyRevenue() {
    this.dashboardService.getMonthlyRevenue().subscribe(
      (response: any) => {
        this.monthlyRevenue = response;
      },
      (error: any) => {
        this.handleError(error, 'Lỗi khi tải doanh thu theo tháng');
      }
    );
  }

  private handleError(error: any, fallbackMsg: string) {
    console.log(error);
    this.responseMessage = error.error?.message || fallbackMsg || GlobalConstants.genericError;
    this.snackbarService.openSnackBar(this.responseMessage, GlobalConstants.error);
  }

}
