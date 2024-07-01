/**
* Clase LocalizacionPruebaService que extiende de ALocalizacionPruebaService.
* Este archivo se complementa con el archivo ALocalizacionPruebaService.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaService
* @package Service
* @subpackage Data
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of  } from 'rxjs';
import { IGetLocalizacionPruebaRsViewModel, IGetLocalizacionPruebaViewModel, IGetLocalizacionPruebaPaginadoViewModel, IGetLocalizacionPruebaPaginadoRsViewModel, IGetLocalizacionPruebaByIdRsViewModel, IGetLocalizacionPruebaByIdViewModel, ISaveLocalizacionPruebaRsViewModel, ISaveLocalizacionPruebaViewModel, IUpdateLocalizacionPruebaRsViewModel, IUpdateLocalizacionPruebaViewModel } from '../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';
import { StatusResponseService } from '../../base/services/status-response.service';
import { IResponseStatusViewModel } from '../../../domain/base/viewModels/i-response-status.viewModel';
import { environment } from '../../../environments/environment';

const apiUrl: string = environment.apiUrl;

@Injectable({
	providedIn: 'root',
})

export class LocalizacionPruebaService  {

	/**
	* Constructor
	* Se pueden llamar los servicios complementarios para este servicio
	* @param _http: HttpClient, _statusResponseService: StatusResponseService
	* @return LocalizacionPruebaService
	*/
	constructor(private _http: HttpClient, private _statusResponseService: StatusResponseService) {
	}

	/**
	* Guarda el registro actual
	* @param localizacionPrueba: ISaveLocalizacionPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaRsViewModel>>>
	*/
	public async saveLocalizacionPrueba(localizacionPrueba: ISaveLocalizacionPruebaViewModel): Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaRsViewModel>>>{
	localizacionPrueba.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/localizacion-prueba/saveLocalizacionPrueba`;
	return this._http.post<ISaveLocalizacionPruebaRsViewModel>(url, localizacionPrueba).pipe(
		map((result) => {
		return this._statusResponseService.succes<ISaveLocalizacionPruebaRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<ISaveLocalizacionPruebaRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetLocalizacionPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaRsViewModel>>>
	*/
	public async getLocalizacionPrueba(busqueda: IGetLocalizacionPruebaViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaRsViewModel>>>{
	const url = `${apiUrl}query/localizacion-prueba/getLocalizacionPrueba`;
	return this._http.post<IGetLocalizacionPruebaRsViewModel>(url, busqueda).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetLocalizacionPruebaRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetLocalizacionPruebaRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetLocalizacionPruebaPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaPaginadoRsViewModel>>>
	*/
	public async getLocalizacionPruebaPaginado(dataViewModel: IGetLocalizacionPruebaPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaPaginadoRsViewModel>>>{
	const url = `${apiUrl}query/localizacion-prueba/findAllPaginateLocalizacionPrueba`;
	return this._http.post<IGetLocalizacionPruebaPaginadoRsViewModel>(url, dataViewModel).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetLocalizacionPruebaPaginadoRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetLocalizacionPruebaPaginadoRsViewModel>(error));
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param id_localizacion_prueba: IGetLocalizacionPruebaByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaByIdRsViewModel>>>
	*/
	public async getLocalizacionPruebaById(id_localizacion_prueba: IGetLocalizacionPruebaByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaByIdRsViewModel>>>{
	const url = `${apiUrl}query/localizacion-prueba/findByIdLocalizacionPrueba`;
	return this._http.post<IGetLocalizacionPruebaByIdRsViewModel>(url, id_localizacion_prueba).pipe(
		map((result) => {
		return this._statusResponseService.succes<IGetLocalizacionPruebaByIdRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IGetLocalizacionPruebaByIdRsViewModel>(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param localizacionPrueba: IUpdateLocalizacionPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaRsViewModel>>>
	*/
	public async updateLocalizacionPrueba(localizacionPrueba: IUpdateLocalizacionPruebaViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaRsViewModel>>>{
	localizacionPrueba.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/localizacion-prueba/updateLocalizacionPrueba`;
	return this._http.post<IUpdateLocalizacionPruebaRsViewModel>(url, localizacionPrueba).pipe(
		map((result) => {
		return this._statusResponseService.succes<IUpdateLocalizacionPruebaRsViewModel>(result);
		}),
		catchError((error) => {
		return of(this._statusResponseService.error<IUpdateLocalizacionPruebaRsViewModel>(error));
		})
	);
	}

}
