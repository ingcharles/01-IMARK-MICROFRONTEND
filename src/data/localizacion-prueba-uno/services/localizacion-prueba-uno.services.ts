/**
* Clase LocalizacionPruebaUnoService que extiende de ALocalizacionPruebaUnoService.
* Este archivo se complementa con el archivo ALocalizacionPruebaUnoService.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaUnoService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { IGetLocalizacionPruebaUnoByIdRsViewModel, IGetLocalizacionPruebaUnoByIdViewModel, IGetLocalizacionPruebaUnoPaginadoRsViewModel, IGetLocalizacionPruebaUnoPaginadoViewModel, IGetLocalizacionPruebaUnoRsViewModel, IGetLocalizacionPruebaUnoViewModel, ISaveLocalizacionPruebaUnoRsViewModel, ISaveLocalizacionPruebaUnoViewModel, IUpdateLocalizacionPruebaUnoRsViewModel, IUpdateLocalizacionPruebaUnoViewModel } from '../../../domain/localizacion-prueba-uno/viewModels/i-localizacion-prueba-uno.viewModel';
import { environment } from '../../../environments/environment';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResultApi } from '../../base/interfaces/IResultApi';

const apiUrl: string = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})

export class LocalizacionPruebaUnoService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return LocalizacionPruebaUnoService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param localizacionPruebaUno: ISaveLocalizacionPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaUnoRsViewModel>>>
	*/
	public async saveLocalizacionPruebaUno(localizacionPruebaUno: ISaveLocalizacionPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaUnoRsViewModel>>>{
	localizacionPruebaUno.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/localizacion-prueba-uno/saveLocalizacionPruebaUno`;
	return this._http.post<IResultApi>(url, localizacionPruebaUno).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISaveLocalizacionPruebaUnoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISaveLocalizacionPruebaUnoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetLocalizacionPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoRsViewModel>>>
	*/
	public async getLocalizacionPruebaUno(busqueda: IGetLocalizacionPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoRsViewModel>>>{
	const url = `${apiUrl}query/localizacion-prueba-uno/getLocalizacionPruebaUno`;
	return this._http.post<IResultApi>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetLocalizacionPruebaUnoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetLocalizacionPruebaUnoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetLocalizacionPruebaUnoPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoPaginadoRsViewModel>>>
	*/
	public async getLocalizacionPruebaUnoPaginado(dataViewModel: IGetLocalizacionPruebaUnoPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoPaginadoRsViewModel>>>{
	const url = `${apiUrl}query/localizacion-prueba-uno/findAllPaginateLocalizacionPruebaUno`;
	return this._http.post<IResultApi>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetLocalizacionPruebaUnoPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetLocalizacionPruebaUnoPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param campo_serial: IGetLocalizacionPruebaUnoByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoByIdRsViewModel>>>
	*/
	public async getLocalizacionPruebaUnoById(campo_serial: IGetLocalizacionPruebaUnoByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoByIdRsViewModel>>>{
	const url = `${apiUrl}query/localizacion-prueba-uno/findByIdLocalizacionPruebaUno`;
	return this._http.post<IResultApi>(url, campo_serial).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetLocalizacionPruebaUnoByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetLocalizacionPruebaUnoByIdRsViewModel>(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param localizacionPruebaUno: IUpdateLocalizacionPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaUnoRsViewModel>>>
	*/
	public async updateLocalizacionPruebaUno(localizacionPruebaUno: IUpdateLocalizacionPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaUnoRsViewModel>>>{
	localizacionPruebaUno.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/localizacion-prueba-uno/updateLocalizacionPruebaUno`;
	return this._http.post<IResultApi>(url, localizacionPruebaUno).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdateLocalizacionPruebaUnoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdateLocalizacionPruebaUnoRsViewModel>(error));
		})
	);
	}

}
