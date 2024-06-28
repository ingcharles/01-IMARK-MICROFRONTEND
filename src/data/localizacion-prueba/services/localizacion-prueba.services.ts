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
import { Observable, catchError, map, of } from 'rxjs';
import { IGetLocalizacionPruebaByIdFromRsViewModel, IGetLocalizacionPruebaByIdViewModel, IGetLocalizacionPruebaFromRsViewModel, IGetLocalizacionPruebaPaginadoFromRsViewModel, IGetLocalizacionPruebaPaginadoViewModel, IGetLocalizacionPruebaViewModel, ISaveLocalizacionPruebaFromRsViewModel, ISaveLocalizacionPruebaViewModel, IUpdateLocalizacionPruebaFromRsViewModel, IUpdateLocalizacionPruebaViewModel } from '../../../domain/localizacion-prueba/viewModels/i-localizacion-prueba.viewModel';
import { environment } from '../../../environments/environment';
import { IPage } from '../../base/interfaces/i-page';
import { StatusResponseService } from '../../base/services/status-response.service';

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
	* @return Promise<Observable<ISaveLocalizacionPruebaFromRsViewModel>>
	*/
	public async saveLocalizacionPrueba(localizacionPrueba: ISaveLocalizacionPruebaViewModel): Promise<Observable<ISaveLocalizacionPruebaFromRsViewModel>>{
	localizacionPrueba.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}command/localizacion-prueba/saveLocalizacionPrueba`;
	return this._http.post<any>(url, localizacionPrueba).pipe(
		map((result) => {
		return result;
		}),
		catchError((error) => {
		return of(this._statusResponseService.error(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetLocalizacionPruebaViewModel
	* @return Promise<Observable<IGetLocalizacionPruebaFromRsViewModel>>
	*/
	public async getLocalizacionPrueba(busqueda: IGetLocalizacionPruebaViewModel): Promise<Observable<IGetLocalizacionPruebaFromRsViewModel>>{
	const url = `${apiUrl}LocalizacionPrueba/GetLocalizacionPrueba`;
	return this._http.post<any>(url, busqueda).pipe(
		map((result) => {
		return result;
		}),
		catchError((error) => {
		return of(this._statusResponseService.error(error));
		})
	);
	}

	/**
	* Obtiene el/los registros
	* @param busqueda: IGetLocalizacionPruebaPaginadoViewModel
	* @return Promise<Observable<IGetLocalizacionPruebaPaginadoFromRsViewModel>>
	*/
	public async getLocalizacionPruebaPaginado(dataViewModel: IGetLocalizacionPruebaPaginadoViewModel): Promise<Observable<IPage<IGetLocalizacionPruebaPaginadoFromRsViewModel>>>{

    const url = `${apiUrl}query/localizacion-prueba/findAllPaginateLocalizacionPrueba`;
	return this._http.post<IPage<IGetLocalizacionPruebaPaginadoFromRsViewModel>>(url, dataViewModel).pipe(
		map((result) => {
		return result;
		}),
		catchError((error) => {
		return of();
		})
	);
	}

	/**
	* Obtiene el registro actual
	* @param id_localizacion_prueba: IGetLocalizacionPruebaByIdViewModel
	* @return Promise<Observable<IGetLocalizacionPruebaByIdFromRsViewModel>>
	*/
	public async getLocalizacionPruebaById(id_localizacion_prueba: IGetLocalizacionPruebaByIdViewModel): Promise<Observable<IGetLocalizacionPruebaByIdFromRsViewModel>>{
	const url = `${apiUrl}LocalizacionPrueba/GetLocalizacionPruebaById`;
	return this._http.post<any>(url, id_localizacion_prueba).pipe(
		map((result) => {
		return result;
		}),
		catchError((error) => {
		return of(this._statusResponseService.error(error));
		})
	);
	}

	/**
	* Actualizar el registro actual
	* @param localizacionPrueba: IUpdateLocalizacionPruebaViewModel
	* @return Promise<Observable<IUpdateLocalizacionPruebaFromRsViewModel>>
	*/
	public async updateLocalizacionPrueba(localizacionPrueba: IUpdateLocalizacionPruebaViewModel): Promise<Observable<IUpdateLocalizacionPruebaFromRsViewModel>>{
	localizacionPrueba.auditoria = 'transaccionAuditoria';
	const url = `${apiUrl}LocalizacionPrueba/UpdateLocalizacionPrueba`;
	return this._http.post<any>(url, localizacionPrueba).pipe(
		map((result) => {
		return result;
		}),
		catchError((error) => {
		return of(this._statusResponseService.error(error));
		})
	);
	}

}
