/**
* Clase PruebaService que extiende de APruebaService.
* Este archivo se complementa con el archivo APruebaService.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    PruebaService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of  } from 'rxjs';
import { IGetPruebaRsViewModel, IGetPruebaViewModel, IGetPruebaPaginadoViewModel, IGetPruebaPaginadoRsViewModel, IGetPruebaByIdRsViewModel, IGetPruebaByIdViewModel, ISavePruebaRsViewModel, ISavePruebaViewModel, IUpdatePruebaRsViewModel, IUpdatePruebaViewModel } from '../../../domain/prueba/viewModels/i-prueba.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';

const apiUrl: string = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})

export class PruebaService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return PruebaService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param prueba: ISavePruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISavePruebaRsViewModel>>>
	*/
	public async savePrueba(prueba: ISavePruebaViewModel): Promise<Observable<IResponseStatusViewModel<ISavePruebaRsViewModel>>>{
	prueba.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/prueba/savePrueba`;
	return this._http.post<ISavePruebaRsViewModel>(url, prueba).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISavePruebaRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISavePruebaRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaRsViewModel>>>
	*/
	public async getPrueba(busqueda: IGetPruebaViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaRsViewModel>>>{
	const url = `${apiUrl}query/prueba/getPrueba`;
	return this._http.post<IGetPruebaRsViewModel>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetPruebaRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetPruebaRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetPruebaPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaPaginadoRsViewModel>>>
	*/
	public async getPruebaPaginado(dataViewModel: IGetPruebaPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaPaginadoRsViewModel>>>{
	const url = `${apiUrl}query/prueba/findAllPaginatePrueba`;
	return this._http.post<IGetPruebaPaginadoRsViewModel>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetPruebaPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetPruebaPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param id: IGetPruebaByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaByIdRsViewModel>>>
	*/
	public async getPruebaById(id: IGetPruebaByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaByIdRsViewModel>>>{
	const url = `${apiUrl}query/prueba/findByIdPrueba`;
	return this._http.post<IGetPruebaByIdRsViewModel>(url, id).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetPruebaByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetPruebaByIdRsViewModel>(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param prueba: IUpdatePruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdatePruebaRsViewModel>>>
	*/
	public async updatePrueba(prueba: IUpdatePruebaViewModel): Promise<Observable<IResponseStatusViewModel<IUpdatePruebaRsViewModel>>>{
	prueba.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/prueba/updatePrueba`;
	return this._http.post<IUpdatePruebaRsViewModel>(url, prueba).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdatePruebaRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdatePruebaRsViewModel>(error));
		})
	);
	}

}
