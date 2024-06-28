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

import { IPage } from '../../../data/base/interfaces/i-page';
import { LocalizacionPruebaService } from '../../../data/localizacion-prueba/services/localizacion-prueba.services';
import { IGetLocalizacionPruebaByIdFromRsViewModel, IGetLocalizacionPruebaByIdViewModel, IGetLocalizacionPruebaFromRsViewModel, IGetLocalizacionPruebaPaginadoFromRsViewModel, IGetLocalizacionPruebaPaginadoViewModel, IGetLocalizacionPruebaViewModel, ISaveLocalizacionPruebaFromRsViewModel, ISaveLocalizacionPruebaViewModel, IUpdateLocalizacionPruebaFromRsViewModel, IUpdateLocalizacionPruebaViewModel } from '../viewModels/i-localizacion-prueba.viewModel';


@Injectable({
	providedIn: 'root',
})
export class LocalizacionPruebaUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilziados en los casos de uso
	* @param _localizacionPruebaService: LocalizacionPruebaService
	* @return Promise<Observable<ISaveLocalizacionPruebaFromRsViewModel>>
	 */
	constructor()
	{
	}
  // private _localizacionPruebaService: LocalizacionPruebaService
  _localizacionPruebaService: LocalizacionPruebaService = inject(LocalizacionPruebaService);

	/**
	* Guarda el registro actual
	* @param localizacionPrueba: ISaveLocalizacionPruebaViewModel
	* @return Promise<Observable<ISaveLocalizacionPruebaFromRsViewModel>>
	*/
	public async saveLocalizacionPrueba(localizacionPrueba: ISaveLocalizacionPruebaViewModel): Promise<Observable<ISaveLocalizacionPruebaFromRsViewModel>> {
	return await this._localizacionPruebaService.saveLocalizacionPrueba(localizacionPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPrueba: IGetLocalizacionPruebaViewModel
	* @return Promise<Observable<IGetLocalizacionPruebaFromRsViewModel>>
	*/
	public async getLocalizacionPrueba(localizacionPrueba: IGetLocalizacionPruebaViewModel): Promise<Observable<IGetLocalizacionPruebaFromRsViewModel>> {
	return await this._localizacionPruebaService.getLocalizacionPrueba(localizacionPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPrueba: IGetLocalizacionPruebaPaginadoViewModel
	* @return Promise<Observable<IGetLocalizacionPruebaPaginadoFromRsViewModel>>
	*/
	public async getLocalizacionPruebaPaginado(localizacionPrueba: IGetLocalizacionPruebaPaginadoViewModel): Promise<Observable<IPage<IGetLocalizacionPruebaPaginadoFromRsViewModel>>> {
	return await this._localizacionPruebaService.getLocalizacionPruebaPaginado(localizacionPrueba);
	}
	/**
	* Obtiene el registro por id
	* @param localizacionPrueba: IGetLocalizacionPruebaByIdViewModel
	* @return Promise<Observable<IGetLocalizacionPruebaByIdFromRsViewModel>>
	*/
	public async getLocalizacionPruebaById(localizacionPrueba: IGetLocalizacionPruebaByIdViewModel): Promise<Observable<IGetLocalizacionPruebaByIdFromRsViewModel>> {
	return await this._localizacionPruebaService.getLocalizacionPruebaById(localizacionPrueba);
	}
	/**
	* Obtiene el/los registros
	* @param localizacionPrueba: IUpdateLocalizacionPruebaViewModel
	* @return Promise<Observable<IUpdateLocalizacionPruebaFromRsViewModel>>
	*/
	public async updateLocalizacionPrueba(localizacionPrueba: IUpdateLocalizacionPruebaViewModel): Promise<Observable<IUpdateLocalizacionPruebaFromRsViewModel>> {
	return await this._localizacionPruebaService.updateLocalizacionPrueba(localizacionPrueba);
	}

}
