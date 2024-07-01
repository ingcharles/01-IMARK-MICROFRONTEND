/**
* Clase LocalizacionPruebaUseCase.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    LocalizacionPruebaUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalizacionPruebaService } from '../../../data/localizacion-prueba/services/localizacion-prueba.services';
import { IGetLocalizacionPruebaByIdRsViewModel, IGetLocalizacionPruebaByIdViewModel, IGetLocalizacionPruebaRsViewModel, IGetLocalizacionPruebaViewModel, IGetLocalizacionPruebaPaginadoRsViewModel, IGetLocalizacionPruebaPaginadoViewModel, ISaveLocalizacionPruebaRsViewModel, ISaveLocalizacionPruebaViewModel, IUpdateLocalizacionPruebaRsViewModel, IUpdateLocalizacionPruebaViewModel  } from '../viewModels/i-localizacion-prueba.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


@Injectable({
	providedIn: 'root',
})
export class LocalizacionPruebaUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_localizacionPruebaService: LocalizacionPruebaService = inject(LocalizacionPruebaService)

	/**
	* Guarda el registro actual
	* @param localizacionPrueba: ISaveLocalizacionPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaRsViewModel>>>
	*/
	public async saveLocalizacionPrueba(localizacionPrueba: ISaveLocalizacionPruebaViewModel): Promise<Observable<IResponseStatusViewModel<ISaveLocalizacionPruebaRsViewModel>>> {
	return await this._localizacionPruebaService.saveLocalizacionPrueba(localizacionPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPrueba: IGetLocalizacionPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaRsViewModel>>>
	*/
	public async getLocalizacionPrueba(localizacionPrueba: IGetLocalizacionPruebaViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaRsViewModel>>> {
	return await this._localizacionPruebaService.getLocalizacionPrueba(localizacionPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPrueba: IGetLocalizacionPruebaPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaPaginadoRsViewModel>>>
	*/
	public async getLocalizacionPruebaPaginado(localizacionPrueba: IGetLocalizacionPruebaPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaPaginadoRsViewModel>>> {
	return await this._localizacionPruebaService.getLocalizacionPruebaPaginado(localizacionPrueba);
	}
	/**
	* Obtiene el registro por id
	* @param localizacionPrueba: IGetLocalizacionPruebaByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaByIdRsViewModel>>>
	*/
	public async getLocalizacionPruebaById(localizacionPrueba: IGetLocalizacionPruebaByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetLocalizacionPruebaByIdRsViewModel>>> {
	return await this._localizacionPruebaService.getLocalizacionPruebaById(localizacionPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPrueba: IUpdateLocalizacionPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaRsViewModel>>>
	*/
	public async updateLocalizacionPrueba(localizacionPrueba: IUpdateLocalizacionPruebaViewModel): Promise<Observable<IResponseStatusViewModel<IUpdateLocalizacionPruebaRsViewModel>>> {
	return await this._localizacionPruebaService.updateLocalizacionPrueba(localizacionPrueba);
	}

}
