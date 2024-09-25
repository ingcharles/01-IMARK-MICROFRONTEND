/**
* Clase PruebaUseCase.
*
* @author  Carlos Anchundia
* @date    08-05-2024
* @name    PruebaUseCase
* @package UseCase
* @subpackage Domain
*/

import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { PruebaService } from '../../../data/prueba/services/prueba.services';
import { IGetPruebaByIdRsViewModel, IGetPruebaByIdViewModel, IGetPruebaRsViewModel, IGetPruebaViewModel, IGetPruebaPaginadoRsViewModel, IGetPruebaPaginadoViewModel, ISavePruebaRsViewModel, ISavePruebaViewModel, IUpdatePruebaRsViewModel, IUpdatePruebaViewModel  } from '../viewModels/i-prueba.viewModel';
import { IResponseStatusViewModel } from '../../base/viewModels/i-response-status.viewModel';


@Injectable({
	providedIn: 'root',
})
export class PruebaUseCase {

	/**
	* Constructor
	* Se pueden llamar los servicios que van ser utilizados en los casos de uso
	 */
	constructor()
	{
	}
	_pruebaService: PruebaService = inject(PruebaService)

	/**
	* Guarda el registro actual
	* @param prueba: ISavePruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<ISavePruebaRsViewModel>>>
	*/
	public async savePrueba(prueba: ISavePruebaViewModel): Promise<Observable<IResponseStatusViewModel<ISavePruebaRsViewModel>>> {
	return await this._pruebaService.savePrueba(prueba);
	}
	/**
	* Obtiene el/los registros
	* @param prueba: IGetPruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaRsViewModel>>>
	*/
	public async getPrueba(prueba: IGetPruebaViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaRsViewModel>>> {
	return await this._pruebaService.getPrueba(prueba);
	}
	/**
	* Obtiene el/los registros
	* @param prueba: IGetPruebaPaginadoViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaPaginadoRsViewModel>>>
	*/
	public async getPruebaPaginado(prueba: IGetPruebaPaginadoViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaPaginadoRsViewModel>>> {
	return await this._pruebaService.getPruebaPaginado(prueba);
	}
	/**
	* Obtiene el registro por id
	* @param prueba: IGetPruebaByIdViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IGetPruebaByIdRsViewModel>>>
	*/
	public async getPruebaById(prueba: IGetPruebaByIdViewModel): Promise<Observable<IResponseStatusViewModel<IGetPruebaByIdRsViewModel>>> {
	return await this._pruebaService.getPruebaById(prueba);
	}
	/**
	* Obtiene el/los registros
	* @param prueba: IUpdatePruebaViewModel
	* @return Promise<Observable<IResponseStatusViewModel<IUpdatePruebaRsViewModel>>>
	*/
	public async updatePrueba(prueba: IUpdatePruebaViewModel): Promise<Observable<IResponseStatusViewModel<IUpdatePruebaRsViewModel>>> {
	return await this._pruebaService.updatePrueba(prueba);
	}

}
