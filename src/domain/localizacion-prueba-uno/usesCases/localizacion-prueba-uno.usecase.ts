/**
* Clase LocalizacionPruebaUnoUseCase.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaUnoUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalizacionPruebaUnoService } from '../../../data/localizacion-prueba-uno/services/localizacion-prueba-uno.services';
import { IGetLocalizacionPruebaUnoByIdRsViewModel, IGetLocalizacionPruebaUnoByIdViewModel, IGetLocalizacionPruebaUnoRsViewModel, IGetLocalizacionPruebaUnoViewModel, IGetLocalizacionPruebaUnoPaginadoRsViewModel, IGetLocalizacionPruebaUnoPaginadoViewModel, ISaveLocalizacionPruebaUnoRsViewModel, ISaveLocalizacionPruebaUnoViewModel, IUpdateLocalizacionPruebaUnoRsViewModel, IUpdateLocalizacionPruebaUnoViewModel  } from '../viewModels/i-localizacion-prueba-uno.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


@Injectable({
	providedIn: 'root',
})
export class LocalizacionPruebaUnoUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_localizacionPruebaUnoService: LocalizacionPruebaUnoService = inject(LocalizacionPruebaUnoService)

	/**
	* Guarda el registro actual
	* @param localizacionPruebaUno: ISaveLocalizacionPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaUnoRsViewModel>>>
	*/
	public async saveLocalizacionPruebaUno(localizacionPruebaUno: ISaveLocalizacionPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaUnoRsViewModel>>> {
	return await this._localizacionPruebaUnoService.saveLocalizacionPruebaUno(localizacionPruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPruebaUno: IGetLocalizacionPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoRsViewModel>>>
	*/
	public async getLocalizacionPruebaUno(localizacionPruebaUno: IGetLocalizacionPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoRsViewModel>>> {
	return await this._localizacionPruebaUnoService.getLocalizacionPruebaUno(localizacionPruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPruebaUno: IGetLocalizacionPruebaUnoPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoPaginadoRsViewModel>>>
	*/
	public async getLocalizacionPruebaUnoPaginado(localizacionPruebaUno: IGetLocalizacionPruebaUnoPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoPaginadoRsViewModel>>> {
	return await this._localizacionPruebaUnoService.getLocalizacionPruebaUnoPaginado(localizacionPruebaUno);
	}
	/**
	* Obtiene el registro por id
	* @param localizacionPruebaUno: IGetLocalizacionPruebaUnoByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoByIdRsViewModel>>>
	*/
	public async getLocalizacionPruebaUnoById(localizacionPruebaUno: IGetLocalizacionPruebaUnoByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaUnoByIdRsViewModel>>> {
	return await this._localizacionPruebaUnoService.getLocalizacionPruebaUnoById(localizacionPruebaUno);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPruebaUno: IUpdateLocalizacionPruebaUnoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaUnoRsViewModel>>>
	*/
	public async updateLocalizacionPruebaUno(localizacionPruebaUno: IUpdateLocalizacionPruebaUnoViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaUnoRsViewModel>>> {
	return await this._localizacionPruebaUnoService.updateLocalizacionPruebaUno(localizacionPruebaUno);
	}

}
