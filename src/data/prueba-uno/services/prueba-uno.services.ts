/**
* Clase PruebaUnoService que extiende de APruebaUnoService.
* Este archivo se complementa con el archivo APruebaUnoService.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    PruebaUnoService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of  } from 'rxjs';
import { IGetPruebaUnoRsViewModel, IGetPruebaUnoViewModel, IGetPruebaUnoPaginadoViewModel, IGetPruebaUnoPaginadoRsViewModel, IGetPruebaUnoByIdRsViewModel, IGetPruebaUnoByIdViewModel, ISavePruebaUnoRsViewModel, ISavePruebaUnoViewModel, IUpdatePruebaUnoRsViewModel, IUpdatePruebaUnoViewModel } from '../../../domain/prueba-uno/viewModels/i-prueba-uno.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IResultApi } from '../../base/interfaces/IResultApi';

const apiUrl: string = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})

export class PruebaUnoService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return PruebaUnoService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param pruebaUno: ISavePruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISavePruebaUnoRsViewModel>>>
	*/
	public async savePruebaUno(pruebaUno: ISavePruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<ISavePruebaUnoRsViewModel>>>{
	pruebaUno.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/prueba-uno/savePruebaUno`;
	return this._http.post<IResultApi>(url, pruebaUno).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISavePruebaUnoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISavePruebaUnoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoRsViewModel>>>
	*/
	public async getPruebaUno(busqueda: IGetPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoRsViewModel>>>{
	const url = `${apiUrl}query/prueba-uno/getPruebaUno`;
	return this._http.post<IResultApi>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetPruebaUnoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetPruebaUnoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetPruebaUnoPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoPaginadoRsViewModel>>>
	*/
	public async getPruebaUnoPaginado(dataViewModel: IGetPruebaUnoPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoPaginadoRsViewModel>>>{
	const url = `${apiUrl}query/prueba-uno/findAllPaginatePruebaUno`;
	return this._http.post<IResultApi>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetPruebaUnoPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetPruebaUnoPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param id_uno: IGetPruebaUnoByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoByIdRsViewModel>>>
	*/
	public async getPruebaUnoById(id_uno: IGetPruebaUnoByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaUnoByIdRsViewModel>>>{
	const url = `${apiUrl}query/prueba-uno/findByIdPruebaUno`;
	return this._http.post<IResultApi>(url, id_uno).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetPruebaUnoByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetPruebaUnoByIdRsViewModel>(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param pruebaUno: IUpdatePruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdatePruebaUnoRsViewModel>>>
	*/
	public async updatePruebaUno(pruebaUno: IUpdatePruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IUpdatePruebaUnoRsViewModel>>>{
	pruebaUno.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/prueba-uno/updatePruebaUno`;
	return this._http.post<IResultApi>(url, pruebaUno).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdatePruebaUnoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdatePruebaUnoRsViewModel>(error));
		})
	);
	}

}
